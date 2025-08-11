import { Eighth, Half, Quarter, Sixteenth, Whole } from "./classes/notes";
import { MeasureTemplate, MusicTemplate, NoteTemplate } from "./types/sheetMusicTemplates";

// List of note names used for vertical positioning calculations.
// These represent the natural musical notes in ascending order.
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

/**
 * Calculates the vertical distance (in percentage or pixels) from a reference point
 * for a given note, based on its octave and note name.
 * 
 * This is used for positioning notes vertically in a music sheet UI.
 * 
 * Formula explanation:
 * - Starts from a base offset (475).
 * - Subtracts an amount based on the octave (each octave shifts by 87.5).
 * - Subtracts an amount based on the note position within the octave (each note shifts by 12.5).
 * 
 * @param note - The note object containing `note` (name) and `octave`.
 * @returns The calculated vertical top distance for the note.
 */
export const getTopDistance = (note: NoteTemplate) => {
  const topDistance = 475 - note.octave * 87.5 - notes.indexOf(note.note) * 12.5;
  return topDistance;
};

/**
 * Determines if a note's vertical position exceeds the visible bounds (top or bottom)
 * of the music sheet, and by how much.
 * 
 * Returns a tuple:
 * - isTop: boolean indicating if the note is above the top bound (true) or below the bottom bound (false).
 * - distance: the absolute distance by which the note exceeds the bound.
 * 
 * Logic:
 * - If `topDistance` is negative, the note is above the visible area.
 * - If `topDistance - 100` is positive, the note is below the bottom visible bound.
 * - Otherwise, the note is within bounds.
 * 
 * @param note - The note object containing `note` (name) and `octave`.
 * @returns A tuple [isTop, distance] indicating if the note exceeds bounds and by how much.
 */
export const getExtraDistance = (note: NoteTemplate): [boolean, number] => {
  const topDistance = 475 - note.octave * 87.5 - notes.indexOf(note.note) * 12.5;

  if (topDistance < 0) {
    // Note is above the top visible boundary
    return [true, -topDistance];
  }

  if (topDistance - 100 > 0) {
    // Note is below the bottom visible boundary
    return [false, topDistance - 100];
  }

  // Note is within visible vertical bounds
  return [false, 0];
};

/**
 * Calculates the total duration (in beats) of a measure based on the time signature's
 * numerator (top) and denominator (bottom).
 * 
 * Explanation:
 * - The `top` number indicates how many beats are in a measure.
 * - The `bottom` number indicates the note value that represents one beat.
 * - Different bottom values correspond to different note types (whole, half, quarter, etc).
 * 
 * The function:
 * - Maps the bottom number to the corresponding note class.
 * - Multiplies the number of beats (`top`) by the beat duration of that note.
 * 
 * @param top - The numerator of the time signature (number of beats per measure).
 * @param bottom - The denominator of the time signature (note value that represents one beat).
 * @returns The total duration of the measure in beats.
 */
export const getMeasureDurationByMeter = (top: number, bottom: number): number => {
  let noteType = Quarter; // default note type

  switch (bottom) {
    case 1:
      noteType = Whole;
      break;
    case 2:
      noteType = Half;
      break;
    case 4:
      noteType = Quarter;
      break;
    case 8:
      noteType = Eighth;
      break;
    case 16:
      noteType = Sixteenth;
      break;
    // Could add more cases if needed
  }

  // Calculate measure duration: number of beats * beat duration of one beat note
  return top * new noteType({ note: 'C', octave: 4 }).beatDuration;
};

export const calculateTieWidth = (
  measureWidth: number,
  totalMeasureDuration: number,
  measureList: MeasureTemplate[],
  measureIndex: number,
  noteIndex: number
) => {
  const measureNotes = measureList[measureIndex].notes

  // If the next note is not in the same measure
  if (noteIndex >= measureNotes.length - 1) {
    const nextMeasureNotes = measureList[measureIndex + 1]?.notes
    if (!nextMeasureNotes) return 0

    const currentNoteWidth = measureNotes[noteIndex].beatDuration / totalMeasureDuration * measureWidth / 2
    const nextNoteWidth = nextMeasureNotes[0].beatDuration / totalMeasureDuration * measureWidth / 2

    return currentNoteWidth + nextNoteWidth
  }

  const currentNoteWidth = measureNotes[noteIndex].beatDuration / totalMeasureDuration * measureWidth / 2
  const nextNoteWidth = measureNotes[noteIndex + 1].beatDuration / totalMeasureDuration * measureWidth / 2

  return currentNoteWidth + nextNoteWidth
}

/**
 * Creates a shallow copy of a MusicTemplate object.
 *
 * - Copies the meter and bpm values directly.
 * - Copies the measures array, where each measure is spread into a new object.
 * - The notes array in each measure is cloned using Array.from to avoid referencing the original array.
 * 
 * Note: This performs a shallow copy — the note objects themselves are still referenced.
 *       To fully duplicate the notes, a deep copy would be required.
 *
 * @param sheetMusic - The MusicTemplate object to copy.
 * @returns A new MusicTemplate object with cloned measures and notes arrays.
 */
export const copySheetMusic = (sheetMusic: MusicTemplate) => {
  const finalSheetMusic: MusicTemplate = {
    meter: {
      top: sheetMusic.meter.top,
      bottom: sheetMusic.meter.bottom
    },
    bpm: sheetMusic.bpm,
    measures: sheetMusic.measures.map(measure => ({
      ...measure,
      notes: Array.from(measure.notes)
    }))
  }

  return finalSheetMusic
}