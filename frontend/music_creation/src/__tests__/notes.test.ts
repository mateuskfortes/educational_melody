import { describe, expect, it } from "vitest";
import { Eighth, EighthRest, Half, HalfRest, Quarter, QuarterRest, Sixteenth, SixteenthRest, Thirtysecond, ThirtysecondRest, Whole, WholeRest } from "../classes/notes";

describe('Test notes object', () => {
  it('Should create the note with the given params', () => {
    const dots = 2

    const defaultWholeBeatDuration = new Whole({ cleanNote: 'C', octave: 3 }).beatDuration
    const note = new Whole({ cleanNote: 'C', octave: 3, accidental: 'sharp', dots })

    expect(note.cleanNote).toBe('C')
    expect(note.octave).toBe(3)
    expect(note.accidental).toBe('sharp')
    expect(note.beatDuration).toBe(defaultWholeBeatDuration * (2 - 1 / Math.pow(2, dots)))
  })
  it('Should create a note with the right beat duration', () => {
    const whole = new Whole({ cleanNote: 'C', octave: 4 })
    const half = new Half({ cleanNote: 'C', octave: 4 })
    const quarter = new Quarter({ cleanNote: 'C', octave: 4 })
    const eighth = new Eighth({ cleanNote: 'C', octave: 4 })
    const sixteenth = new Sixteenth({ cleanNote: 'C', octave: 4 })
    const thirtysecond = new Thirtysecond({ cleanNote: 'C', octave: 4 })

    expect(thirtysecond.beatDuration * 2).toBe(sixteenth.beatDuration)
    expect(sixteenth.beatDuration * 2).toBe(eighth.beatDuration)
    expect(eighth.beatDuration * 2).toBe(quarter.beatDuration)
    expect(quarter.beatDuration * 2).toBe(half.beatDuration)
    expect(half.beatDuration * 2).toBe(whole.beatDuration)
  })
  it('Should create a rest with the right beat duration', () => {
    const wholeRest = new WholeRest()
    const halfRest = new HalfRest()
    const quarterRest = new QuarterRest()
    const eighthRest = new EighthRest()
    const sixteenthRest = new SixteenthRest()
    const thirtysecondRest = new ThirtysecondRest()

    expect(thirtysecondRest.beatDuration * 2).toBe(sixteenthRest.beatDuration)
    expect(sixteenthRest.beatDuration * 2).toBe(eighthRest.beatDuration)
    expect(eighthRest.beatDuration * 2).toBe(quarterRest.beatDuration)
    expect(quarterRest.beatDuration * 2).toBe(halfRest.beatDuration)
    expect(halfRest.beatDuration * 2).toBe(wholeRest.beatDuration)
  })
  it('Should set dots with dots limit value if dots value is greater than dots limit', () => {
    const whole = new Whole({ cleanNote: 'C', octave: 4, dots: 6 })
    const half = new Half({ cleanNote: 'C', octave: 4, dots: 5 })
    const quarter = new Quarter({ cleanNote: 'C', octave: 4, dots: 4 })
    const eighth = new Eighth({ cleanNote: 'C', octave: 4, dots: 3 })
    const sixteenth = new Sixteenth({ cleanNote: 'C', octave: 4, dots: 2 })
    const thirtysecond = new Thirtysecond({ cleanNote: 'C', octave: 4, dots: 1 })

    expect(whole.dots).toBe(5) // Whole note has a limit of 5 dots
    expect(half.dots).toBe(4) // Half note has a limit of
    expect(quarter.dots).toBe(3) // Quarter note has a limit of 3 dots
    expect(eighth.dots).toBe(2) // Eighth note has a limit
    expect(sixteenth.dots).toBe(1) // Sixteenth note has a limit of 1 dot
    expect(thirtysecond.dots).toBe(0) // Thirtysecond note has a limit of 0 dots
  })
})
