import { useReducer } from "react"
import { AddNotePayload, MeasureTemplate, MusicAction, MusicTemplate, NotesTemplate, NoteTemplate, RemoveNotePayload } from "../types/sheetMusicTemplates"
import * as Tone from 'tone'
import { type Sampler } from "tone"
import { copySheetMusic, createMeasure, getMeasureDurationByMeter } from "../utils";
import { mergeRestsAcrossMeasures, mergeTiesAcrossMeasures, normalizeMeasuresAcrossSheetMusic } from "./helpers/useSheetMusicFunctions";
import { Chord, NoteBase, RestBase } from "../classes/notes";
import PlayingNotes from "../classes/PlayingNotes";

export const sheetMusicReducer = (prevState: MusicTemplate, action: MusicAction) => {
  const measureDuration = getMeasureDurationByMeter(prevState.meter.top, prevState.meter.bottom)

  function addNote() {
    const finalState = copySheetMusic(prevState)
    const { note, measureIndex, noteIndex } = action.payload as AddNotePayload

    const isFinalPosition = measureIndex === finalState.measures.length && noteIndex === 0 // If the note is at the end of the sheet music
    const measureSpace = measureDuration / note.beatDuration // How many notes can fit in the measure
    if (
      (!finalState.measures[measureIndex] && !isFinalPosition) // If there is no measure at the index
      || measureDuration < note.beatDuration // If there is not enough space in the measure
      || measureSpace < noteIndex + 1 // If there is not enough space in the measure
      || (note instanceof Chord && note.notes.length === 0) // If there is no notes inside the chord
    ) {
      return prevState
    }

    let insertNote = note

    // If the chord has only one note, convert it into a single note.
    if (note instanceof Chord && note.notes.length === 1) {
      insertNote = new note.noteConstructor(note.notes[0])
    }

    // Add the note to the measure
    if (isFinalPosition) finalState.measures[measureIndex] = createMeasure(insertNote)
    else finalState.measures[measureIndex].notes.splice(noteIndex, 0, insertNote)

    normalizeMeasuresAcrossSheetMusic(finalState.measures, measureDuration)
    mergeTiesAcrossMeasures(finalState.measures)
    mergeRestsAcrossMeasures(finalState.measures)

    return finalState
  }

  function removeNote() {
    const finalState = copySheetMusic(prevState)
    const { measureIndex, noteIndex, chordNoteIndex } = action.payload as RemoveNotePayload

    const measureOnState = finalState.measures[measureIndex]
    const noteOnState = measureOnState?.notes[noteIndex]
    if (
      !measureOnState // If there is no measure at the given index
      || !noteOnState // If there is no note at the given index
      || (chordNoteIndex && noteOnState instanceof Chord && !noteOnState.notes[chordNoteIndex]) // If there is no note at the given chord index
    ) return prevState

    /// Remove the note from the measure
    if (chordNoteIndex && noteOnState instanceof Chord) {
      noteOnState.notes.splice(chordNoteIndex, 1)

      // If only one note remains, convert the chord into a single note.
      if (noteOnState.notes.length === 1) {
        const newNote = new noteOnState.noteConstructor(noteOnState.notes[0])
        measureOnState.notes.splice(noteIndex, 1, newNote)
      }
    }
    else
      measureOnState.notes.splice(noteIndex, 1)

    normalizeMeasuresAcrossSheetMusic(finalState.measures, measureDuration)
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
    function getNextNote(measureIndex: number, noteIndex: number): NotesTemplate | undefined {
      let next = music.measures[measureIndex].notes[noteIndex + 1]
      if (next) return next

      next = music.measures[measureIndex + 1]?.notes[0]
      if (next) return next

      return undefined
    }

    /**
     * Calculates the total extra beat duration contributed 
     * by all tied notes starting from the given note.
     *
     * @param note - The starting note to evaluate ties from.
     * @param measureIndex - The index of the measure where the starting note is located.
     * @param noteIndex - The index of the note within the measure.
     * @returns The sum of beat durations of all tied notes following the start note.
     */
    function increaseBeatDuration(
      initialNote: NoteTemplate,
      measureIndex: number,
      noteIndex: number,
    ) {
      let totalExtraBeatDuration = 0
      let nextNote: NotesTemplate | undefined
      let stop = false

      while (!stop) {
        nextNote = getNextNote(measureIndex, noteIndex)
        if (!nextNote || nextNote instanceof RestBase) return totalExtraBeatDuration

        if (nextNote instanceof Chord) {
          for (const chordNote of nextNote.notes) {
            if (
              chordNote.note === initialNote.note
              && chordNote.octave === initialNote.octave
              && chordNote.accidental === initialNote.accidental
            ) {
              const measure = music.measures[measureIndex]
              if (music.measures[measureIndex].notes.length - 1 <= noteIndex) measureIndex++
              noteIndex = measure.notes.length - 1 === noteIndex
                ? 0
                : noteIndex + 1
              totalExtraBeatDuration += nextNote.beatDuration

              if (!chordNote.isTied) stop = true
            }
          }
        }

        else if (
          nextNote instanceof NoteBase
          && nextNote.note === initialNote.note
          && nextNote.octave === initialNote.octave
          && nextNote.accidental === initialNote.accidental
        ) {
          const measure = music.measures[measureIndex]
          if (music.measures[measureIndex].notes.length - 1 <= noteIndex) measureIndex++
          noteIndex = measure.notes.length - 1 === noteIndex
            ? 0
            : noteIndex + 1
          totalExtraBeatDuration += nextNote.beatDuration

          if (!nextNote.isTied) stop = true
        }
      }

      return totalExtraBeatDuration
    }

    const beat = 60 / music.bpm
    let now = Tone.now();
    const playingNotes = new PlayingNotes()

    music.measures.map((measure: MeasureTemplate, measureIndex: number) => {
      measure.notes.map((note: NotesTemplate, NoteIndex: number) => {

        if (note instanceof NoteBase) {
          let extraTiedDuration = 0
          if (note.isTied) {
            extraTiedDuration = increaseBeatDuration(note as NoteTemplate, measureIndex, NoteIndex)
          }
          playingNotes.addToPlay(note as NoteTemplate, sampler, now, beat, extraTiedDuration)
        }

        else if (note instanceof Chord) {
          note.notes.forEach(n => {
            let extraTiedDuration = 0
            if (n.isTied) {
              extraTiedDuration = increaseBeatDuration(n as NoteTemplate, measureIndex, NoteIndex)
            }
            playingNotes.addToPlay(n as NoteTemplate, sampler, now, beat, extraTiedDuration)
          })
        }

        now += beat * note.beatDuration
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