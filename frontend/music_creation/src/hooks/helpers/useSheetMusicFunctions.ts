import { Eighth, EighthRest, Half, HalfRest, NoteBase, Quarter, QuarterRest, RestBase, Sixteenth, SixteenthRest, Thirtysecond, ThirtysecondRest, Whole, WholeRest } from "../../classes/notes";
import { CleanNoteType, MeasureTemplate, NoteConstructorTemplate, NotesTemplate, NoteTemplate, OctaveType, RestConstructorTemplate, RestTemplate } from "../../types/sheetMusicTemplates";

// Returns the duration of the measure notes.
export const getMsNotesDr = (notes: NotesTemplate[]): number => {
  return notes.reduce((acc, note) => acc + note.beatDuration, 0)
}
/**
 * Returns the largest possible note (including dotted versions) 
 * that fits within the given beat duration.
 *
 * @param beatDuration - The remaining duration to fill.
 * @param note - The note pitch (e.g., C, D, E).
 * @param octave - The octave of the note.
 * @param isSharp - Whether the note is sharp.
 * @returns The best fitting NoteTemplate instance.
 * @throws Error if no fitting note is found.
 */
export const getMaxFittingNote = (
  beatDuration: number,
  note: CleanNoteType,
  octave: OctaveType,
  isSharp: boolean
): NoteTemplate => {
  const candidates: NoteConstructorTemplate[] = [
    Whole,
    Half,
    Quarter,
    Eighth,
    Sixteenth,
    Thirtysecond,
  ];

  for (const NoteClass of candidates) {
    let instance = new NoteClass({ note, octave, isSharp });

    if (instance.beatDuration <= beatDuration) {
      for (let dots = 1; dots <= instance.dotsLimit; dots++) {
        const instanceWithDots = new NoteClass({ note, octave, isSharp, dots });
        if (instanceWithDots.beatDuration <= beatDuration) {
          instance = instanceWithDots;
        }
      }

      return instance;
    }
  }
  throw new Error("No fitting note found");
};
/**
 * Returns the largest possible rest that fits within the given beat duration.
 *
 * @param beatDuration - The remaining duration to fill.
 * @returns The best fitting RestTemplate instance.
 * @throws Error if no fitting rest is found.
 */
export const getMaxFittingRest = (beatDuration: number): RestTemplate => {
  const candidates: RestConstructorTemplate[] = [
    WholeRest,
    HalfRest,
    QuarterRest,
    EighthRest,
    SixteenthRest,
    ThirtysecondRest,
  ];

  for (const RestClass of candidates) {
    const instance = new RestClass();
    if (instance.beatDuration <= beatDuration) {
      return instance;
    }
  }

  throw new Error('No fitting rest found');
};
/**
 * Returns a list of notes that fit within the given beat duration.
 *
 * @param beatDuration - Total duration to fill.
 * @param note - The base note.
 * @param octave - The octave of the note.
 * @param isSharp - Whether the note is sharp.
 * @returns An array of NoteTemplate instances.
 */
export const fillBdWithNotes = (
  beatDuration: number,
  note: CleanNoteType,
  octave: OctaveType,
  isSharp: boolean
): NoteTemplate[] => {
  const notes: NoteTemplate[] = [];
  while (true) {
    const noteObj = getMaxFittingNote(beatDuration, note, octave, isSharp)
    notes.push(noteObj);
    beatDuration -= noteObj.beatDuration;
    if (beatDuration === 0) break
    noteObj.isTied = true
  }

  return notes;
};
/**
 * Returns a list of rests that exactly fill the given beat duration.
 * It selects the largest possible rests
 * and continues until the total duration is covered.
 *
 * @param beatDuration - Total duration to fill with rests.
 * @returns An array of RestTemplate instances.
 */
export const fillBdWithRests = (beatDuration: number): (NoteTemplate | RestTemplate)[] => {
  const notes: (NoteTemplate | RestTemplate)[] = [];

  while (beatDuration > 0) {
    const newRest = getMaxFittingRest(beatDuration);
    notes.push(newRest);
    beatDuration -= newRest.beatDuration;
  }

  return notes;
};
/**
 * Splits a note or rest between two measures.
 *
 * - Fills the remaining space in the first measure with a portion of the note or rest.
 * - If the note doesn't fully fit and a second measure exists,
 *   the remaining duration is filled with rests and added to the start of the second measure.
 *
 * @param measureDuration - Total duration of each measure (e.g., 4.0).
 * @param note - The note or rest to split.
 * @param firstMeasure - The measure to add the first portion of the note/rest.
 * @param secondMeasure - The measure to add the remaining duration as rests.
 */
export const splitNote = (
  measureDuration: number,
  note: NotesTemplate,
  firstMeasure: MeasureTemplate,
  secondMeasure: MeasureTemplate | undefined
) => {
  const crMsDr = measureDuration - getMsNotesDr(firstMeasure.notes);

  if (note instanceof NoteBase) {
    const crMsNotes = fillBdWithNotes(crMsDr, note.note, note.octave, note.isSharp)
    const nextMsNotes = fillBdWithNotes(note.beatDuration - crMsDr, note.note, note.octave, note.isSharp)
    firstMeasure.notes.push(...crMsNotes);

    
    (firstMeasure.notes[firstMeasure.notes.length - 1] as NoteTemplate).isTied = true
    if (note.isTied) nextMsNotes[0].isTied = true
    
    secondMeasure?.notes.unshift(...nextMsNotes)
    return
  }

  const crMsRests = fillBdWithRests(crMsDr)
  const nextMsRests = fillBdWithRests(note.beatDuration - crMsDr)
  firstMeasure.notes.push(...crMsRests);
  secondMeasure?.notes.unshift(...nextMsRests)
}
/**
 * Normalizes the current measure to ensure its total duration matches the allowed measure duration.
 *
 * Behavior:
 * - If the measure is overfilled, the last note is popped.
 *   - If the note fits in the next measure, it is moved there.
 *   - If there's no next measure and the note is not a rest, a new measure is created.
 *   - If the note doesn't fit completely, it is split across measures.
 * - If the measure is underfilled, it attempts to pull from the next measure or fills with rests.
 * - The process repeats recursively until the current measure duration is exact.
 *
 * @param measureList - The full list of measures (used to append new ones if needed).
 * @param firstMeasure - The measure currently being normalized.
 * @param secondMeasure - The next measure, used when overflowing notes.
 * @param measureDuration - Maximum allowed duration for a measure (in beats).
 */
export function normalizeMeasure(
  measureList: MeasureTemplate[],
  firstMeasure: MeasureTemplate,
  secondMeasure: MeasureTemplate | undefined,
  measureDuration: number
) {
  if (getMsNotesDr(firstMeasure.notes) === measureDuration) return;

  else if (getMsNotesDr(firstMeasure.notes) > measureDuration) {
    const popNote = firstMeasure.notes.pop() as NotesTemplate;

    if (getMsNotesDr(firstMeasure.notes) >= measureDuration) {
      if (secondMeasure) {
        secondMeasure.notes.unshift(popNote);
      } else {
        if (popNote instanceof RestBase) {
          return normalizeMeasure(measureList, firstMeasure, secondMeasure, measureDuration);
        }

        const newMs: MeasureTemplate = {
          notes: [popNote, ...fillBdWithRests(measureDuration - popNote.beatDuration)],
        };
        measureList.push(newMs);
        secondMeasure = newMs
      }
    } else {
      if (!secondMeasure) {
        secondMeasure = {notes: []}
        measureList.push(secondMeasure)
      }
      splitNote(measureDuration, popNote, firstMeasure, secondMeasure);
    }
  }

  else if (getMsNotesDr(firstMeasure.notes) < measureDuration) {
    if (secondMeasure && secondMeasure.notes.length > 0) {
      const popNote = secondMeasure.notes.shift() as NoteTemplate;
      if (getMsNotesDr(firstMeasure.notes) + popNote.beatDuration <= measureDuration) {
        firstMeasure.notes.push(popNote);
      } else {
        splitNote(measureDuration, popNote, firstMeasure, secondMeasure);
      }
    }
    else {
      firstMeasure.notes.push(...fillBdWithRests(measureDuration - getMsNotesDr(firstMeasure.notes)));
    }
  }

  normalizeMeasure(measureList, firstMeasure, secondMeasure, measureDuration);
}
/**
 * Merges sequences of tied notes within each measure into fewer notes.
 *
 * - Iterates through all measures in the list.
 * - Detects consecutive tied notes of the same pitch.
 * - Combines their total duration into the smallest possible number of notes
 *   that represent the same duration (may be more than one note).
 * - Preserves the tie status of the resulting last note in the sequence.
 *
 * @param measureList - Array of measures to process and merge tied notes within.
 */
export const mergeTiesAcrossMeasures = (measureList: MeasureTemplate[]) => {
  for (const measure of measureList) {
    const notes = measure.notes
    for (const [i, note] of notes.entries()) {
      if (note instanceof NoteBase
        && note.isTied
        && i < notes.length - 1 // Check if the note is not the last one
      ) {
        let popCount = 2
        notes.forEach((iNote, ni) => {
          if (ni > i && ni < notes.length - 1 && (iNote as NoteTemplate).isTied) popCount++
        })

        let isLastNoteTied = false
        if (i + popCount === notes.length) {
          isLastNoteTied = (notes[notes.length - 1] as NoteTemplate).isTied
        }

        const tiedNotes = notes.splice(i, popCount)

        const newNotes = fillBdWithNotes(getMsNotesDr(tiedNotes), note.note, note.octave, note.isSharp)

        notes.splice(i, 0, ...newNotes);
        if (isLastNoteTied) (notes[notes.length - 1] as NoteTemplate).isTied = true
      }
    }
  }
}