import { Chord, NoteBase, notesConstructors, RestBase, restNotesConstructors } from "../../_classes/notes";
import { ChordTemplate, MeasureTemplate, NoteConstructorCoreArgsTemplate, NoteConstructorTemplate, NotesTemplate, NoteTemplate, RestTemplate } from "../../_types/sheetMusicTemplates";

/**
 * Retrieves the note that comes immediately before the given note position.
 *
 * The search first checks the previous note in the same measure.  
 * If there is none, it falls back to the last note of the previous measure.  
 * If no such note exists, it returns undefined.
 *
 * @param measuresList - The list of measures containing notes.
 * @param measureIndex - The index of the current measure.
 * @param noteIndex - The index of the current note within the measure.
 * @returns The previous NoteTemplate if found, otherwise undefined.
 */
export const getPreviousNote = (
  measuresList: MeasureTemplate[],
  measureIndex: number,
  noteIndex: number
) => {
  let previous = measuresList[measureIndex]?.notes[noteIndex - 1]
  if (previous) return previous

  previous = measuresList[measureIndex - 1]?.notes[measuresList[measureIndex - 1].notes.length - 1]
  if (previous) return previous

  return undefined
}

/**
 * Retrieves the next note in the music sequence along with its position.
 *
 * The search first looks for the next note within the same measure.
 * If none is found, it returns the first note of the following measure.
 * If no such note exists, it returns `undefined` as the note, along with
 * the measure and note indexes where the search ended.
 *
 * @param measuresList - The array of measures containing notes.
 * @param measureIndex - The index of the current measure in `measuresList`.
 * @param noteIndex - The index of the current note within the measure's `notes` array.
 * @returns An object containing:
 *   - `note`: The next note if found, otherwise `undefined`.
 *   - `measureIndex`: The index of the measure containing the returned note (or where the search ended).
 *   - `noteIndex`: The index of the note within the measure (or where the search ended).
 */
export const getNextNote = (
  measuresList: MeasureTemplate[],
  measureIndex: number,
  noteIndex: number
): { note: NotesTemplate | undefined, measureIndex: number, noteIndex: number } => {
  let next = measuresList[measureIndex]?.notes[noteIndex + 1]
  if (next) return {
    note: next,
    measureIndex,
    noteIndex: noteIndex + 1
  }

  next = measuresList[measureIndex + 1]?.notes[0]
  if (next) return {
    note: next,
    measureIndex: measureIndex + 1,
    noteIndex
  }

  return {
    note: next,
    measureIndex: measureIndex + 1,
    noteIndex: 0
  }
}

/**
 * Calculates the total duration of an array of notes.
 *
 * @param notes - Array of note objects.
 * @returns The total duration of all notes combined.
 */
export const getNotesDuration = (notes: NotesTemplate[]): number => {
  return notes.reduce((acc, note) => acc + note.beatDuration, 0)
}

/**
 * Finds the constructor of the largest note type
 * that can fit within the given beat duration.
 *
 * Iterates over the available `notesConstructors`, creates a temporary 
 * instance of each, and checks if its `beatDuration` is less than or 
 * equal to the given duration. The first valid constructor found is returned.
 *
 * @param beatDuration - The duration that the note must fit into.
 * @returns A note constructor capable of fitting 
 *          within the specified duration.
 * @throws Error if no suitable constructor is found.
 */
export const getMaxFittingNoteConstructor = (beatDuration: number): NoteConstructorTemplate => {
  for (const NoteClass of notesConstructors) {
    const instance = new NoteClass({ cleanNote: 'C', octave: 4 });

    if (instance.beatDuration <= beatDuration) {
      return NoteClass
    }
  }

  throw new Error("No fitting note constructor found");
}

/**
 * Returns the largest possible note (including dotted versions) 
 * that fits within the given beat duration.
 *
 * @param beatDuration - The remaining duration to fill.
 * @param cleanNote - The note pitch (e.g., C, D, E).
 * @param octave - The octave of the note.
 * @param accidental - Note accidental.
 * @returns The best fitting NoteTemplate instance.
 */
export const getMaxFittingNote = (
  beatDuration: number,
  {
    cleanNote,
    octave,
    accidental,
    isTied = false
  }: NoteConstructorCoreArgsTemplate
): NoteTemplate => {
  const NoteClass = getMaxFittingNoteConstructor(beatDuration)
  let instance = new NoteClass({ cleanNote, octave, accidental });

  if (instance.beatDuration <= beatDuration) {
    for (let dots = 1; dots <= instance.dotsLimit; dots++) {
      const instanceWithDots = new NoteClass({ cleanNote, octave, accidental, dots });
      if (instanceWithDots.beatDuration <= beatDuration) {
        instance = instanceWithDots;
      }
    }

  }
  instance.isTied = isTied
  return instance;
};

/**
 * Returns a ChordTemplate instance containing the best fitting note.
 * for each note in the given chord, based on the provided beat duration.
 *
 * Each note in the chord is replaced with the largest possible rhythmic figure
 * that fits within the specified duration.
 *
 * @param beatDuration - The remaining duration each note must fit within.
 * @param notes - An array of note definitions (note, octave, accidental, isTied) for the chord.
 * @returns A ChordTemplate composed of NoteTemplates that best fit the beat duration.
 * @throws Error if no fitting note is found for any note in the chord.
 */
export const getMaxFittingChord = (
  beatDuration: number,
  notesArgs: NoteConstructorCoreArgsTemplate[]
): ChordTemplate => {
  const noteConstructor = getMaxFittingNoteConstructor(beatDuration)
  return new Chord({ notes: notesArgs, noteConstructor });
}

/**
 * Returns the largest possible rest that fits within the given beat duration.
 *
 * @param beatDuration - The remaining duration to fill.
 * @returns The best fitting RestTemplate instance.
 * @throws Error if no fitting rest is found.
 */
export const getMaxFittingRest = (beatDuration: number): RestTemplate => {
  for (const RestClass of restNotesConstructors) {
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
 * @param noteConstructorCoreArgs - The core arguments used to construct each note
 * @returns An array of NoteTemplate instances that together span the given duration.
 *          All notes except the last one are marked as tied.
 */
export const fillBdWithNotes = (
  beatDuration: number,
  noteConstructorCoreArgs: NoteConstructorCoreArgsTemplate
): NoteTemplate[] => {
  const notes: NoteTemplate[] = [];
  while (true) {
    const noteObj = getMaxFittingNote(beatDuration, noteConstructorCoreArgs)
    notes.push(noteObj);
    beatDuration -= noteObj.beatDuration;
    if (beatDuration === 0) break
    noteObj.isTied = true
  }

  return notes;
};

/**
 * Fills the given beat duration with the largest possible sequence of chords 
 * where each chord is composed of notes 
 * fitting the remaining duration.
 *
 * Each chord is created using the best fitting note durations for all its pitches.
 *
 * @param beatDuration - Total duration to fill with chords.
 * @param notesArgs - An array of note definitions (note, octave, accidental) for the chord.
 * @returns An array of ChordTemplate instances representing the chord sequence.
 */
export const fillBdWithChords = (
  beatDuration: number,
  notesArgs: NoteConstructorCoreArgsTemplate[]
): ChordTemplate[] => {
  const notes: ChordTemplate[] = [];
  while (true) {
    const noteObj = getMaxFittingChord(beatDuration, notesArgs)
    notes.push(noteObj);
    beatDuration -= noteObj.beatDuration;
    if (beatDuration === 0) break
    noteObj.notes.forEach(n => n.isTied = true)
  }

  notesArgs.forEach((na, i) => notes[notes.length - 1].notes[i].isTied = !!na.isTied)

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
  const crMsDr = measureDuration - getNotesDuration(firstMeasure.notes);

  if (note instanceof NoteBase) {
    const crMsNotes = fillBdWithNotes(crMsDr, { ...note, isTied: true })
    firstMeasure.notes.push(...crMsNotes);

    const nextMsNotes = fillBdWithNotes(note.beatDuration - crMsDr, note)
    secondMeasure?.notes.unshift(...nextMsNotes)
    return
  }

  else if (note instanceof Chord) {
    const crMsChordArgs = note.notes.map(n => ({ cleanNote: n.cleanNote, octave: n.octave, accidental: n.accidental, isTied: true }))
    const crMsChords = fillBdWithChords(crMsDr, crMsChordArgs)
    firstMeasure.notes.push(...crMsChords);

    const nextMsChordArgs = note.notes.map(n => ({ cleanNote: n.cleanNote, octave: n.octave, accidental: n.accidental, isTied: n.isTied }))
    const nextMsChords = fillBdWithChords(note.beatDuration - crMsDr, nextMsChordArgs)
    secondMeasure?.notes.unshift(...nextMsChords)
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
  if (getNotesDuration(firstMeasure.notes) === measureDuration) return;

  else if (getNotesDuration(firstMeasure.notes) > measureDuration) {
    const popNote = firstMeasure.notes.pop() as NotesTemplate;

    if (getNotesDuration(firstMeasure.notes) >= measureDuration) {
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
      if (!secondMeasure && !(popNote instanceof RestBase)) {
        secondMeasure = { notes: [] }
        measureList.push(secondMeasure)
      }
      splitNote(measureDuration, popNote, firstMeasure, secondMeasure);
    }
  }

  else if (getNotesDuration(firstMeasure.notes) < measureDuration) {
    if (secondMeasure && secondMeasure.notes.length > 0) {
      const popNote = secondMeasure.notes.shift() as NotesTemplate;
      if (getNotesDuration(firstMeasure.notes) + popNote.beatDuration <= measureDuration) {
        firstMeasure.notes.push(popNote);
      } else {
        splitNote(measureDuration, popNote, firstMeasure, secondMeasure);
      }
    }
    else {
      firstMeasure.notes.push(...fillBdWithRests(measureDuration - getNotesDuration(firstMeasure.notes)));
    }
  }

  normalizeMeasure(measureList, firstMeasure, secondMeasure, measureDuration);
}

/**
 * Normalizes all measures in a sheet music.
 *
 * Iterates over the provided list of measures and ensures each measure's total duration
 * matches the allowed measure duration. Uses `normalizeMeasure` to adjust each measure individually.
 *
 * @param measureList - Array of measures to normalize.
 * @param measureDuration - Maximum allowed duration for each measure (in beats).
 */
export const normalizeMeasuresAcrossSheetMusic = (measureList: MeasureTemplate[], measureDuration: number) => {
  let measureIndex = 0
  while (true) {
    const currentMs = measureList[measureIndex];
    if (!currentMs) break;
    normalizeMeasure(measureList, currentMs, measureList[measureIndex + 1], measureDuration)
    measureIndex++;
  }
}

/**
 * Merges sequences of tied notes within each measure into fewer notes.
 *
 * - Iterates through all measures in the list.
 * - Detects consecutive tied notes of the same pitch.
 * - Combines their total duration into the smallest possible number of notes/chords
 *   that represent the same duration (may be more than one note).
 * - Preserves the tie status of the resulting last note in the sequence.
 *
 * @param measureList - Array of measures to process and merge tied notes within.
 */
export const mergeTiesAcrossMeasures = (measureList: MeasureTemplate[]) => {
  const isNoteAndTied = (note: NotesTemplate, nextNote: NotesTemplate | undefined) => {
    return note instanceof NoteBase && note.isTied && nextNote instanceof NoteBase
  }
  const isChordAndTied = (note: NotesTemplate, nextNote: NotesTemplate) => {
    return note instanceof Chord && note.notes.every(n => n.isTied) && nextNote instanceof Chord
  }

  for (const measure of measureList) {
    let mainIndex = 0
    const notes = measure.notes

    while (notes[mainIndex]) {
      const note = notes[mainIndex]
      let tieCount = 0

      for (tieCount; isNoteAndTied(notes[mainIndex + tieCount], notes[mainIndex + tieCount + 1]); tieCount++);
      for (tieCount; isChordAndTied(notes[mainIndex + tieCount], notes[mainIndex + tieCount + 1]); tieCount++);

      if (tieCount === 0) {
        mainIndex++
        continue
      }

      const tiedNotes = notes.splice(mainIndex, tieCount + 1)
      const tiedNotesDuration = getNotesDuration(tiedNotes)
      const lastTiedNote = tiedNotes[tiedNotes.length - 1]
      let newNotes: (NoteTemplate | ChordTemplate)[] = []

      if (note instanceof NoteBase && lastTiedNote instanceof NoteBase) {
        newNotes = fillBdWithNotes(tiedNotesDuration, lastTiedNote)
      }
      else if (note instanceof Chord && lastTiedNote instanceof Chord) {
        newNotes = fillBdWithChords(tiedNotesDuration, lastTiedNote.notes)
      }

      notes.splice(mainIndex, 0, ...newNotes);
      mainIndex += newNotes.length
    }
  }
}

/**
 * Merges consecutive rests within and across measures into fewer rests.
 *
 * - Iterates through all measures, starting from the last going backwards.
 * - Detects consecutive sequences of rests.
 * - If the final measure contains only rests, it is removed entirely.
 * - Combines consecutive rests into the smallest possible number of rests
 *   that represent the same total duration (may be more than one rest).
 *
 * @param measureList - Array of measures to process and merge rests within.
 */
export const mergeRestsAcrossMeasures = (measureList: MeasureTemplate[]) => {
  let isFinalMeasure = true

  for (const measure of measureList.slice().reverse()) {
    let mainIndex = 0
    const notes = measure.notes

    while (notes[mainIndex]) {
      let restCount = 0
      for (restCount; notes[mainIndex + restCount] instanceof RestBase; restCount++);

      if (isFinalMeasure && restCount === notes.length) {
        measureList.pop()
        break;
      } else isFinalMeasure = false

      if (restCount === 0) {
        mainIndex++
        continue;
      }

      const restNotes = notes.splice(mainIndex, restCount)
      const newRests = fillBdWithRests(getNotesDuration(restNotes))
      notes.splice(mainIndex, 0, ...newRests)

      mainIndex += newRests.length
    }
  }
}