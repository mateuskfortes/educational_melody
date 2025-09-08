import { describe, it, expect, vi, test } from 'vitest'
import { sheetMusicReducer } from '../hooks/useSheetMusic'
import { Whole, Quarter, QuarterRest, Half, HalfRest, Chord, Eighth } from '../classes/notes'
import type { AddNoteAction, ChordTemplate, MusicTemplate, NotesTemplate, NoteTemplate, TieNoteAction } from '../types/sheetMusicTemplates'
import * as SheetMusicFunctions from '../hooks/helpers/useSheetMusicFunctions'
import { createMeasure } from '../utils'

const normalizeMeasureMock = vi.spyOn(SheetMusicFunctions, 'normalizeMeasuresAcrossSheetMusic')

const createMusicTemplate = (notesPerMeasure: NotesTemplate[][]): MusicTemplate => ({
  bpm: 100,
  meter: { top: 4, bottom: 4 },
  measures: notesPerMeasure.map(notes => ({ notes })),
});

describe('sheetMusicReducer', () => {
  describe('ADD_NOTE', () => {
    const initialState: MusicTemplate = {
      meter: { top: 4, bottom: 4 },
      bpm: 120,
      measures: [
        { notes: [new Whole({ cleanNote: 'C', octave: 4 })] }, // 4 beats total
      ],
    }

    describe('SINGLE NOTE', () => {
      it('does not add note if measure index does not exist', () => {
        const note: NoteTemplate = new Quarter({ cleanNote: 'D', octave: 4 })
        const action = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 10, noteIndex: 0 },
        }
        const state = sheetMusicReducer(initialState, action)
        expect(state).toEqual(initialState)
      })

      it('does not add note if not enough space in measure', () => {
        const note: NoteTemplate = new Whole({ cleanNote: 'D', octave: 4, dots: 1 }) // 6 beats
        const action = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0 },
        }
        const state = sheetMusicReducer(initialState, action)
        expect(state).toEqual(initialState)
      })

      it('does not add note if noteIndex exceeds measure capacity', () => {
        const note: NoteTemplate = new Quarter({ cleanNote: 'D', octave: 4 }) // 1 beat
        // measureSpace = 4 / 1 = 4, noteIndex = 4 is out of bounds
        const action = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 1, noteIndex: 4 },
        }
        const state = sheetMusicReducer(initialState, action)
        expect(state).toEqual(initialState)
      })

      it('adds note correctly at the end of the sheet music and calls normalizeMeasuresAcrossSheetMusic', () => {
        const note: NoteTemplate = new Quarter({ cleanNote: 'D', octave: 4 })
        const action = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 1, noteIndex: 0 },
        };

        // Clear previouscalls to mock
        normalizeMeasureMock.mockClear()

        const state = sheetMusicReducer(initialState, action)

        expect(state.measures[1].notes).toEqual([new Quarter({ cleanNote: 'D', octave: 4 }), new HalfRest(), new QuarterRest()])
        expect(state.measures[1].notes[0]).toBe(note)

        // Verify normalizeMeasuresAcrossSheetMusic was called at least once
        expect(SheetMusicFunctions.normalizeMeasuresAcrossSheetMusic).toHaveBeenCalled()

        // Check that a new state object is returned (immutability)
        expect(state).not.toBe(initialState)
      })
    })

    describe('CHORD', () => {

      it('Should add a chord', () => {
        const chord = new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }] })
        const action = {
          type: 'ADD_NOTE' as const,
          payload: { note: chord, measureIndex: 0, noteIndex: 0 }
        }

        const state = sheetMusicReducer(initialState, action)
        expect(state.measures).toEqual([
          createMeasure(
            new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
            new Half({ cleanNote: 'C', octave: 4, dots: 1, isTied: true })
          ),
          createMeasure(
            new Quarter({ cleanNote: 'C', octave: 4 }),
            new HalfRest(),
            new QuarterRest(),
          )
        ])
      })

      it('should convert the chord into a single note if the chord has only one note', () => {
        const chord = new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }] })
        const action = {
          type: 'ADD_NOTE' as const,
          payload: { note: chord, measureIndex: 0, noteIndex: 0 }
        }

        const state = sheetMusicReducer(initialState, action)
        expect(state.measures).toEqual([
          createMeasure(
            new Quarter({ cleanNote: 'C', octave: 4 }),
            new Half({ cleanNote: 'C', octave: 4, dots: 1, isTied: true })
          ),
          createMeasure(
            new Quarter({ cleanNote: 'C', octave: 4 }),
            new HalfRest(),
            new QuarterRest(),
          )
        ])
      })

      it('should not add a chord if it has no notes', () => {
        const chord = new Chord({ noteConstructor: Quarter, notes: [] })
        const action = {
          type: 'ADD_NOTE' as const,
          payload: { note: chord, measureIndex: 0, noteIndex: 0 }
        }

        const state = sheetMusicReducer(initialState, action)
        expect(state).toEqual(initialState)
      })

      it('should merge to notes into a chord', () => {
        const note: NoteTemplate = new Whole({ cleanNote: 'D', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initialState, action)

        expect(state.measures[0]).toEqual(createMeasure(new Chord({
          noteConstructor: Whole, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4 }]
        })))
      })

      it('should add a note into a chord', () => {
        const initial = createMusicTemplate([[new Chord({ noteConstructor: Whole, notes: [{ cleanNote: 'C', octave: 4 }] })]])
        const note: NoteTemplate = new Whole({ cleanNote: 'D', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state.measures[0]).toEqual(createMeasure(new Chord({
          noteConstructor: Whole, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4 }]
        })))
      })

      it('Should add a note into a chord with a different constructor when the added note duration is smaller than the existing chord', () => {
        const initial = createMusicTemplate([[new Chord({ noteConstructor: Whole, notes: [{ cleanNote: 'C', octave: 4 }] })]])
        const note: NoteTemplate = new Half({ cleanNote: 'D', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }]
          }),
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }]
          })
        ))
      })

      it('Should add a note into a tied chord with a different constructor when the added note duration is smaller than the existing chord', () => {
        const initial = createMusicTemplate([
          [
            new Chord({
              noteConstructor: Whole,
              notes: [
                { cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4 }
              ]
            })
          ],
          [
            new Chord({
              noteConstructor: Whole,
              notes: [
                { cleanNote: 'C', octave: 4 }
              ]
            })
          ]
        ])
        const note: NoteTemplate = new Quarter({ cleanNote: 'D', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }]
          }),
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4, isTied: true }]
          }),
          new Chord({
            noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4 }]
          })
        ))
        expect(state.measures[1]).toEqual(initial.measures[1])
      })

      it('Should add a dotted note into a chord with a different constructor when the added note duration is smaller than the existing chord', () => {
        const initial = createMusicTemplate([[new Chord({ noteConstructor: Whole, notes: [{ cleanNote: 'C', octave: 4 }] })]])
        const note: NoteTemplate = new Quarter({ cleanNote: 'D', octave: 4, dots: 1 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action);

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Quarter,
            notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4, isTied: true }]
          }),
          new Chord({
            noteConstructor: Eighth,
            notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }]
          }),
          new Chord({
            noteConstructor: Half,
            notes: [{ cleanNote: 'C', octave: 4, isTied: true }]
          }),
          new Chord({
            noteConstructor: Eighth,
            notes: [{ cleanNote: 'C', octave: 4 }]
          })
        ))
      })

      it('should add a note into another note with a different constructor merging into a chord when the added note duration is smaller than the existing note', () => {
        const note: NoteTemplate = new Half({ cleanNote: 'D', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initialState, action)

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }]
          }),
          new Half({ cleanNote: 'C', octave: 4 })
        ))
      })

      it('Should add a dotted note into another dotted note with a different constructor merging into a chord when the added note duration is smaller than the existing note', () => {
        const initial = createMusicTemplate([[new Half({ cleanNote: 'C', octave: 4, dots: 1 }), new Quarter({ cleanNote: 'E', octave: 4 })]])
        const note: NoteTemplate = new Quarter({ cleanNote: 'D', octave: 4, dots: 1 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action);

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Quarter,
            notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4, isTied: true }]
          }),
          new Chord({
            noteConstructor: Eighth,
            notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }]
          }),
          new Quarter({ cleanNote: 'C', octave: 4, dots: 1 }),
          new Quarter({ cleanNote: 'E', octave: 4 })
        ))
      })

      it('Should add a note into a chord with a different constructor when the added note duration is bigger than the existing chord', () => {
        const initial = createMusicTemplate([
          [
            new Chord({
              noteConstructor: Half,
              notes: [
                { cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4 }
              ]
            }),
            new Chord({
              noteConstructor: Half,
              notes: [
                { cleanNote: 'C', octave: 4, }, { cleanNote: 'E', octave: 4 }
              ]
            })
          ],
        ])
        const note: NoteTemplate = new Whole({ cleanNote: 'D', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }, { cleanNote: 'D', octave: 4, isTied: true }]
          }),
          new Half({ cleanNote: 'D', octave: 4 })
        ))
        expect(state.measures[1]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Half,
            notes: [
              { cleanNote: 'C', octave: 4, }, { cleanNote: 'E', octave: 4 }
            ]
          }),
          new HalfRest()
        ))
      })

      it('Should add a dotted note into a chord with a different constructor when the added note duration is bigger than the existing chord', () => {
        const initial = createMusicTemplate([
          [
            new Chord({
              noteConstructor: Half,
              notes: [
                { cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4 }
              ]
            }),
            new Chord({
              noteConstructor: Half,
              notes: [
                { cleanNote: 'C', octave: 4, }, { cleanNote: 'E', octave: 4 }
              ]
            })
          ],
        ])
        const note: NoteTemplate = new Half({ cleanNote: 'D', octave: 4, dots: 1 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }, { cleanNote: 'D', octave: 4, isTied: true }]
          }),
          new Quarter({ cleanNote: 'D', octave: 4 }),
          new Chord({
            noteConstructor: Quarter,
            notes: [
              { cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4, isTied: true }
            ]
          }),
        ))
        expect(state.measures[1]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Quarter,
            notes: [
              { cleanNote: 'C', octave: 4, }, { cleanNote: 'E', octave: 4 }
            ]
          }),
          new HalfRest(),
          new QuarterRest()
        ))
      })

      it('Should add a note into another note with a different constructor merging into a chord when the added note duration is bigger than the existing note', () => {
        const initial = createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4, isTied: true }),
            new Half({ cleanNote: 'C', octave: 4 }),
          ],
        ])
        const note: NoteTemplate = new Whole({ cleanNote: 'D', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4, isTied: true }]
          }),
          new Half({ cleanNote: 'D', octave: 4 })
        ))
        expect(state.measures[1]).toEqual(createMeasure(
          new Half({ cleanNote: 'C', octave: 4 }),
          new HalfRest()
        ))
      })

      it('Should add a dotted note into another note with a different constructor merging into a chord when the added note duration is bigger than the existing note', () => {
        const initial = createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4, isTied: true }),
            new Half({ cleanNote: 'C', octave: 4 }),
          ],
        ])
        const note: NoteTemplate = new Half({ cleanNote: 'D', octave: 4, dots: 1 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state.measures[0]).toEqual(createMeasure(
          new Chord({
            noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4, isTied: true }]
          }),
          new Quarter({ cleanNote: 'D', octave: 4 }),
          new Quarter({ cleanNote: 'C', octave: 4, isTied: true })
        ))
        expect(state.measures[1]).toEqual(createMeasure(
          new Quarter({ cleanNote: 'C', octave: 4 }),
          new HalfRest(),
          new QuarterRest()
        ))
      })

      it('Should not add a note into a chord if they are equal', () => {
        const initial = createMusicTemplate([[new Chord({ noteConstructor: Whole, notes: [{ cleanNote: 'C', octave: 4 }] })]])
        const note: NoteTemplate = new Half({ cleanNote: 'C', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state).toStrictEqual(initial)
      })

      it('Should not add a note into into another note if they are equal', () => {
        const initial = createMusicTemplate([[new Whole({ cleanNote: 'C', octave: 4 })]])
        const note: NoteTemplate = new Half({ cleanNote: 'C', octave: 4 })
        const action: AddNoteAction = {
          type: 'ADD_NOTE' as const,
          payload: { note, measureIndex: 0, noteIndex: 0, addToChord: true },
        };

        const state = sheetMusicReducer(initial, action)

        expect(state).toStrictEqual(initial)
      })
    })

    test('REST', () => {
      const note = new QuarterRest()
      const action = {
        type: 'ADD_NOTE' as const,
        payload: { note, measureIndex: 0, noteIndex: 0 }
      }

      const state = sheetMusicReducer(initialState, action)
      expect(state.measures).toEqual([
        { notes: [new QuarterRest(), new Half({ cleanNote: 'C', octave: 4, dots: 1, isTied: true })] },
        { notes: [new Quarter({ cleanNote: 'C', octave: 4 }), new HalfRest(), new QuarterRest()] }
      ])
    })
  })

  describe('REMOVE_NOTE', () => {
    describe('SINGLE NOTE', () => {
      it('removes a note at given index from measure', () => {
        const initial = createMusicTemplate([
          [new Quarter({ cleanNote: 'C', octave: 4 }), new Quarter({ cleanNote: 'D', octave: 4 })],
        ]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 0, noteIndex: 0 },
        } as const;

        const state = sheetMusicReducer(initial, action);
        expect(state.measures[0].notes).toEqual([new Quarter({ cleanNote: 'D', octave: 4 }), new HalfRest(), new QuarterRest()]);
        expect((state.measures[0].notes[0] as NoteTemplate).cleanNote).toBe('D');
      });

      it('removes last note and normalizes with rests', () => {
        const initial = createMusicTemplate([[new Whole({ cleanNote: 'C', octave: 4 }), new Quarter({ cleanNote: 'D', octave: 4 })]]);

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
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
          [
            new Quarter({ cleanNote: 'F', octave: 4 }),
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
          new Half({ cleanNote: 'C', octave: 4 }),
          new Quarter({ cleanNote: 'E', octave: 4 }),
          new Quarter({ cleanNote: 'F', octave: 4 })
        ]);
      });
    })

    describe('CHORD', () => {
      it('should covert a chord into a note if only one note remains', () => {
        const initial = createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
          [
            new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'F', octave: 4 }, { cleanNote: 'A', octave: 4 }] }),
            new HalfRest(),
            new QuarterRest()
          ],
        ]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 1, noteIndex: 0, chordNoteIndex: 1 },
        } as const;

        const state = sheetMusicReducer(initial, action);

        expect(state).toEqual(createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
          [
            new Quarter({ cleanNote: 'F', octave: 4 }),
            new HalfRest(),
            new QuarterRest()
          ],
        ]))
      })

      it('Should remove the entire chord if no chordNoteIndex is provided', () => {
        const initial = createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
          [
            new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'F', octave: 4 }, { cleanNote: 'A', octave: 4 }] }),
            new HalfRest(),
            new QuarterRest()
          ],
        ]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 1, noteIndex: 0 },
        } as const;

        const state = sheetMusicReducer(initial, action);

        expect(state).toEqual(createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
        ]))
      })

      it('should remove a note from a chord', () => {
        const initial = createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
          [
            new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'F', octave: 4 }, { cleanNote: 'A', octave: 4 }, { cleanNote: 'C', octave: 5 }] }),
            new HalfRest(),
            new QuarterRest()
          ],
        ]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 1, noteIndex: 0, chordNoteIndex: 1 },
        } as const;

        const state = sheetMusicReducer(initial, action);

        expect(state).toEqual(createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
          [
            new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'F', octave: 4 }, { cleanNote: 'C', octave: 5 }] }),
            new HalfRest(),
            new QuarterRest()
          ],
        ]))
      })
    })

    describe('LOGIC', () => {
      it('does nothing if the measure does not exist', () => {
        const initial = createMusicTemplate([[new Quarter({ cleanNote: 'C', octave: 4 })]]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 5, noteIndex: 0 },
        } as const;

        const state = sheetMusicReducer(initial, action);
        expect(state).toEqual(initial);
      });

      it('does nothing if the note does not exist at index', () => {
        const initial = createMusicTemplate([[new Quarter({ cleanNote: 'C', octave: 4 })]]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 0, noteIndex: 5 },
        } as const;

        const state = sheetMusicReducer(initial, action);
        expect(state).toEqual(initial);
      });

      it('Should not remove a note from a chord if the chordNoteIndex does not exist', () => {
        const initial = createMusicTemplate([
          [
            new Half({ cleanNote: 'C', octave: 4 }),
            new Quarter({ cleanNote: 'D', octave: 4 }),
            new Quarter({ cleanNote: 'E', octave: 4 })
          ],
          [
            new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'F', octave: 4 }, { cleanNote: 'A', octave: 4 }, { cleanNote: 'C', octave: 5 }] }),
            new HalfRest(),
            new QuarterRest()
          ],
        ]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 1, noteIndex: 0, chordNoteIndex: 3 },
        } as const;

        const state = sheetMusicReducer(initial, action);

        expect(state).toEqual(initial)
      })

      it('clears measure', () => {
        const initial = createMusicTemplate([[new Whole({ cleanNote: 'C', octave: 4 })], [new Whole({ cleanNote: 'C', octave: 5 })]]);

        const action = {
          type: 'REMOVE_NOTE',
          payload: { measureIndex: 0, noteIndex: 0 },
        } as const;

        const state = sheetMusicReducer(initial, action);

        expect(state.measures.length).toBe(1)
        expect(state.measures[0].notes).toEqual([new Whole({ cleanNote: 'C', octave: 5 })]);
      });

      describe('remove ties from the previous note', () => {
        describe('previous note is a SINGLE NOTE', () => {
          it('Should remove the tie if the removed note is a single note and it is not tied', () => {
            const initial = createMusicTemplate([[
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Half({ cleanNote: 'C', octave: 4 })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            expect((state.measures[0].notes[0] as NoteTemplate).isTied).toBe(false)
          })

          it('Should not remove the tie if the removed note is a single note and it is tied', () => {
            const initial = createMusicTemplate([[
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Half({ cleanNote: 'C', octave: 4, isTied: true })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            expect((state.measures[0].notes[0] as NoteTemplate).isTied).toBe(true)
          })

          it('Should remove the tie if the removed note is a chord and the tied note is not tied with the next one', () => {
            const initial = createMusicTemplate([[
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }] })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            expect((state.measures[0].notes[0] as NoteTemplate).isTied).toBe(false)
          })

          it('Should not remove the tie if the removed note is a chord and the tied note is tied with the next one', () => {
            const initial = createMusicTemplate([[
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }] })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            expect((state.measures[0].notes[0] as NoteTemplate).isTied).toBe(true)
          })

          it('Should remove the tie if the removed note is inside a chord', () => {
            const initial = createMusicTemplate([[
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4 }, { cleanNote: 'E', octave: 4 }] })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1, chordNoteIndex: 0 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            const finalNote = state.measures[0].notes[0] as NoteTemplate
            expect(finalNote).toStrictEqual(new Half({ cleanNote: 'C', octave: 4 }))
          })

          it('Should not remove the tie if the removed note is inside a chord and no other note is tied', () => {
            const initial = createMusicTemplate([[
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4 }, { cleanNote: 'E', octave: 4 }] })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1, chordNoteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            const finalNote = state.measures[0].notes[0] as NoteTemplate
            expect(finalNote).toStrictEqual(new Half({ cleanNote: 'C', octave: 4, isTied: true }))
          })
        })
        describe('previous note is a CHORD', () => {
          it('Should remove the tie if the removed note is a single note and is not tied', () => {
            const initial = createMusicTemplate([[
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }] }),
              new Half({ cleanNote: 'C', octave: 4 }),
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            expect((state.measures[0].notes[0] as ChordTemplate).notes).toStrictEqual([
              new Half({ cleanNote: 'C', octave: 4 }),
              new Half({ cleanNote: 'D', octave: 4 }),
            ])
          })

          it('Should not remove the tie if the removed note is a single note and is tied', () => {
            const initial = createMusicTemplate([[
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }] }),
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            expect((state.measures[0].notes[0] as ChordTemplate).notes).toStrictEqual([
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Half({ cleanNote: 'D', octave: 4 }),
            ])
          })

          it('Should remove the corresponding tie if the removed chord notes are not tied', () => {
            const initial = createMusicTemplate([[
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4, isTied: true }, { cleanNote: 'E', octave: 4 }] }),
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }] }),
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            expect((state.measures[0].notes[0] as ChordTemplate).notes).toStrictEqual([
              new Half({ cleanNote: 'C', octave: 4, isTied: true }),
              new Half({ cleanNote: 'D', octave: 4 }),
              new Half({ cleanNote: 'E', octave: 4 }),
            ])
          })

          it('Should remove the tie if the removed note is inside a chord', () => {
            const initial = createMusicTemplate([[
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }] }),
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4 }, { cleanNote: 'E', octave: 4 }] })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1, chordNoteIndex: 0 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            const finalNote = state.measures[0].notes[0] as ChordTemplate
            expect(finalNote).toStrictEqual(new Chord({
              noteConstructor: Half,
              notes: [
                { cleanNote: 'C', octave: 4, isTied: false },
                { cleanNote: 'D', octave: 4 }
              ]
            }))
          })

          it('Should not remove the tie if the removed note is inside a chord and no other note is tied', () => {
            const initial = createMusicTemplate([[
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4, isTied: true }, { cleanNote: 'D', octave: 4 }] }),
              new Chord({ noteConstructor: Half, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'D', octave: 4 }, { cleanNote: 'E', octave: 4 }] })
            ]])
            const action = {
              type: 'REMOVE_NOTE',
              payload: { measureIndex: 0, noteIndex: 1, chordNoteIndex: 1 },
            } as const;

            const state = sheetMusicReducer(initial, action)

            const finalNote = state.measures[0].notes[0] as Chord
            expect(finalNote).toStrictEqual(new Chord({
              noteConstructor: Half,
              notes: [
                { cleanNote: 'C', octave: 4, isTied: true },
                { cleanNote: 'D', octave: 4 }
              ]
            }))
          })
        })
      })
    })
  });

  describe('TIE_NOTE', () => {
    it('Should tie two notes', () => {
      const initial = createMusicTemplate([[
        new QuarterRest(),
        new Quarter({ cleanNote: 'E', octave: 4, isTied: true }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
      ]])

      const action: TieNoteAction = {
        type: 'TIE_NOTE',
        payload: {
          startMeasureIndex: 0,
          startNoteIndex: 1,
          startChordNoteIndex: 1,
          endMeasureIndex: 0,
          endNoteIndex: 2
        }
      }

      const state = sheetMusicReducer(initial, action)

      expect(state).toStrictEqual(createMusicTemplate([[
        new QuarterRest(),
        new Quarter({ cleanNote: 'E', octave: 4, isTied: true }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
      ]]))
    })

    it('Should tie a note and a chord', () => {
      const initial = createMusicTemplate([[
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
      ]])

      const action: TieNoteAction = {
        type: 'TIE_NOTE',
        payload: {
          startMeasureIndex: 0,
          startNoteIndex: 1,
          startChordNoteIndex: 1,
          endMeasureIndex: 0,
          endNoteIndex: 2
        }
      }

      const state = sheetMusicReducer(initial, action)

      expect(state).toStrictEqual(createMusicTemplate([[
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4, isTied: true }] }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
      ]]))
    })

    it('Should tie two chords', () => {
      const initial = createMusicTemplate([[
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'G', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
      ]])

      const action: TieNoteAction = {
        type: 'TIE_NOTE',
        payload: {
          startMeasureIndex: 0,
          startNoteIndex: 1,
          startChordNoteIndex: 1,
          endMeasureIndex: 0,
          endNoteIndex: 2
        }
      }

      const state = sheetMusicReducer(initial, action)

      expect((state.measures[0].notes[1] as ChordTemplate).notes[1].isTied).toBe(true)

      expect(state).toStrictEqual(createMusicTemplate([[
        new Quarter({ cleanNote: 'E', octave: 4 }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4, isTied: true }] }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'G', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Quarter({ cleanNote: 'E', octave: 4 }),
      ]]))
    })

    it('Should tie multiple notes', () => {
      const initial = createMusicTemplate([[
        new Eighth({ cleanNote: 'E', octave: 4 }),
        new Eighth({ cleanNote: 'E', octave: 4 }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'G', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Eighth({ cleanNote: 'E', octave: 4 }),
        new Eighth({ cleanNote: 'E', octave: 4 }),
      ]])

      const action: TieNoteAction = {
        type: 'TIE_NOTE',
        payload: {
          startMeasureIndex: 0,
          startNoteIndex: 1,
          startChordNoteIndex: 1,
          endMeasureIndex: 0,
          endNoteIndex: 4
        }
      }

      const state = sheetMusicReducer(initial, action)

      expect((state.measures[0].notes[1] as NoteTemplate).isTied).toBe(true)
      expect((state.measures[0].notes[2] as ChordTemplate).notes[1].isTied).toBe(true)
      expect((state.measures[0].notes[3] as ChordTemplate).notes[1].isTied).toBe(true)

      expect(state).toStrictEqual(createMusicTemplate([[
        new Eighth({ cleanNote: 'E', octave: 4 }),
        new Eighth({ cleanNote: 'E', octave: 4, isTied: true }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4, isTied: true }] }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'G', octave: 4 }, { cleanNote: 'E', octave: 4, isTied: true }] }),
        new Eighth({ cleanNote: 'E', octave: 4 }),
        new Eighth({ cleanNote: 'E', octave: 4 }),
      ]]))
    })

    it('Should not tie multiple notes if at least one of them is not equal', () => {
      const initial = createMusicTemplate([[
        new Eighth({ cleanNote: 'E', octave: 4 }),
        new Eighth({ cleanNote: 'E', octave: 4 }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'C', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Chord({ noteConstructor: Quarter, notes: [{ cleanNote: 'G', octave: 4 }, { cleanNote: 'E', octave: 4 }] }),
        new Eighth({ cleanNote: 'C', octave: 4 }),
        new Eighth({ cleanNote: 'E', octave: 4 }),
      ]])

      const action: TieNoteAction = {
        type: 'TIE_NOTE',
        payload: {
          startMeasureIndex: 0,
          startNoteIndex: 1,
          startChordNoteIndex: 1,
          endMeasureIndex: 0,
          endNoteIndex: 4
        }
      }

      const state = sheetMusicReducer(initial, action)

      expect(state).toStrictEqual(initial)
    })
  })
})
