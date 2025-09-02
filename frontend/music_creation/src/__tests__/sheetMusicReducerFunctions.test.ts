import { describe, expect, it } from "vitest";
import { Chord, Eighth, EighthRest, Half, HalfRest, NoteBase, Quarter, QuarterRest, RestBase, Sixteenth, SixteenthRest, Thirtysecond, ThirtysecondRest, Whole, WholeRest } from "../classes/notes";
import type { AccidentalTemplate, CleanNoteType, NoteTemplate, OctaveType } from '../types/sheetMusicTemplates';
import { fillBdWithChords, fillBdWithNotes, fillBdWithRests, getMaxFittingChord, getMaxFittingNote, getMaxFittingRest, getNotesDuration, mergeRestsAcrossMeasures, mergeTiesAcrossMeasures, normalizeMeasure, splitNote } from '../hooks/helpers/useSheetMusicFunctions';
import { createMeasure } from "../utils";

const note: CleanNoteType = 'C';
const octave: OctaveType = 4;
const accidental: AccidentalTemplate = 'sharp';

describe('getMaxFittingNote (Whole = 4.0)', () => {
  it('returns a whole note for 4 duration', () => {
    const result = getMaxFittingNote(4, note, octave, accidental);
    expect(result).toBeInstanceOf(Whole);
    expect(result.beatDuration).toBeLessThanOrEqual(4);
  });

  it('returns a dotted half note for 3 duration', () => {
    const result = getMaxFittingNote(3, note, octave, accidental);
    expect(result).toBeInstanceOf(Half);
    expect(result.dots).toBe(1);
    expect(result.beatDuration).toBeLessThanOrEqual(3);
  });

  it('returns a quarter note for 1 duration', () => {
    const result = getMaxFittingNote(1, note, octave, accidental);
    expect(result).toBeInstanceOf(Quarter);
    expect(result.dots).toBe(0);
    expect(result.beatDuration).toBeLessThanOrEqual(1);
  });

  it('returns a dotted eighth note for 0.75 duration', () => {
    const result = getMaxFittingNote(0.75, note, octave, accidental);
    expect(result).toBeInstanceOf(Eighth);
    expect(result.dots).toBe(1);
    expect(result.beatDuration).toBeLessThanOrEqual(0.75);
  });

  it('throws an error when no note fits', () => {
    expect(() => {
      getMaxFittingNote(0.001, note, octave, accidental);
    }).toThrow('No fitting note found');
  });
});

describe('getMaxFittingChord (Whole = 4.0)', () => {
  it('returns a whole chord for 4 duration', () => {
    const result = getMaxFittingChord(4, [{ note, octave, accidental }, { note: 'E', octave: 4, accidental: undefined }]);
    expect(result.notes[0]).toBeInstanceOf(Whole);
    expect(result.notes[1]).toBeInstanceOf(Whole);

    expect(result.notes[0].note).toEqual(note);
    expect(result.notes[0].octave).toEqual(octave);
    expect(result.notes[0].accidental).toEqual(accidental);

    expect(result.notes[1].note).toEqual('E');
    expect(result.notes[1].octave).toEqual(4);
    expect(result.notes[1].accidental).toEqual(undefined);
    expect(result.beatDuration).toBe(4);
  });

  it('returns a dotted half chord for 3 duration', () => {
    const result = getMaxFittingChord(3, [{ note, octave, accidental }]);
    expect(result.notes[0]).toBeInstanceOf(Half);
    expect(result.beatDuration).toBe(2);
  });

  it('returns a quarter chord for 1 duration', () => {
    const result = getMaxFittingChord(1, [{ note, octave, accidental }]);
    expect(result.notes[0]).toBeInstanceOf(Quarter);
    expect(result.beatDuration).toBe(1);
  });

  it('returns a eighth chord for 0.75 duration', () => {
    const result = getMaxFittingChord(0.75, [{ note, octave, accidental }]);
    expect(result.notes[0]).toBeInstanceOf(Eighth);
    expect(result.beatDuration).toBe(0.5);
  });

  it('throws an error when no note fits', () => {
    expect(() => {
      getMaxFittingChord(0.001, [{ note, octave, accidental }]);
    }).toThrow('No fitting note found');
  });
});

describe('getMaxFittingRest (Whole = 4.0)', () => {
  it('returns a whole rest for 4.0 duration', () => {
    const result = getMaxFittingRest(4.0);
    expect(result).toBeInstanceOf(WholeRest);
    expect(result.beatDuration).toBeLessThanOrEqual(4.0);
  });

  it('returns a half rest for 2.0 duration', () => {
    const result = getMaxFittingRest(2.0);
    expect(result).toBeInstanceOf(HalfRest);
    expect(result.beatDuration).toBeLessThanOrEqual(2.0);
  });

  it('returns a quarter rest for 1.0 duration', () => {
    const result = getMaxFittingRest(1.0);
    expect(result).toBeInstanceOf(QuarterRest);
    expect(result.beatDuration).toBeLessThanOrEqual(1.0);
  });

  it('returns an eighth rest for 0.5 duration', () => {
    const result = getMaxFittingRest(0.5);
    expect(result).toBeInstanceOf(EighthRest);
    expect(result.beatDuration).toBeLessThanOrEqual(0.5);
  });

  it('returns a sixteenth rest for 0.25 duration', () => {
    const result = getMaxFittingRest(0.25);
    expect(result).toBeInstanceOf(SixteenthRest);
    expect(result.beatDuration).toBeLessThanOrEqual(0.25);
  });

  it('returns a thirty-second rest for 0.125 duration', () => {
    const result = getMaxFittingRest(0.125);
    expect(result).toBeInstanceOf(ThirtysecondRest);
    expect(result.beatDuration).toBeLessThanOrEqual(0.125);
  });

  it('throws an error when no rest fits', () => {
    expect(() => {
      getMaxFittingRest(0.01);
    }).toThrow('No fitting rest found');
  });
});

describe('fillBdWithNotes (Whole = 4.0)', () => {
  it('returns only the note when it fits exactly', () => {
    const result = fillBdWithNotes(2.0, note, octave, accidental);
    const fitNote = result[0]
    expect(result.length).toBe(1);
    expect(fitNote).toBeInstanceOf(Half);
    expect(fitNote.isTied).toBe(false)
    expect((fitNote as NoteTemplate).beatDuration).toBe(2.0);
  });

  it('returns note plus tied notes when just one note does not fill the full duration', () => {
    const result = fillBdWithNotes(2.5, note, octave, accidental);
    expect(result.length).toBe(2);
    expect(result[0]).toBeInstanceOf(Half);
    expect(result[0].isTied).toBe(true)
    expect(result[1]).toBeInstanceOf(Eighth);
    expect(result[1].isTied).toBe(false)
    const total = result.reduce((acc, el) => acc + el.beatDuration, 0);
    expect(total).toBeCloseTo(2.5);
  });

  it('fills with tied notes at the end', () => {
    const result = fillBdWithNotes(3.625, note, octave, accidental);
    const total = result.reduce((sum, el) => sum + el.beatDuration, 0);
    expect(result[0]).toBeInstanceOf(Half); // 2.0
    expect(result.length).toBe(2)
    // Remaining: 1.625 -> Quarter (1.0), Eighth (0.5), Sixteenth (0.25), Thirtysecond (0.125)
    expect(total).toBeCloseTo(3.625);
    expect(result[0].isTied).toBe(true)
    expect(result[1].isTied).toBe(false)
    expect(result.slice(0, 1).every(r => r.isTied)).toBe(true);
  });

  it('returns only a note when beatDuration = 4.0 and note = Whole', () => {
    const result = fillBdWithNotes(4.0, note, octave, accidental);
    expect(result.length).toBe(1);
    expect(result[0]).toBeInstanceOf(Whole);
    expect(result[0].isTied).toBe(false)
  });
});

describe('fillBdWithChords (Whole = 4.0)', () => {
  it('returns only the chord when it fits exactly', () => {
    const result = fillBdWithChords(2.0, [{ note, octave, accidental }]);
    expect(result.length).toBe(1);
    const fitChord = result[0]
    expect(fitChord.notes[0]).toBeInstanceOf(Half);
    expect(fitChord.beatDuration).toBe(2.0);
  });

  it('returns chord when just one note does not fill the full duration', () => {
    const result = fillBdWithChords(2.5, [{ note, octave, accidental }]);
    expect(result.length).toBe(2);
    expect(result[0].notes[0]).toBeInstanceOf(Half);
    expect(result[0].notes[0].isTied).toBe(true)
    expect(result[1].notes[0]).toBeInstanceOf(Eighth);
    expect(result[1].notes[0].isTied).toBe(false)
    const total = result.reduce((acc, el) => acc + el.beatDuration, 0);
    expect(total).toBeCloseTo(2.5);
  });

  it('fills with tied notes at the end', () => {
    const result = fillBdWithChords(3.625, [{ note, octave, accidental }]);
    const total = result.reduce((sum, el) => sum + el.beatDuration, 0);
    expect(result[0].notes[0]).toBeInstanceOf(Half); // 2.0
    expect(result[0].notes[0].isTied).toBe(true)
    expect(result[1].notes[0]).toBeInstanceOf(Quarter); // 1.0
    expect(result[1].notes[0].isTied).toBe(true)
    expect(result[2].notes[0]).toBeInstanceOf(Eighth); // 0.5
    expect(result[2].notes[0].isTied).toBe(true)
    expect(result[3].notes[0]).toBeInstanceOf(Thirtysecond); // 0.125
    expect(result[3].notes[0].isTied).toBe(false)
    expect(result.length).toBe(4)
    // Remaining: 1.625 -> Quarter (1.0), Eighth (0.5), Sixteenth (0.25), Thirtysecond (0.125)
    expect(total).toBe(3.625);
  });

  it('returns only a note when beatDuration = 4.0 and note = Whole', () => {
    const result = fillBdWithChords(4.0, [{ note, octave, accidental }]);
    expect(result.length).toBe(1);
    expect(result[0].notes[0]).toBeInstanceOf(Whole);
  });
});

describe('fillBdWithRests (WholeRest = 4.0)', () => {
  it('returns a single whole rest for 4.0 duration', () => {
    const result = fillBdWithRests(4.0);
    expect(result.length).toBe(1);
    expect(result[0]).toBeInstanceOf(WholeRest);
    expect(result[0].beatDuration).toBe(4.0);
  });

  it('returns a combination of rests to sum up to 3.75', () => {
    const result = fillBdWithRests(3.75);
    const total = result.reduce((sum, r) => sum + r.beatDuration, 0);
    expect(total).toBeCloseTo(3.75);
    expect(result.every(r => 'note' in r === false)).toBe(true);
  });

  it('returns multiple rests to exactly fill 2.625 duration', () => {
    const result = fillBdWithRests(2.625);
    const total = result.reduce((sum, r) => sum + r.beatDuration, 0);
    expect(total).toBeCloseTo(2.625);
    expect(result.some(r => r instanceof HalfRest)).toBe(true);
  });

  it('returns only a thirty-second rest for 0.125 duration', () => {
    const result = fillBdWithRests(0.125);
    expect(result.length).toBe(1);
    expect(result[0]).toBeInstanceOf(ThirtysecondRest);
    expect(result[0].beatDuration).toBe(0.125);
  });

  it('returns an empty array for 0 duration', () => {
    const result = fillBdWithRests(0);
    expect(result).toEqual([]);
  });
});

describe('splitNote (Whole = 4.0)', () => {
  it('splits a chord', () => {
    const chord = new Chord({ noteConstructor: Quarter, notes: [{ note: 'C', octave: 5, isTied: true }, { note: 'E', octave: 5 }, { note: 'G', octave: 5 }] })

    const m1 = createMeasure(new Eighth({ note: 'C', octave: 5 }), new Thirtysecond({ note: 'C', octave: 5 }))
    const m2 = createMeasure(new Sixteenth({ note: 'C', octave: 5, dots: 1 }))

    splitNote(1, chord, m1, m2)

    expect(m1).toEqual(createMeasure(
      new Eighth({ note: 'C', octave: 5 }),
      new Thirtysecond({ note: 'C', octave: 5 }),
      new Chord({ noteConstructor: Sixteenth, notes: [{ note: 'C', octave: 5, isTied: true }, { note: 'E', octave: 5, isTied: true }, { note: 'G', octave: 5, isTied: true }] }),
      new Chord({ noteConstructor: Thirtysecond, notes: [{ note: 'C', octave: 5, isTied: true }, { note: 'E', octave: 5, isTied: true }, { note: 'G', octave: 5, isTied: true }] })
    ))
    expect(m2).toEqual(createMeasure(
      new Chord({ noteConstructor: Eighth, notes: [{ note: 'C', octave: 5, isTied: true }, { note: 'E', octave: 5, isTied: true }, { note: 'G', octave: 5, isTied: true }] }),
      new Chord({ noteConstructor: Thirtysecond, notes: [{ note: 'C', octave: 5, isTied: true }, { note: 'E', octave: 5 }, { note: 'G', octave: 5 }] }),
      new Sixteenth({ note: 'C', octave: 5, dots: 1 })
    ))
  });

  it('splits a tied note', () => {
    const quarterNote = new Quarter(({ note: 'C', octave: 5, isTied: true }))

    const m1 = createMeasure(new Eighth({ note: 'C', octave: 5 }), new Thirtysecond({ note: 'C', octave: 5 }))
    const m2 = createMeasure(new Sixteenth({ note: 'C', octave: 5, dots: 1 }))

    splitNote(1, quarterNote, m1, m2)

    expect(m1).toEqual(createMeasure(
      new Eighth({ note: 'C', octave: 5 }),
      new Thirtysecond({ note: 'C', octave: 5 }),
      new Sixteenth({ note: 'C', octave: 5, dots: 1, isTied: true })
    ))
    expect(m2).toEqual(createMeasure(
      new Eighth({ note: 'C', octave: 5, isTied: true }),
      new Thirtysecond({ note: 'C', octave: 5, isTied: true }),
      new Sixteenth({ note: 'C', octave: 5, dots: 1 })
    ))
  })

  it('splits a dotted half (3.0) with only 1.0 space in first measure', () => {
    const measureDuration = 4.0;
    const dottedHalf = new Half({ note: 'D', octave: 4, dots: 1 }); // 3.0

    const m1 = createMeasure();
    m1.notes.push(new Half({ note: 'C', octave: 4, dots: 1 })); // 3.0 used → 1.0 left

    const m2 = createMeasure();

    splitNote(measureDuration, dottedHalf, m1, m2);

    const d1 = getNotesDuration(m1.notes);
    const d2 = getNotesDuration(m2.notes);

    expect(d1).toBeCloseTo(4.0);
    expect(d2).toBeCloseTo(2.0);
    expect(m2.notes.every(n => n instanceof NoteBase)).toBe(true);
  });

  it('splits a double-dotted quarter note (1.75) with 1.0 space left', () => {
    const measureDuration = 4.0;
    const dottedQuarter = new Quarter({ note: 'E', octave: 4, dots: 2 }); // beatDuration = 1.75

    const m1 = createMeasure();
    m1.notes.push(new Half({ note: 'C', octave: 4, dots: 1 })); // 3.0 → 1.0 left

    const m2 = createMeasure();

    splitNote(measureDuration, dottedQuarter, m1, m2);

    const d1 = getNotesDuration(m1.notes); // 3.0 (Half-dotted) + 1.0 (part of dottedQuarter) = 4.0
    const d2 = getNotesDuration(m2.notes); // 0.75

    expect(d1).toBeLessThanOrEqual(4.0);
    expect(d2).toBeCloseTo(0.75);
    expect(m2.notes.every(n => n instanceof NoteBase)).toBe(true);
  });

  it('splits a tied note with dots across measures', () => {
    const measureDuration = 4.0;
    const m1 = createMeasure(
      new Half({ note: 'C', octave: 4, isTied: true }),
    );
    const m2 = createMeasure(new Quarter({ note: 'C', octave: 4 }));

    splitNote(measureDuration, new Half({ note: 'C', octave: 4, isTied: true, dots: 1 }), m1, m2)

    expect(m1).toEqual(createMeasure(
      new Half({ note: 'C', octave: 4, isTied: true }),
      new Half({ note: 'C', octave: 4, isTied: true }),
    ))
    expect(m2).toEqual(createMeasure(
      new Quarter({ note: 'C', octave: 4, isTied: true }),
      new Quarter({ note: 'C', octave: 4 }),
    ))
  })

  it('splits a note with dots and fills correctly both measures', () => {
    const measureDuration = 4.0;
    const dottedHalf = new Half({ note: 'F', octave: 4, dots: 1 }); // 3.0

    const m1 = createMeasure();
    m1.notes.push(new Half({ note: 'A', octave: 4 })); // 2.0
    m1.notes.push(new EighthRest()); // 0.5

    const m2 = createMeasure();
    m2.notes.push(new QuarterRest()); // 1.0

    splitNote(measureDuration, dottedHalf, m1, m2);

    const d1 = getNotesDuration(m1.notes); // Should be 4.0
    const d2 = getNotesDuration(m2.notes); // Should be 2.5

    expect(d1).toBeCloseTo(4.0);
    expect(d2).toBeCloseTo(2.5);
    expect(m2.notes.splice(0, -2).every(n => n instanceof NoteBase)).toBe(true);
  });
});

describe('mergeTiesAcrossMeasures (Whole = 4.0)', () => {
  it('Should merge multiple ties across measures', () => {
    const measures = [
      createMeasure(
        new Thirtysecond({ note: 'C', octave: 5, isTied: true }),
        new Thirtysecond({ note: 'C', octave: 5 }),
        new Thirtysecond({ note: 'C', octave: 5, isTied: true }),
        new Sixteenth({ note: 'C', octave: 5 }),
        new Eighth({ note: 'C', octave: 5, isTied: true }),
        new Eighth({ note: 'C', octave: 5, isTied: true }),
        new Eighth({ note: 'C', octave: 5 }),
        new Thirtysecond({ note: 'C', octave: 5 }),
        new Thirtysecond({ note: 'C', octave: 5, isTied: true }),
        new Thirtysecond({ note: 'C', octave: 5, isTied: true })
      ),
    ]

    mergeTiesAcrossMeasures(measures)

    expect(measures[0]).toEqual(createMeasure(
      new Sixteenth({ note: 'C', octave: 5 }),
      new Sixteenth({ note: 'C', octave: 5, dots: 1 }),
      new Quarter({ note: 'C', octave: 5, dots: 1 }),
      new Thirtysecond({ note: 'C', octave: 5 }),
      new Sixteenth({ note: 'C', octave: 5, isTied: true })
    ))
  })

  it('Should merge ties across measures', () => {
    const measures = [
      createMeasure(
        new Quarter({ note: 'C', octave: 4, dots: 1 }),
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Eighth({ note: 'C', octave: 4 })
      ),
      createMeasure(
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Quarter({ note: 'C', octave: 4 })
      )
    ]
    mergeTiesAcrossMeasures(measures)

    expect(measures.length).toBe(2)
    expect(measures[0].notes.length).toBe(3)
    expect(measures[0]).toEqual(createMeasure(
      new Quarter({ note: 'C', octave: 4, dots: 1 }),
      new Half({ note: 'C', octave: 4, isTied: true }),
      new Eighth({ note: 'C', octave: 4 })
    ))
    expect(measures[1]).toEqual(createMeasure(new Whole({ note: 'C', octave: 4 })))
  })

  it('Merges ties when tied notes span across measures', () => {
    const measures = [
      createMeasure(
        new Quarter({ note: 'C', octave: 4, dots: 1 }),
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Eighth({ note: 'C', octave: 4, isTied: true })
      ),
      createMeasure(new Whole({ note: 'C', octave: 4 }))
    ]
    mergeTiesAcrossMeasures(measures)

    expect(measures.length).toBe(2)
    expect(measures[0].notes.length).toBe(3)
    expect(measures[0]).toEqual(createMeasure(
      new Quarter({ note: 'C', octave: 4, dots: 1 }),
      new Half({ note: 'C', octave: 4, isTied: true }),
      new Eighth({ note: 'C', octave: 4, isTied: true })
    ))
    expect(measures[1]).toEqual(createMeasure(new Whole({ note: 'C', octave: 4 })))
  })

  it('Should merge ties in chords across measures', () => {
    const measures = [
      createMeasure(
        new Quarter({ note: 'C', octave: 4, dots: 1 }),
        new Quarter({ note: 'C', octave: 4, isTied: true }),
        new Chord({ noteConstructor: Eighth, notes: [{ note: 'C', octave: 4, isTied: true }, { note: 'E', octave: 4, isTied: true }] }),
        new Chord({ noteConstructor: Eighth, notes: [{ note: 'C', octave: 4, isTied: true }, { note: 'E', octave: 4 }] }),
        new Eighth({ note: 'C', octave: 4, isTied: true })
      ),
      createMeasure(new Whole({ note: 'C', octave: 4 }))
    ]
    mergeTiesAcrossMeasures(measures)

    expect(measures.length).toBe(2)
    expect(measures[0].notes.length).toBe(4)
    expect(measures[0]).toEqual(createMeasure(
      new Quarter({ note: 'C', octave: 4, dots: 1 }),
      new Quarter({ note: 'C', octave: 4, isTied: true }),
      new Chord({ noteConstructor: Quarter, notes: [{ note: 'C', octave: 4, isTied: true }, { note: 'E', octave: 4 }] }),
      new Eighth({ note: 'C', octave: 4, isTied: true })
    ))
    expect(measures[1]).toEqual(createMeasure(new Whole({ note: 'C', octave: 4 })))
  })

})

describe('mergeRestsAcrossMeasures (Whole = 4.0)', () => {
  it('should not pop a measure that is not at the end of the sheet music', () => {
    const measures = [
      createMeasure(new HalfRest(), new HalfRest()),
      createMeasure(new Whole({ note: 'C', octave: 5 })),
      createMeasure(new HalfRest(), new HalfRest()),
      createMeasure(new HalfRest(), new QuarterRest(), new QuarterRest()),
    ]

    mergeRestsAcrossMeasures(measures)

    expect(measures.length).toBe(2)
    expect(measures[0]).toEqual(createMeasure(new WholeRest()))
    expect(measures[1]).toEqual(createMeasure(new Whole({ note: 'C', octave: 5 })))
  })

  it('should pop the final measures if they are composed only of rests', () => {
    const measures = [
      createMeasure(new Whole({ note: 'C', octave: 5 })),
      createMeasure(new HalfRest(), new HalfRest()),
      createMeasure(new HalfRest(), new QuarterRest(), new QuarterRest()),
    ]

    mergeRestsAcrossMeasures(measures)

    expect(measures.length).toBe(1)
    expect(measures[0]).toEqual(createMeasure(new Whole({ note: 'C', octave: 5 })))
  })

  it('should merge rests', () => {
    const measures = [
      createMeasure(new HalfRest(), new HalfRest()),
      createMeasure(new HalfRest(), new QuarterRest(), new QuarterRest()),
      createMeasure(new Whole({ note: 'C', octave: 5 }))
    ]

    mergeRestsAcrossMeasures(measures)

    expect(measures.length).toBe(3)
    expect(measures[0]).toEqual(createMeasure(new WholeRest()))
    expect(measures[1]).toEqual(createMeasure(new WholeRest()))
    expect(measures[2]).toEqual(createMeasure(new Whole({ note: 'C', octave: 5 })))
  })
})

describe('normalizeMeasure (Whole = 4.0)', () => {
  const measureDuration = 4.0;

  it('does nothing if measure is already normalized', () => {
    const ms = createMeasure(new Whole({ note: 'C', octave: 4 }));
    const original = getNotesDuration(ms.notes);
    normalizeMeasure([], ms, undefined, measureDuration);
    expect(getNotesDuration(ms.notes)).toBe(original);
  });

  it('normalize a measure with an extra thirtysecond note', () => {
    const m1 = createMeasure(
      new Thirtysecond({ note: 'C', octave: 4 }),
      new Chord({ noteConstructor: Half, notes: [{ note: 'C', octave: 4 }, { note: 'E', octave: 4 }] }),
      new Half({ note: 'C', octave: 4 }),
    );
    const all = [m1]
    normalizeMeasure(all, m1, undefined, measureDuration);
    const dur1 = getNotesDuration(m1.notes);

    expect(dur1).toBe(measureDuration)
    expect(m1).toEqual(createMeasure(
      new Thirtysecond({ note: 'C', octave: 4 }),
      new Chord({ noteConstructor: Half, notes: [{ note: 'C', octave: 4 }, { note: 'E', octave: 4 }] }),
      new Quarter({ note: 'C', octave: 4, isTied: true, dots: 3 })
    ))
    expect(all.length).toBe(2)
    expect(all[1]).toEqual(createMeasure(
      new Thirtysecond({ note: 'C', octave: 4 })
    ))
  })

  it('moves a note to the next measure if it overflows', () => {
    const m1 = createMeasure(new Half({ note: 'C', octave: 4 }), new Half({ note: 'D', octave: 4 }), new Quarter({ note: 'E', octave: 4 }));
    const m2 = createMeasure();
    normalizeMeasure([], m1, m2, measureDuration);
    const dur1 = getNotesDuration(m1.notes);
    const dur2 = getNotesDuration(m2.notes);

    expect(dur1).toBeLessThanOrEqual(measureDuration);
    expect(dur2).toBeGreaterThan(0);
  });

  it('creates a new measure if no next and note is not a rest', () => {
    const m1 = createMeasure(new Whole({ note: 'C', octave: 4 }), new Quarter({ note: 'D', octave: 4 }));
    const all = [m1];

    normalizeMeasure(all, m1, undefined, measureDuration);
    expect(all.length).toBe(2);
    const last = all[1];
    expect(getNotesDuration(last.notes)).toBe(measureDuration);
  });

  it('splits note across measures if it doesn’t fit completely', () => {
    const dotted = new Half({ note: 'F', octave: 4, dots: 2 }); // dotted half (3.5)
    const m1 = createMeasure(new Quarter({ note: 'C', octave: 4 }), dotted); // 1.0 + 3.5 = 4.5 but dotted' overflow
    const m2 = createMeasure();
    normalizeMeasure([], m1, m2, measureDuration);

    const d1 = getNotesDuration(m1.notes);
    const d2 = getNotesDuration(m2.notes);
    expect(d1).toBeCloseTo(measureDuration);
    expect(d2).toBeGreaterThan(0);
  });

  it('skips removing rests if overflowing rest and no next measure', () => {
    const rest = new QuarterRest();
    const m1 = createMeasure(new Whole({ note: 'C', octave: 4 }), rest);
    normalizeMeasure([m1], m1, undefined, measureDuration);
    expect(m1.notes.includes(rest)).toBe(false);
    expect(getNotesDuration(m1.notes)).toBeLessThanOrEqual(measureDuration);
  });

  it('recursively normalizes complex overflow', () => {
    const m1 = createMeasure(
      new Half({ note: 'A', octave: 4 }), // 2.0
      new Quarter({ note: 'B', octave: 4 }), // 1.0
      new Quarter({ note: 'C', octave: 4 }), // 1.0 → total = 4.0
      new Quarter({ note: 'D', octave: 4 })  // extra → overflow
    );
    const m2 = createMeasure();
    const all = [m1, m2];

    normalizeMeasure(all, m1, m2, measureDuration);

    expect(getNotesDuration(m1.notes)).toBeLessThanOrEqual(measureDuration);
    expect(getNotesDuration(m2.notes)).toBeGreaterThan(0);
  });

  it('pulls a note from the next measure if it fits and current measure is underfilled', () => {
    const m1 = createMeasure(new Half({ note: 'C', octave: 4 })); // 2.0 beats
    const m2 = createMeasure(new Quarter({ note: 'D', octave: 4 })); // 1.0 beat
    const all = [m1, m2];

    normalizeMeasure(all, m1, m2, measureDuration);

    expect(getNotesDuration(m1.notes)).toBe(4.0); // 2.0 + 1.0 + 1.0 (rest)
    expect(getNotesDuration(m2.notes)).toBe(0.0); // Emptied
  });

  it('splits a note from next measure if it does not fully fit', () => {
    const m1 = createMeasure(new Half({ note: 'C', octave: 4 })); // 2.0 beats
    const m2 = createMeasure(new Half({ note: 'E', octave: 4 })); // 2.0 beats

    normalizeMeasure([m1, m2], m1, m2, measureDuration);

    expect(getNotesDuration(m1.notes)).toBeCloseTo(4.0);
    expect(getNotesDuration(m2.notes)).toBeLessThan(2.0); // Some of it got split
  });

  it('fills with rests if underfilled and there is no next measure', () => {
    const m1 = createMeasure(new Half({ note: 'C', octave: 4 })); // 2.0
    const all = [m1];

    normalizeMeasure(all, m1, undefined, measureDuration);

    expect(getNotesDuration(m1.notes)).toBe(measureDuration);
    const rests = m1.notes.filter(n => n instanceof RestBase);
    expect(rests.length).toBeGreaterThan(0); // Confirm rests were added
  });

  it('does not overfill measure when pulling from next', () => {
    const m1 = createMeasure(new Quarter({ note: 'C', octave: 4 })); // 1.0
    const m2 = createMeasure(new Whole({ note: 'D', octave: 4 }));   // 4.0

    normalizeMeasure([m1, m2], m1, m2, measureDuration);

    expect(getNotesDuration(m1.notes)).toBeCloseTo(measureDuration);
    expect(getNotesDuration(m2.notes)).toBeLessThan(4.0); // Note was split
  });

  it('handles recursive pulling and splitting from next measures', () => {
    const m1 = createMeasure(new Quarter({ note: 'C', octave: 4 })); // 1.0
    const m2 = createMeasure(new Whole({ note: 'D', octave: 4 }));   // 4.0
    const m3 = createMeasure(new Whole({ note: 'E', octave: 4 }));   // 4.0
    const all = [m1, m2, m3];

    normalizeMeasure(all, m1, m2, measureDuration);

    expect(getNotesDuration(m1.notes)).toBeCloseTo(measureDuration);
    expect(getNotesDuration(m2.notes)).toBeLessThan(measureDuration);
    expect(getNotesDuration(m3.notes)).toBeGreaterThan(0); // still has something
  });

  it('normalize measure with 1.5 overflow', () => {
    const measure = createMeasure(
      new Quarter({ note: 'C', octave: 4, dots: 1 }), // 1.5
      new Half({ note: 'C', octave: 4 }),             // 2
      new Quarter({ note: 'C', octave: 4 }),          // 1
      new Quarter({ note: 'C', octave: 4 })           // 1
    )
    const all = [measure]
    normalizeMeasure(all, measure, undefined, measureDuration)

    expect(measure).toEqual(createMeasure(
      new Quarter({ note: 'C', octave: 4, dots: 1 }),
      new Half({ note: 'C', octave: 4 }),
      new Eighth({ note: 'C', octave: 4, isTied: true })
    ))
    expect(all[1]).toEqual(createMeasure(
      new Eighth({ note: 'C', octave: 4 }),
      new Quarter({ note: 'C', octave: 4 }),
      new HalfRest(),
      new QuarterRest()
    ))
  })
});
