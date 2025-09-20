import { Chord, Eighth, Half, NoteBase, Quarter, Sixteenth, Whole } from "./classes/notes";
import { MeasureTemplate, MusicTemplate, NotesTemplate, NoteTemplate, CleanNoteType } from "./types/sheetMusicTemplates";

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
  const topDistance = 487.5 - note.octave * 87.5 - notes.indexOf(note.cleanNote) * 12.5;
  return topDistance;
};

/**
 * Determines whether a note's vertical position lies outside the visible range
 * of the music staff (either above the top or below the bottom) and calculates
 * the exceeded distance as a percentage.
 *
 * Returns a tuple:
 * - position: 'top' | 'bottom' — 'top' if the note exceeds the top boundary,
 *   'bottom' if it exceeds the bottom boundary.
 * - distance: number — the percentage by which the note exceeds the staff boundary.
 *
 * Logic:
 * - If `topDistance <= 0`, the note is above the top boundary.
 * - If `topDistance >= 125`, the note is below the bottom boundary.
 * - Otherwise, the note is within the visible range.
 *
 * @param note - The note object.
 * @returns A tuple [position, distance] indicating which boundary is exceeded
 *   and by how much in percentage.
 */
export const getExtraDistance = (note: NoteTemplate): ['top' | 'bottom', number] => {
  const topDistance = getTopDistance(note);

  if (topDistance <= 0) {
    // Note is above the top boundary
    return ['top', -topDistance] as const;
  }

  if (topDistance >= 125) {
    // Note is below the bottom boundary
    return ['bottom', topDistance - 125] as const;
  }

  // Note is within the visible range
  return ['bottom', 0] as const;
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
  return top * new noteType({ cleanNote: 'C', octave: 4 }).beatDuration;
};

export const calculateNoteDistance = (
  firstNote: NotesTemplate,
  secondNote: NotesTemplate,
  measureWidth: number,
  measureDuration: number,
) => {
  return (firstNote.getWidth(measureWidth, measureDuration) + secondNote.getWidth(measureWidth, measureDuration)) / 2
}

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
          const NoteClass = getConstructor(note)
          return new NoteClass(note);
        }
        const RestClass = getConstructor(note)
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
      if (note instanceof NoteBase) {
        const [position, extra] = getExtraDistance(note);
        if (position === 'top' && extra > maxExtraTop) maxExtraTop = extra;
        if (position === 'bottom' && extra > maxExtraBottom) maxExtraBottom = extra;
      }
      else if (note instanceof Chord) {
        note.notes.forEach(n => {
          const [position, extra] = getExtraDistance(n);
          if (position === 'top' && extra > maxExtraTop) maxExtraTop = extra;
          if (position === 'bottom' && extra > maxExtraBottom) maxExtraBottom = extra;
        })
      }
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

/**
 * Retrieves the constructor function of a given note instance.
 *
 * This is useful when re-instantiating notes while copying or transforming
 * a MusicTemplate, ensuring the correct class type is preserved.
 *
 * @param note - A note instance (Note, Rest, or Chord) from which to extract the constructor.
 * @returns The constructor function for the provided note instance.
 */
export const getConstructor = (note: NotesTemplate) => {
  return Object.getPrototypeOf(note).constructor
}

/**
 * Merges one or more notes into a list of NoteTemplate objects.
 *
 * If the first argument is a Chord, the function expands its notes
 * and appends the second note to the resulting list.  
 * If the first argument is a single NoteTemplate, both are returned
 * together in a new list.
 *
 * @param obj1 - Either a Chord (containing multiple notes) or a single NoteTemplate.
 * @param obj2 - A NoteTemplate to merge with obj1.
 * @returns An array of NoteTemplate objects containing the merged notes.
 */
export const mergeNotesToList = (obj1: NotesTemplate, obj2: NoteTemplate): NoteTemplate[] => {
  return obj1 instanceof Chord ? [...obj1.notes, obj2] : [obj1 as NoteTemplate, obj2];
}

/**
 * Converts a musical note into a numerical index in the global scale.
 * The lowest pitch (most grave note) corresponds to index 0.
 *
 * @param note
 * @returns A number representing the note's position in the linear scale.
 *
 * @remarks
 * - The calculation considers the note's octave and accidental.
 * - Accidentals: "sharp" increases by 1, "flat" decreases by 1, "natural" or undefined has no effect.
 * - The note order is assumed to be ['C', 'D', 'E', 'F', 'G', 'A', 'B'].
 */
export function noteToHeightIndex(note: NoteTemplate): number {
  const noteOrder: CleanNoteType[] = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

  let accidentalOffset = 0
  if (note.accidental === 'sharp') accidentalOffset = 1
  else if (note.accidental === 'flat') accidentalOffset = -1

  const octaveOffset = note.octave * 7;
  const cleanNoteIndex = noteOrder.indexOf(note.cleanNote);

  return octaveOffset + cleanNoteIndex + accidentalOffset;
}

/**
 * Determines contiguous groups of notes that should be connected by a beam and
 * whether each beam is drawn above or below the staff.
 *
 * A “beam” is the horizontal bar that joins multiple short-duration notes
 * (eighths, sixteenths, etc.). 
 *
 * @param notes - Array of musical note objects to evaluate.
 * @returns An array of beam descriptors.  
 *          Each object contains:
 *            - `start`: index of the first note in the beam group.
 *            - `end`: index of the last note in the beam group.
 *            - `position`: `"top"` if most notes are above the middle staff
 *               line, `"bottom"` otherwise.
 *
 * @example
 * // Returns something like:
 * // [
 * //   { start: 0, end: 2, position: 'bottom' },
 * //   { start: 4, end: 5, position: 'top' }
 * // ]
 */
export function getBeamPositionList(notes: NotesTemplate[]) {
  const canConnectBeam = (note: NotesTemplate) =>
    (note instanceof NoteBase
      && !(note instanceof Whole)
      && !(note instanceof Half)
      && !(note instanceof Quarter)
    )
    || (note instanceof Chord
      && note.noteConstructor !== Whole
      && note.noteConstructor !== Half
      && note.noteConstructor !== Quarter
    )


  const beamPositionList: {
    start: number
    end: number
    position: 'top' | 'bottom' | undefined
  }[] = []
  const midLineIndex = noteToHeightIndex(new Quarter({ cleanNote: 'B', octave: 4 }))

  let mainIndex = 0
  while (true) {
    if (mainIndex >= notes.length) break;
    const note = notes[mainIndex]

    const nextNotes = notes.slice(mainIndex + 1)
    let beamCount = 0
    for (beamCount; canConnectBeam(nextNotes[beamCount]); beamCount++);

    if (beamCount === 0 || !canConnectBeam(note)) {
      mainIndex++
      continue
    }

    let aboveMidCount = 0
    const beamNotes = nextNotes.concat(note)
    for (const n of beamNotes) {
      if (n instanceof NoteBase && noteToHeightIndex(n) > midLineIndex) {
        aboveMidCount++
      }
      else if (n instanceof Chord) {
        n.notes.forEach(cn => {
          if (noteToHeightIndex(cn) > midLineIndex)
            aboveMidCount++
        })
      }
    }

    const totalBeamSingleNoteCount = beamNotes.reduce((acc, note) => {
      if (note instanceof NoteBase) return acc + 1
      else if (note instanceof Chord)
        return acc + note.notes.length
      return acc
    }, 0)

    beamPositionList.push({
      start: mainIndex,
      end: mainIndex + beamCount,
      position: aboveMidCount >= (totalBeamSingleNoteCount + 1) / 2 ? 'top' : 'bottom'
    })

    mainIndex += beamCount + 1
  }

  return beamPositionList
}