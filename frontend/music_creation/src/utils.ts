import { Chord, Eighth, Half, NoteBase, Quarter, Sixteenth, Whole } from "./classes/notes";
import { MeasureTemplate, MusicTemplate, NoteConstructorTemplate, NotesTemplate, NoteTemplate, RestConstructorTemplate } from "./types/sheetMusicTemplates";

// List of note names used for vertical positioning calculations.
// These represent the natural musical notes in ascending order.
const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'] as const;

// Returns the beat duration including the number of dots
export const getBeatDurationWithDots = (initialBeatDuration: number, dots: number) => initialBeatDuration * (2 - 1 / Math.pow(2, dots))

// Returns a measure with the given notes
export function createMeasure(...notes: NotesTemplate[]): MeasureTemplate {
  return { notes: [...notes] };
}

/**
 * Calculates the vertical distance (in percentage or pixels) from a reference point
 * for a given note, based on its octave and note name.
 * 
 * This is used for positioning notes vertically in a music sheet UI.
 * 
 * Formula explanation:
 * - Starts from a base offset (487.5%).
 * - Subtracts an amount based on the octave (each octave shifts by 87.5%).
 * - Subtracts an amount based on the note position within the octave (each note shifts by 12.5%).
 * 
 * @param note - The note object containing `note` (name) and `octave`.
 * @returns The calculated vertical top distance for the note.
 */
export const getTopDistance = (note: NoteTemplate) => {
  const topDistance = 487.5 - note.octave * 87.5 - notes.indexOf(note.note) * 12.5;
  return topDistance;
};

/**
 * Checks whether a note's vertical position lies outside the visible range 
 * (above the top or below the bottom) of the music staff, and calculates by how much in percentage.
 * 
 * Returns a tuple:
 * - isTop: boolean — `true` if the note exceeds the top boundary, `false` if it exceeds the bottom boundary.
 * - distance: number — the percentage by which the note exceeds the boundary.
 * 
 * Logic:
 * - If `topDistance <= 0`, the note is above the top visible boundary.
 * - If `topDistance >= 125`, the note is below the bottom visible boundary.
 * - Otherwise, the note lies within the visible range.
 * 
 * @param note - The note object.
 * @returns A tuple [isTop, distance] indicating if the note is out of bounds and the exceeded percentage.
 */
export const getExtraDistance = (note: NoteTemplate): [boolean, number] => {
  const topDistance = getTopDistance(note);

  if (topDistance <= 0) {
    // Note is above the top boundary
    return [true, -topDistance] as const;
  }

  if (topDistance >= 125) {
    // Note is below the bottom boundary
    return [false, topDistance - 125] as const;
  }

  // Note is within the visible range
  return [false, 0] as const;
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
      notes: measure.notes.map(note => {
        if (note instanceof Chord)
          return new Chord({ noteConstructor: note.noteConstructor, notes: Array.from(note.notes) })
        else if (note instanceof NoteBase) {
          const NoteClass = Object.getPrototypeOf(note).constructor as NoteConstructorTemplate
          return new NoteClass(note);
        }
        const RestClass = Object.getPrototypeOf(note).constructor as RestConstructorTemplate
        return new RestClass()
      })
    }))
  }

  return finalSheetMusic
}

/**
 * Calculates the top and bottom margins for a line of measures based on the extra
 * distance that notes extend above or below the standard staff height.
 *
 * - Iterates through each measure and its notes to find the maximum extra distance.
 * - Top margin is calculated from the highest note above the staff plus an additional offset.
 * - Bottom margin is calculated from the lowest note below the staff minus an offset (minimum 0).
 *
 * Note: Uses NoteBase instance check to ensure only valid notes are considered.
 *
 * @param lineMeasures - Array of MeasureTemplate objects representing one line of measures.
 * @param measureHeight - The rendered offset height of a single measure.
 * @returns An object containing `marginTop` and `marginBottom` in pixels for the line.
 */
export const calculateMeasureLineMargin = (lineMeasures: MeasureTemplate[], measureHeight: number) => {
  let maxExtraTop = 0;
  let maxExtraBottom = 0;

  lineMeasures.forEach((measure) =>
    measure.notes.forEach((note) => {
      if (!(note instanceof NoteBase)) return;
      const [isTop, extra] = getExtraDistance(note);
      if (isTop && extra > maxExtraTop) maxExtraTop = extra;
      if (!isTop && extra > maxExtraBottom) maxExtraBottom = extra;
    })
  );

  const topPx =
    (maxExtraTop * measureHeight) / 100 +
    measureHeight * 0.3;
  const bottomPx =
    (maxExtraBottom * measureHeight) / 100 -
    measureHeight * 0.3;

  return {
    marginTop: topPx,
    marginBottom: bottomPx
  }
}