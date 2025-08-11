import { useReducer } from "react"
import { AddNotePayload, MeasureTemplate, MusicAction, MusicTemplate, NoteTemplate, RemoveNotePayload, RestTemplate } from "../types/sheetMusicTemplates"
import * as Tone from 'tone'
import { type Sampler } from "tone"
import { getMeasureDurationByMeter } from "../utils";
import { mergeTiesAcrossMeasures, normalizeMeasure } from "./helpers/useSheetMusicFunctions";
import { NoteBase } from "../classes/notes";

export const sheetMusicReducer = (prevState: MusicTemplate, action: MusicAction) => {
  const measureDuration = getMeasureDurationByMeter(prevState.meter.top, prevState.meter.bottom)

  function addNote() {
    const finalState = { ...prevState }
    const { note, measureIndex, noteIndex } = action.payload as AddNotePayload

    const measureSpace = measureDuration / note.beatDuration // How many notes can fit in the measure
    if (
      !finalState.measures[measureIndex] // If there is no measure at the index
      || measureDuration < note.beatDuration // If there is not enough space in the measure
      || measureSpace < noteIndex + 1 // If there is not enough space in the measure
    ) {
      console.log('prevstate', measureDuration, note.beatDuration)
      return prevState
    }

    // Add the note to the measure
    finalState.measures[measureIndex].notes.splice(noteIndex, 0, note)

    // Normalize the measures
    let mi = measureIndex
    while (true) {
      const currentMs = finalState.measures[mi];
      if (!currentMs) break;
      normalizeMeasure(finalState.measures, currentMs, finalState.measures[mi + 1], measureDuration)
      mi++;
    }
    mergeTiesAcrossMeasures(finalState.measures)

    return finalState
  }

  function removeNote() {
    const finalState = { ...prevState }
    const { measureIndex, noteIndex } = action.payload as RemoveNotePayload

    if (
      !finalState.measures[measureIndex]
      || !finalState.measures[measureIndex].notes[noteIndex]
    ) return prevState

    /// Remove the note from the measure
    finalState.measures[measureIndex].notes.splice(noteIndex, 1)

    // Normalize the measures
    let mi = measureIndex
    while (true) {
      const currentMs = finalState.measures[mi];
      if (!currentMs) break;
      normalizeMeasure(finalState.measures, currentMs, finalState.measures[mi + 1], measureDuration)
      mi++;
    }
    mergeTiesAcrossMeasures(finalState.measures)

    return finalState
  }
  switch (action.type) {
    case 'ADD_NOTE': return addNote();
    case 'REMOVE_NOTE': return removeNote();
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

    function getNextNote(measureIndex: number, noteIndex: number) {
      let next = music.measures[measureIndex].notes[noteIndex + 1]
      if (next) return next

      next = music.measures[measureIndex + 1].notes[0]
      if (next) return next

      return undefined
    }

    const beat = 60 / music.bpm
    let now = Tone.now();
    let skipNotesCount = 0
    music.measures.map((ms: MeasureTemplate, msi: number) => {
      ms.notes.map((nc: NoteTemplate | RestTemplate, nci: number) => {
        let ncBd: number = nc.beatDuration
        if (nc instanceof NoteBase) {
          if (skipNotesCount > 0) return skipNotesCount--
          let cNote: NoteTemplate | undefined = nc
          while (cNote.isTied) {
            skipNotesCount++
            cNote = getNextNote(msi, nci) as NoteTemplate
            if (!cNote) break;

            msi++
            nci++
            ncBd += cNote.beatDuration
          }
          nc.play(sampler, now, beat)
        }
        now += beat * ncBd
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