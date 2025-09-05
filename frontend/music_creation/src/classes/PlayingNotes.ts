import { Sampler } from "tone";
import { NoteTemplate, PlayingNoteTemplate } from "../types/sheetMusicTemplates"

/**
 * Class representing the currently playing notes.
 * 
 * This class manages notes that are being played, taking into account tied notes.
 * It ensures that a note is only started if it is not already playing, and it
 * tracks the end time of each note including any extra duration caused by ties.
 */
export default class PlayingNotes {
  notes: PlayingNoteTemplate[] = []

  filter(now: number) {
    this.notes = this.notes.filter(n => n.end > now)
  }

  addToPlay(note: NoteTemplate, sampler: Sampler, now: number, beat: number, extraTieDuration: number) {
    this.filter(now)
    const existingNote = this.notes.find(
      n => note.equal(n)
    )
    if (!existingNote) {
      note.play(sampler, now, beat, extraTieDuration)
      this.notes.push({
        cleanNote: note.cleanNote,
        octave: note.octave,
        accidental: note.accidental,
        end: now + (note.beatDuration + extraTieDuration) * beat
      })
    }
  }
}