import { Eighth, EighthRest, Half, HalfRest, Quarter, QuarterRest, Sixteenth, SixteenthRest, Whole, WholeRest } from "./components/sheet_music/notes";
import { NoteConstructorTemplate, NoteTemplate, RestConstructorTemplate } from "./types/templates";

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

// Calculates the duration of a measure based on the top and bottom values of the meter.
export const getMeasureDuration = (top: number, bottom: number): number => {
  let noteType = Quarter
  switch (bottom) {
    case 1:
      noteType = Whole
      break;
    case 2:
      noteType = Half
      break;
    case 4:
      noteType = Quarter
      break;
    case 8:
      noteType = Eighth
      break;
    case 16:
      noteType = Sixteenth
      break;
  }
  return top * new noteType('C', 4, false).beatDuration
};


// Returns the biggest fitting note that can fit in the given duration.
// Returns null if no note can fit.
export const getMaxFittingNote = (beatDuration: number): NoteConstructorTemplate => {
  const candidates: NoteConstructorTemplate[] = [Whole, Half, Quarter, Eighth, Sixteenth];

  for (const NoteClass of candidates) {

    // Creating instances just to access beatDuration
    const instance = new NoteClass('C', 4, false);
    if (instance.beatDuration <= beatDuration) {
      return NoteClass;
    }
  }

  throw new Error('No fitting note found');
}

// Returns the biggest fitting rest that can fit in the given duration.
// Returns null if no rest can fit
export const getMaxFittingRest = (beatDuration: number): RestConstructorTemplate => {
  const candidates: RestConstructorTemplate[] = [WholeRest, HalfRest, QuarterRest, EighthRest, SixteenthRest];

  for (const RestClass of candidates) {
    
    // Creating instances just to access beatDuration
    const instance = new RestClass();
    if (instance.beatDuration <= beatDuration) {
      return RestClass;
    }
  }

  throw new Error('No fitting rest found');
}
