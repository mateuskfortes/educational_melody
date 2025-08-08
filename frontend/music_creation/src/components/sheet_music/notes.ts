import { Sampler } from "tone";
import { ChordTemplate, CleanNoteType, NoteConstructorTemplate, NoteConstructorArgsTemplate, NoteTemplate, OctaveType, RestTemplate } from "../../types/templates";

// Returns the beat duration including the number of dots
const getBeatDurationWithDots = (initialBeatDuration: number, dots: number) => initialBeatDuration * (2 - 1 / Math.pow(2, dots))

export class NoteBase implements NoteTemplate {
  note: CleanNoteType;
  octave: OctaveType;
  isSharp: boolean;
  isTied: boolean;
  dots: number;
  beatDuration: number;
  dotsLimit: number;

  constructor(
    defaultBeatDuration: number,
    dotsLimit: number,
    note: CleanNoteType,
    octave: OctaveType,
    isSharp: boolean = false,
    dots: number = 0,
    isTied: boolean = false
  ) {
    this.dotsLimit = dotsLimit;
    this.note = note
    this.octave = octave
    this.isSharp = isSharp
    this.isTied = isTied;
    const validDots = Math.min(dots, this.dotsLimit);
    this.dots = validDots;
    this.beatDuration = getBeatDurationWithDots(defaultBeatDuration, dots);
  }

  getMusicalNote() {
    return this.note + (this.isSharp ? '#' : '') + this.octave;
  }

  play(sampler: Sampler, now: number, beat: number) {
    sampler.triggerAttack(this.getMusicalNote(), now);
    sampler.triggerRelease(this.getMusicalNote(), now + this.beatDuration * beat)
  }
}

export class Chord implements ChordTemplate {
  notes: NoteTemplate[]
  beatDuration: number;

  constructor(note: NoteConstructorArgsTemplate[], noteType: NoteConstructorTemplate, dots: number = 0) {
    this.notes = note.map((nt: NoteConstructorArgsTemplate) => new noteType(nt[0], nt[1], nt[2], nt[3]))
    this.beatDuration = new noteType('C', 4, false, dots).beatDuration
  }

  play(sampler: Sampler, now: number, beat: number) {
    this.notes.forEach((note: NoteTemplate) => note.play(sampler, now, beat));
  }
}

export class Whole extends NoteBase implements NoteTemplate {
  constructor(...args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 4;
    const dotsLimit = 5;
    super(defaultBeatDuration, dotsLimit, ...args);
  }
}

export class Half extends NoteBase implements NoteTemplate {
  constructor(...args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 2;
    const dotsLimit = 4;
    super(defaultBeatDuration, dotsLimit, ...args);
  }
}

export class Quarter extends NoteBase implements NoteTemplate {
  constructor(...args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1;
    const dotsLimit = 3;
    super(defaultBeatDuration, dotsLimit, ...args);
  }
}

export class Eighth extends NoteBase implements NoteTemplate {
  constructor(...args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1 / 2;
    const dotsLimit = 2;
    super(defaultBeatDuration, dotsLimit, ...args);
  }
}

export class Sixteenth extends NoteBase implements NoteTemplate {
  constructor(...args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1 / 4;
    const dotsLimit = 1;
    super(defaultBeatDuration, dotsLimit, ...args);
  }
}

export class Thirtysecond extends NoteBase implements NoteTemplate {
  constructor(...args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1 / 8;
    const dotsLimit = 0;
    super(defaultBeatDuration, dotsLimit, ...args);
  }
}

export class RestBase implements RestTemplate {
  beatDuration = 0;

  play(..._: any) {
    return
  }
}

export class WholeRest extends RestBase implements RestTemplate {
  beatDuration = 4;
}

export class HalfRest extends RestBase implements RestTemplate {
  beatDuration = 2;
}

export class QuarterRest extends RestBase implements RestTemplate {
  beatDuration = 1;
}

export class EighthRest extends RestBase implements RestTemplate {
  beatDuration = 1 / 2;
}

export class SixteenthRest extends RestBase implements RestTemplate {
  beatDuration = 1 / 4;
}

export class ThirtysecondRest extends RestBase implements RestTemplate {
  beatDuration = 1 / 8
}