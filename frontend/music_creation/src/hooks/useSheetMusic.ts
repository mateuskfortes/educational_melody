import { useReducer } from "react"
import { AddNotePayload, MeasureTemplate, MusicAction, MusicTemplate, NoteTemplate, RemoveNotePayload, RestTemplate } from "../types/sheetMusicTemplates"
import * as Tone from 'tone'
import { type Sampler } from "tone"
import { copySheetMusic, getMeasureDurationByMeter } from "../utils";
import { mergeRestsAcrossMeasures, mergeTiesAcrossMeasures, normalizeMeasure } from "./helpers/useSheetMusicFunctions";
import { NoteBase } from "../classes/notes";

export const sheetMusicReducer = (prevState: MusicTemplate, action: MusicAction) => {
  const measureDuration = getMeasureDurationByMeter(prevState.meter.top, prevState.meter.bottom)

  function addNote() {
    const finalState = copySheetMusic(prevState)
    const { note, measureIndex, noteIndex } = action.payload as AddNotePayload

    const measureSpace = measureDuration / note.beatDuration // How many notes can fit in the measure
    if (
      !finalState.measures[measureIndex] // If there is no measure at the index
      || measureDuration < note.beatDuration // If there is not enough space in the measure
      || measureSpace < noteIndex + 1 // If there is not enough space in the measure
    ) {
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
    mergeRestsAcrossMeasures(finalState.measures)

    return finalState
  }

  function removeNote() {
    const finalState = copySheetMusic(prevState)
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
    mergeRestsAcrossMeasures(finalState.measures)

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

    /**
     * Retrieves the next note in the music sequence based on the given measure and note indexes.
     *
     * @param measureIndex - The index of the current measure in the `music.measures` array.
     * @param noteIndex - The index of the current note within the measure's `notes` array.
     * @returns The next note object if found, otherwise `undefined`.
     */
    function getNextNote(measureIndex: number, noteIndex: number) {
      let next = music.measures[measureIndex].notes[noteIndex + 1]
      if (next) return next

      next = music.measures[measureIndex + 1]?.notes[0]
      if (next) return next

      return undefined
    }

    /**
     * Calculates the total extra beat duration contributed by all tied notes
     * starting from the given note, as well as the number of tied notes encountered.
     *
     * @param note - The starting note to evaluate ties from.
     * @param measureIndex - The index of the measure where the starting note is located.
     * @param noteIndex - The index of the note within the measure.
     * @returns A tuple:
     *   [ totalExtraBeatDuration, tiedNotesCount ]
     *   - totalExtraBeatDuration: The sum of beat durations of all tied notes following the start note.
     *   - tiedNotesCount: The number of tied notes that were counted.
     */
    function increaseBeatDuration(
      note: NoteTemplate,
      measureIndex: number,
      noteIndex: number,
    ) {
      let totalExtraBeatDuration = 0
      let tiedNotesCount = 0

      do {
        note = getNextNote(measureIndex, noteIndex) as NoteTemplate
        if (!note) return [totalExtraBeatDuration, tiedNotesCount]

        const measure = music.measures[measureIndex]
        tiedNotesCount++
        if (music.measures[measureIndex].notes.length - 1 <= noteIndex) measureIndex++
        noteIndex = measure.notes.length - 1 === noteIndex
          ? 0
          : noteIndex + 1
        totalExtraBeatDuration += note.beatDuration
      } while (note.isTied)

      return [totalExtraBeatDuration, tiedNotesCount]
    }


    const beat = 60 / music.bpm
    let now = Tone.now();
    let skipNotesCount = 0

    music.measures.map((measure: MeasureTemplate, measureIndex: number) => {
      measure.notes.map((note: NoteTemplate | RestTemplate, NoteIndex: number) => {
        if (skipNotesCount > 0) return skipNotesCount--

        let extraTiedDuration = 0
        if (note instanceof NoteBase) {
          if (note.isTied) {
            const [extraBeatDuration, newSkipNotesCount] = increaseBeatDuration(note, measureIndex, NoteIndex)
            skipNotesCount = newSkipNotesCount
            extraTiedDuration = extraBeatDuration
          }
          note.play(sampler, now, beat, extraTiedDuration)
        }
        now += beat * (note.beatDuration + extraTiedDuration)
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