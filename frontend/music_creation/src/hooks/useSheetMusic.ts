import { useReducer } from "react"
import { AddNotePayload, ChordTemplate, MeasureTemplate, MusicAction, MusicTemplate, NotesTemplate, NoteTemplate, RemoveNotePayload } from "../types/sheetMusicTemplates"
import * as Tone from 'tone'
import { type Sampler } from "tone"
import { copySheetMusic, createMeasure, getChordArgsFromNotes, getConstructor, getMeasureDurationByMeter, mergeNotesToList } from "../utils";
import { fillBdWithChords, fillBdWithNotes, mergeRestsAcrossMeasures, mergeTiesAcrossMeasures, normalizeMeasuresAcrossSheetMusic } from "./helpers/useSheetMusicFunctions";
import { Chord, NoteBase, RestBase } from "../classes/notes";
import PlayingNotes from "../classes/PlayingNotes";

export const sheetMusicReducer = (prevState: MusicTemplate, action: MusicAction) => {
  const measureDuration = getMeasureDurationByMeter(prevState.meter.top, prevState.meter.bottom)

  function addNote() {
    const finalState = copySheetMusic(prevState)
    const { note, measureIndex, noteIndex, addToChord } = action.payload as AddNotePayload

    const isFinalPosition = measureIndex === finalState.measures.length && noteIndex === 0 // If the note is at the end of the sheet music
    const measureSpace = measureDuration / note.beatDuration // How many notes can fit in the measure
    const measureOnState = finalState.measures[measureIndex]
    const noteOnState = measureOnState?.notes[noteIndex]
    if (
      (!measureOnState && !isFinalPosition) // If there is no measure at the index
      || measureDuration < note.beatDuration // If there is not enough space in the measure
      || measureSpace < noteIndex + 1 // If there is not enough space in the measure
      || (note instanceof Chord && note.notes.length === 0) // If there is no notes inside the chord
      || (addToChord && (noteOnState instanceof RestBase || !(note instanceof NoteBase))) // Prevent adding either a Rest to a chord or a Note to a chord when the target is a Rest
    ) {
      return prevState
    }

    if (addToChord) {
      const insertNote = note as NoteTemplate

      if (note.beatDuration === noteOnState.beatDuration) {
        if (noteOnState instanceof Chord) {
          noteOnState.notes.push(insertNote)
        }
        else if (noteOnState instanceof NoteBase) {
          measureOnState.notes[noteIndex] = new Chord({
            noteConstructor: getConstructor(noteOnState),
            notes: getChordArgsFromNotes([noteOnState, insertNote])
          })
        }
      }
      else {
        const firstGroup = fillBdWithChords(Math.min(insertNote.beatDuration, noteOnState.beatDuration), getChordArgsFromNotes(mergeNotesToList(noteOnState, insertNote)))

        // If the insertNote is bigger than the note in the current state.
        const insertBigger = insertNote.beatDuration > noteOnState.beatDuration;

        // Marks notes in the last chord of the first group as tied:
        // - The inserted note is marked if it is longer than the note in the current state.
        // - Other notes are marked if they are not equal to the inserted note.
        firstGroup[firstGroup.length - 1].notes.forEach(n => n.isTied = insertNote.equal(n) === insertBigger)
        let secondGroup: (NoteTemplate | ChordTemplate)[] = []

        const secondGroupDuration = Math.abs(insertNote.beatDuration - noteOnState.beatDuration)

        if (insertBigger) {
          secondGroup = fillBdWithNotes(secondGroupDuration, insertNote.cleanNote, insertNote.octave, insertNote.accidental, insertNote.isTied)
        }
        else if (!insertBigger) {
          if (noteOnState instanceof Chord) {
            secondGroup = fillBdWithChords(secondGroupDuration, getChordArgsFromNotes(noteOnState.notes))
          }
          else if (noteOnState instanceof NoteBase) {
            secondGroup = fillBdWithNotes(secondGroupDuration, noteOnState.cleanNote, noteOnState.octave, noteOnState.accidental, noteOnState.isTied)
          }
        }
        measureOnState.notes.splice(noteIndex, 1, ...firstGroup, ...secondGroup)
      }
    }
    else {
      let insertNote = note

      // If the chord has only one note, convert it into a single note.
      if (note instanceof Chord && note.notes.length === 1) {
        insertNote = new note.noteConstructor(note.notes[0])
      }

      if (isFinalPosition) finalState.measures[measureIndex] = createMeasure(insertNote)
      else measureOnState.notes.splice(noteIndex, 0, insertNote)
    }

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
     * This function does not check if the next note is equal 
     * to the current one, it only verifies if the current note 
     * is tied to it.
     * 
     * @param measureIndex - The index of the measure where the starting note is located.
     * @param noteIndex - The index of the note within the measure.
     * @returns The sum of beat durations of all tied notes following the start note.
     */
    function increaseBeatDuration(
      measureIndex: number,
      noteIndex: number,
    ) {
      let totalExtraBeatDuration = 0
      let nextNote: NotesTemplate | undefined

      function goToNextNote() {
        const measure = music.measures[measureIndex]
        if (noteIndex === measure.notes.length - 1) {
          measureIndex++
          noteIndex = 0
        }
        else {
          noteIndex++
        }
      }

      while (true) {
        nextNote = getNextNote(measureIndex, noteIndex)
        totalExtraBeatDuration += nextNote?.beatDuration ?? 0
        if (
          !nextNote
          || nextNote instanceof RestBase
          || (nextNote instanceof NoteBase && !nextNote.isTied) // If the next note is not tied
          || (nextNote instanceof Chord && nextNote.notes.every(n => !n.isTied)) // If none of the notes in the next chord are tied

        ) return totalExtraBeatDuration

        goToNextNote()
      }
    }

    const beat = 60 / music.bpm
    let now = Tone.now();
    const playingNotes = new PlayingNotes()

    music.measures.map((measure: MeasureTemplate, measureIndex: number) => {
      measure.notes.map((note: NotesTemplate, NoteIndex: number) => {

        if (note instanceof NoteBase) {
          let extraTiedDuration = 0
          if (note.isTied) {
            extraTiedDuration = increaseBeatDuration(measureIndex, NoteIndex)
          }
          playingNotes.addToPlay(note, sampler, now, beat, extraTiedDuration)
        }

        else if (note instanceof Chord) {
          note.notes.forEach(n => {
            let extraTiedDuration = 0
            if (n.isTied) {
              extraTiedDuration = increaseBeatDuration(measureIndex, NoteIndex)
            }
            playingNotes.addToPlay(n, sampler, now, beat, extraTiedDuration)
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