import { describe, it, expect, vi } from 'vitest'
import { sheetMusicReducer } from '../hooks/useSheetMusic'
import { Whole, Quarter, QuarterRest, Half, HalfRest } from '../classes/notes'
import type { MusicTemplate, NotesTemplate, NoteTemplate } from '../types/sheetMusicTemplates'
import * as SheetMusicFunctions from '../hooks/helpers/useSheetMusicFunctions'

const normalizeMeasureMock = vi.spyOn(SheetMusicFunctions, 'normalizeMeasure')

const createMusicTemplate = (notesPerMeasure: NotesTemplate[][]): MusicTemplate => ({
  bpm: 100,
  meter: { top: 4, bottom: 4 },
  measures: notesPerMeasure.map(notes => ({ notes })),
});

describe('sheetMusicReducer - ADD_NOTE', () => {
  const initialState: MusicTemplate = {
    meter: { top: 4, bottom: 4 },
    bpm: 120,
    measures: [
      { notes: [new Whole({ note: 'C', octave: 4 })] }, // 4 beats total
      { notes: [] },
    ],
  }

  it('does not add note if measure index does not exist', () => {
    const note: NoteTemplate = new Quarter({ note: 'D', octave: 4 })
    const action = {
      type: 'ADD_NOTE' as const,
      payload: { note, measureIndex: 10, noteIndex: 0 },
    }
    const state = sheetMusicReducer(initialState, action)
    expect(state).toEqual(initialState)
  })

  it('does not add note if not enough space in measure', () => {
    const note: NoteTemplate = new Whole({ note: 'D', octave: 4, dots: 1 }) // 6 beats
    const action = {
      type: 'ADD_NOTE' as const,
      payload: { note, measureIndex: 0, noteIndex: 0 },
    }
    const state = sheetMusicReducer(initialState, action)
    expect(state).toEqual(initialState)
  })

  it('does not add note if noteIndex exceeds measure capacity', () => {
    const note: NoteTemplate = new Quarter({ note: 'D', octave: 4 }) // 1 beat
    // measureSpace = 4 / 1 = 4, noteIndex = 4 is out of bounds
    const action = {
      type: 'ADD_NOTE' as const,
      payload: { note, measureIndex: 1, noteIndex: 4 },
    }
    const state = sheetMusicReducer(initialState, action)
    expect(state).toEqual(initialState)
  })

  it('adds note correctly and calls normalizeMeasure', () => {
    const note: NoteTemplate = new Quarter({ note: 'D', octave: 4 })
    const action = {
      type: 'ADD_NOTE' as const,
      payload: { note, measureIndex: 1, noteIndex: 0 },
    };

    // Clear previouscalls to mock
    normalizeMeasureMock.mockClear()

    const state = sheetMusicReducer(initialState, action)

    expect(state.measures[1].notes).toEqual([new Quarter({ note: 'D', octave: 4 }), new HalfRest(), new QuarterRest()])
    expect(state.measures[1].notes[0]).toBe(note)

    // Verify normalizeMeasure was called at least once
    expect(SheetMusicFunctions.normalizeMeasure).toHaveBeenCalled()

    // Check that a new state object is returned (immutability)
    expect(state).not.toBe(initialState)
  })
})

describe('sheetMusicReducer - REMOVE_NOTE', () => {
  it('removes a note at given index from measure', () => {
    const initial = createMusicTemplate([
      [new Quarter({ note: 'C', octave: 4 }), new Quarter({ note: 'D', octave: 4 })],
    ]);

    const action = {
      type: 'REMOVE_NOTE',
      payload: { measureIndex: 0, noteIndex: 0 },
    } as const;

    const state = sheetMusicReducer(initial, action);
    expect(state.measures[0].notes).toEqual([new Quarter({ note: 'D', octave: 4 }), new HalfRest(), new QuarterRest()]);
    expect((state.measures[0].notes[0] as NoteTemplate).note).toBe('D');
  });

  it('does nothing if the measure does not exist', () => {
    const initial = createMusicTemplate([[new Quarter({ note: 'C', octave: 4 })]]);

    const action = {
      type: 'REMOVE_NOTE',
      payload: { measureIndex: 5, noteIndex: 0 },
    } as const;

    const state = sheetMusicReducer(initial, action);
    expect(state).toEqual(initial);
  });

  it('does nothing if the note does not exist at index', () => {
    const initial = createMusicTemplate([[new Quarter({ note: 'C', octave: 4 })]]);

    const action = {
      type: 'REMOVE_NOTE',
      payload: { measureIndex: 0, noteIndex: 5 },
    } as const;

    const state = sheetMusicReducer(initial, action);
    expect(state).toEqual(initial);
  });

  it('removes last note and normalizes with rests', () => {
    const initial = createMusicTemplate([[new Whole({ note: 'C', octave: 4 }), new Quarter({ note: 'D', octave: 4 })]]);

    const action = {
      type: 'REMOVE_NOTE',
      payload: { measureIndex: 0, noteIndex: 1 }, // remove extra note
    } as const;

    const state = sheetMusicReducer(initial, action);
    const totalDuration = state.measures[0].notes.reduce((acc, n) => acc + n.beatDuration, 0);

    expect(totalDuration).toBeCloseTo(4.0);
    expect(state.measures[0].notes.length).toBe(1);
  });

  it('removes note and causes normalization into next measure', () => {
    const initial = createMusicTemplate([
      [
        new Half({ note: 'C', octave: 4 }),
        new Quarter({ note: 'D', octave: 4 }),
        new Quarter({ note: 'E', octave: 4 })
      ],
      [
        new Quarter({ note: 'F', octave: 4 }),
        new HalfRest(),
        new QuarterRest()
      ],
    ]);

    const action = {
      type: 'REMOVE_NOTE',
      payload: { measureIndex: 0, noteIndex: 1 }, // remove D
    } as const;

    const state = sheetMusicReducer(initial, action);

    expect(state.measures.length).toBe(1)
    expect(state.measures[0].notes).toEqual([
      new Half({ note: 'C', octave: 4 }),
      new Quarter({ note: 'E', octave: 4 }),
      new Quarter({ note: 'F', octave: 4 })
    ]);
  });

  it('clears measure', () => {
    const initial = createMusicTemplate([[new Whole({ note: 'C', octave: 4 })], [new Whole({ note: 'C', octave: 5 })]]);

    const action = {
      type: 'REMOVE_NOTE',
      payload: { measureIndex: 0, noteIndex: 0 },
    } as const;

    const state = sheetMusicReducer(initial, action);

    expect(state.measures.length).toBe(1)
    expect(state.measures[0].notes).toEqual([new Whole({ note: 'C', octave: 5 })]);
  });
});
