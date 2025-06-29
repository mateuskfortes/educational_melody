import { useReducer } from "react"
import { ChordTemplate, MeasureTemplate, MusicAction, MusicTemplate, NoteTemplate, RestTemplate } from "../types/templates"
import * as Tone from 'tone'
import { type Sampler } from "tone"
import { getMaxFittingNote, getMaxFittingRest, getMeasureDuration } from "../utils";
import { NoteBase, RestBase } from "../components/sheet_music/notes";

export const sheetMusicReducer = (prevState: MusicTemplate, action: MusicAction) => {
  const measureDuration = getMeasureDuration(prevState.meter.top, prevState.meter.bottom)

  // Get the current measure duration
  function getCurrentMsDr(measure: MeasureTemplate): number {
    return measure.notes.reduce((acc, note) => acc + note.beatDuration, 0)
  }

  // Fills the current measure with rests until it reaches the full duration.
  // If a note doesn't fit, it's moved (or split) to the next measure.
  function normalizeMeasure(state: MusicTemplate, measure: MeasureTemplate, nextMeasure: MeasureTemplate | undefined) {
    // Returns if the measure is normalized
    if (getCurrentMsDr(measure) <= measureDuration) return

    const popNote = measure.notes.pop() as NoteTemplate;
    let nextMeasureNeededDuration = popNote.beatDuration - (measureDuration - getCurrentMsDr(measure));

    // If the note fits exactly in the current measure, move it to the next
    if (getCurrentMsDr(measure) >= measureDuration) {
      if (nextMeasure) {
        nextMeasure.notes.unshift(popNote);
      } else {
        // If the removed note is a rest, move it to the next measure
        if (popNote instanceof RestBase) return normalizeMeasure(state, measure, nextMeasure)

        // If the removed note is a note, create a new measure and add it
        const newMs: MeasureTemplate = { notes: [popNote] }
        while (getCurrentMsDr(newMs) < measureDuration) {
          const newMsRestConstructor = getMaxFittingRest(measureDuration - getCurrentMsDr(newMs))
          newMs.notes.push(new newMsRestConstructor())
        }
        state.measures.push(newMs)
      }
    }

    // If the note needs to be split across measures
    else {
      const getMaxFitting = popNote instanceof NoteBase
        ? getMaxFittingNote
        : getMaxFittingRest;

      // Replace popNote with a shorter note that fits
      const noteConstructor = getMaxFitting(measureDuration - getCurrentMsDr(measure));
      const newNote = new noteConstructor(popNote.note, popNote.octave, popNote.isSharp);
      measure.notes.push(newNote);

      // Fill the remaining space in the current measure with rests
      while (measureDuration > getCurrentMsDr(measure)) {
        const newRestConstructor = getMaxFittingRest(nextMeasureNeededDuration);
        const newRest = new newRestConstructor();
        measure.notes.push(newRest);
      }
      // If there's no next measure, stop processing
      if (!nextMeasure) return normalizeMeasure(state, measure, nextMeasure);

      // Add the remaining duration as rests to the next measure
      while (nextMeasureNeededDuration) {
        const newRestConstructor = getMaxFittingRest(nextMeasureNeededDuration);
        const newRest = new newRestConstructor();
        nextMeasure.notes.unshift(newRest);
        nextMeasureNeededDuration -= newRest.beatDuration;
      }
    }

    // If it's not normalized yet, recursively call the function
    normalizeMeasure(state, measure, nextMeasure)
  }

  switch (action.type) {
    case 'ADD_NOTE':
      const finalState = { ...prevState }
      const { note, measureIndex, noteIndex } = action.payload

      const measureSpace = measureDuration / note.beatDuration // How many notes can fit in the measure
      if (
        !finalState.measures[measureIndex] // If there is no measure at the index
        || measureSpace < note.beatDuration // If there is not enough space in the measure
        || measureSpace < noteIndex + 1 // If there is not enough space in the measure
      ) {
        return prevState
      }

      // Add the note to the measure
      finalState.measures[measureIndex].notes.splice(noteIndex, 0, note)

      let mi = measureIndex
      while (true) {
        const currentMs = finalState.measures[mi];
        if (!currentMs) break;
        normalizeMeasure(finalState, currentMs, finalState.measures[mi + 1])
        mi++;
      }

      return finalState

    default:
      return prevState;
  }
}

const useSheetMusic = (initialState: MusicTemplate) => {
  const [music, dispatch] = useReducer(sheetMusicReducer, initialState)

  let loaded = false
  let running = false

  const sampler: Sampler = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  async function run() {
    if (!loaded) return

    if (running) return
    running = true

    const beat = 60 / music.bpm
    let now = Tone.now();
    music.measures.map((ms: MeasureTemplate) => {
      ms.notes.map((nc: NoteTemplate | ChordTemplate | RestTemplate) => {
        nc.play(sampler, now, beat)
        now += beat * nc.beatDuration
      })
    })

    await new Promise(resolve => setTimeout(resolve, (now - Tone.now()) * 1000));
    running = false
  }

  Tone.loaded().then(() => {
    loaded = true
  });


  return { run, music, dispatch } as const
}

export default useSheetMusic