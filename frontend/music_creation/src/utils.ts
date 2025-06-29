import { Eighth, EighthRest, Half, HalfRest, Quarter, QuarterRest, Sixteenth, SixteenthRest, Whole, WholeRest } from "./components/sheet_music/notes";
import { CleanNoteType, NoteConstructorTemplate, NotesTemplate, NoteTemplate, OctaveType, RestConstructorTemplate, RestTemplate } from "./types/templates";

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
export const getMeasureDurationByMeter = (top: number, bottom: number): number => {
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

// Returns the duration of the measure notes.
export const getMsNotesDr = (notes: NotesTemplate[]): number => {
  return notes.reduce((acc, note) => acc + note.beatDuration, 0)
}

// Returns the biggest fitting note that can fit in the given duration.
export const getMaxFittingNote = (
  beatDuration: number,
  note: CleanNoteType,
  octave: OctaveType,
  isSharp: boolean
): NoteTemplate => {
  const candidates: NoteConstructorTemplate[] = [Whole, Half, Quarter, Eighth, Sixteenth];

  for (const NoteClass of candidates) {

    // Checking if the note's beatDuration is less than or equal to the given beatDuration
    const instance = new NoteClass(note, octave, isSharp);
    if (instance.beatDuration <= beatDuration) {
      return instance;
    }
  }

  throw new Error('No fitting note found');
}

// Returns the biggest fitting rest that can fit in the given duration.
export const getMaxFittingRest = (beatDuration: number): RestTemplate => {
  const candidates: RestConstructorTemplate[] = [WholeRest, HalfRest, QuarterRest, EighthRest, SixteenthRest];

  for (const RestClass of candidates) {

    // Checking if the rest's beatDuration is less than or equal to the given beatDuration
    const instance = new RestClass();
    if (instance.beatDuration <= beatDuration) {
      return instance;
    }
  }

  throw new Error('No fitting rest found');
}

// Returns a list of notes and rests that fit in the given duration, starting with the given note.
export const fillBdWithNote = (
  beatDuration: number,
  note: CleanNoteType,
  octave: OctaveType,
  isSharp: boolean
): (NoteTemplate | RestTemplate)[] => {
  const notes: (NoteTemplate | RestTemplate)[] = []

  // Get the biggest note that can fit in the given duration
  const firstNote = getMaxFittingNote(beatDuration, note, octave, isSharp)
  notes.push(firstNote);
  beatDuration -= firstNote.beatDuration;

  // Fill the remaining space with rests
  while (beatDuration > 0) {
    const newRest = getMaxFittingRest(beatDuration)
    notes.push(newRest);
    beatDuration -= newRest.beatDuration;
  }

  return notes
}

// Returns a list of rests that fit in the given duration.
export const fillBdWithRests = (beatDuration: number): (NoteTemplate | RestTemplate)[] => {
  const notes: (NoteTemplate | RestTemplate)[] = []

  // Fill the space with rests
  while (beatDuration > 0) {
    const newRest = getMaxFittingRest(beatDuration)
    notes.push(newRest);
    beatDuration -= newRest.beatDuration;
  }

  return notes
}
