import { NoteTemplate } from "./types/templates";

// List of note names used for vertical positioning
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Calculates the vertical distance percentage of the note
export const getTopDistance = (note: NoteTemplate) => {
  const topDistance = 475 - note.octave * 87.5 - notes.indexOf(note.note) * 12.5;
  return topDistance
};


// Returns a tuple indicating if the note exceeds top or bottom bounds, and the distance value.
// [isTop, distance]
// isTop = true if the note is above, false if the note in under.
// distance = how much it exceeds.
export const getExtraDistance = (note: NoteTemplate): [boolean, number] => {
  const topDistance = 475 - note.octave * 87.5 - notes.indexOf(note.note) * 12.5;

  if (topDistance < 0) {
    return [true, -topDistance];
  }

  if (topDistance - 100 > 0) {
    return [false, topDistance - 100];
  }

  return [false, 0];
};
