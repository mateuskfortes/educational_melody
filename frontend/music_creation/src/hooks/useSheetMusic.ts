import { useReducer } from "react"
import { AddNotePayload, ChordTemplate, MeasureTemplate, MusicAction, MusicTemplate, NotesTemplate, NoteTemplate, RemoveNotePayload, TieNotePayload } from "../types/sheetMusicTemplates"
import * as Tone from 'tone'
import { type Sampler } from "tone"
import { copySheetMusic, createMeasure, getConstructor, getMeasureDurationByMeter, mergeNotesToList } from "../utils";
import { fillBdWithChords, fillBdWithNotes, getNextNote, getPreviousNote, mergeRestsAcrossMeasures, mergeTiesAcrossMeasures, normalizeMeasuresAcrossSheetMusic } from "./helpers/useSheetMusicFunctions";
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
      || measureDuration < note.beatDuration // If there is not enough duration space in the measure
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
            notes: [noteOnState, insertNote]
          })
        }
      }
      else {
        const firstGroup = fillBdWithChords(Math.min(insertNote.beatDuration, noteOnState.beatDuration), mergeNotesToList(noteOnState, insertNote))

        // If the insertNote is bigger than the note in the current state.
        const insertBigger = insertNote.beatDuration > noteOnState.beatDuration;

        // Marks notes in the last chord of the first group as tied based on comparison with the inserted note:
        // - If the note is the inserted one, it is marked if it is longer than the note in the current state.
        // - Otherwise, existing notes are marked if they are not equal to the inserted note.
        firstGroup[firstGroup.length - 1].notes.forEach(n => n.isTied = insertNote.equal(n) === insertBigger)

        let secondGroup: (NoteTemplate | ChordTemplate)[] = []
        const secondGroupDuration = Math.abs(insertNote.beatDuration - noteOnState.beatDuration)

        if (insertBigger) {
          secondGroup = fillBdWithNotes(secondGroupDuration, insertNote)
        }
        else if (!insertBigger) {
          if (noteOnState instanceof Chord) {
            secondGroup = fillBdWithChords(secondGroupDuration, noteOnState.notes)
          }
          else if (noteOnState instanceof NoteBase) {
            secondGroup = fillBdWithNotes(secondGroupDuration, noteOnState)
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
      || (chordNoteIndex && (!(noteOnState instanceof Chord) || !noteOnState.notes[chordNoteIndex])) // If there is no note at the given chord index or it is not a chord
    ) return prevState

    const previousNote = getPreviousNote(finalState.measures, measureIndex, noteIndex)

    // Removes a note from within a chord
    if (chordNoteIndex && noteOnState instanceof Chord) {
      const removedNote = noteOnState.notes.splice(chordNoteIndex, 1)[0]

      // Handles the ties in the previous note
      if (previousNote instanceof NoteBase && previousNote.equal(removedNote)) {
        previousNote.isTied = removedNote.isTied
      }
      else if (previousNote instanceof Chord) {
        const equalOnPrevious = previousNote.notes.find(n => removedNote.equal(n))
        if (equalOnPrevious) equalOnPrevious.isTied = removedNote.isTied
      }

      // If only one note remains, convert the chord into a single note.
      if (noteOnState.notes.length === 1) {
        const newNote = new noteOnState.noteConstructor(noteOnState.notes[0])
        measureOnState.notes.splice(noteIndex, 1, newNote)
      }
    }
    // Removes a note that is not part of a chord
    else {
      const removedNote = measureOnState.notes.splice(noteIndex, 1)[0]

      // Handles the ties in the previous note
      if (previousNote && !(removedNote instanceof RestBase)) {
        if (previousNote instanceof NoteBase) {
          if (removedNote instanceof NoteBase) previousNote.isTied = removedNote.isTied
          else if (removedNote instanceof Chord) previousNote.isTied = !!removedNote.notes.find(n => previousNote.equal(n))?.isTied
        }
        else if (previousNote instanceof Chord) {
          if (removedNote instanceof NoteBase) {
            const equalOnPrevious = previousNote.notes.find(n => removedNote.equal(n))
            if (equalOnPrevious) equalOnPrevious.isTied = removedNote.isTied
          }
          else if (removedNote instanceof Chord) {
            removedNote.notes.forEach(rmNote => {
              const equalOnPrevious = previousNote.notes.find(pvNote => rmNote.equal(pvNote))
              if (equalOnPrevious) equalOnPrevious.isTied = rmNote.isTied
            })
          }
        }
      }
    }

    normalizeMeasuresAcrossSheetMusic(finalState.measures, measureDuration)
    mergeTiesAcrossMeasures(finalState.measures)
    mergeRestsAcrossMeasures(finalState.measures)

    return finalState
  }

  function tieNote() {
    const finalState = copySheetMusic(prevState)
    const { startMeasureIndex, startNoteIndex, startChordNoteIndex, endMeasureIndex, endNoteIndex } = action.payload as TieNotePayload

    const startMeasure = finalState.measures[startMeasureIndex]
    const startMusicNote = startMeasure?.notes[startNoteIndex]
    if (
      !startMusicNote
      || (startMusicNote instanceof Chord && !startChordNoteIndex)
      || (startMusicNote instanceof Chord && !startMusicNote.notes[startChordNoteIndex as number])
      || startMusicNote instanceof RestBase
    ) return prevState
    const startNote = startMusicNote instanceof Chord ? startMusicNote.notes[startChordNoteIndex as number] : startMusicNote as NoteTemplate

    startNote.isTied = true

    let [prevMeasureIndex, prevNoteIndex] = [startMeasureIndex, startNoteIndex]

    while (true) {
      const result = getNextNote(finalState.measures, prevMeasureIndex, prevNoteIndex)
      let { note } = result
      const { measureIndex, noteIndex } = result

      if (note instanceof Chord) {
        const chordNoteIndex = note.notes.findIndex(n => n.equal(startNote))
        if (chordNoteIndex < 0) return prevState
        note = note.notes[chordNoteIndex]
      }

      if (!note || note instanceof RestBase || !startNote.equal(note as NoteTemplate))
        return prevState
      else if (measureIndex === endMeasureIndex && noteIndex === endNoteIndex)
        break

      (note as NoteTemplate).isTied = true;

      [prevMeasureIndex, prevNoteIndex] = [measureIndex, noteIndex]
    }

    return finalState
  }

  switch (action.type) {
    case 'ADD_NOTE': return addNote();
    case 'REMOVE_NOTE': return removeNote();
    case 'TIE_NOTE': return tieNote();
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
        const { note: nextNote } = getNextNote(music.measures, measureIndex, noteIndex)
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