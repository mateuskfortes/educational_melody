import { Sampler } from "tone";
import { AccidentalTemplate, ChordConstructorArgsTemplate, ChordTemplate, CleanNoteType, EqualNoteArgsTemplate, NoteConstructorArgsTemplate, NoteConstructorTemplate, NoteTemplate, OctaveType, RestConstructorTemplate, RestTemplate } from "../types/sheetMusicTemplates";
import { getBeatDurationWithDots } from "../utils";

export class NoteBase implements NoteTemplate {
  cleanNote: CleanNoteType;
  octave: OctaveType;
  accidental: AccidentalTemplate;
  isTied: boolean;
  dots: number;
  beatDuration: number;
  dotsLimit: number;

  constructor(
    defaultBeatDuration: number,
    dotsLimit: number,
    note: CleanNoteType,
    octave: OctaveType,
    accidental: AccidentalTemplate,
    dots: number = 0,
    isTied: boolean = false
  ) {
    this.dotsLimit = dotsLimit;
    this.cleanNote = note
    this.octave = octave
    this.accidental = accidental
    this.isTied = isTied;
    const validDots = Math.min(dots, this.dotsLimit);
    this.dots = validDots;
    this.beatDuration = getBeatDurationWithDots(defaultBeatDuration, dots);
  }

  getWidth(
    measureWidth: number,
    measureDuration: number
  ) {
    return this.beatDuration / measureDuration * measureWidth
  }

  equal(note: EqualNoteArgsTemplate) {
    if (
      note.cleanNote === this.cleanNote
      && note.octave === this.octave
      && note.accidental === this.accidental
    ) return true
    return false
  }

  getMusicalNote() {
    let accidentalDecorator = ''
    switch (this.accidental) {
      case 'sharp': accidentalDecorator = '#'; break;
      case 'flat': accidentalDecorator = 'b'; break;
    }
    return this.cleanNote + accidentalDecorator + this.octave;
  }

  play(sampler: Sampler, now: number, beat: number, extraTieDuration: number = 0) {
    sampler.triggerAttack(this.getMusicalNote(), now);
    sampler.triggerRelease(this.getMusicalNote(), now + (this.beatDuration + extraTieDuration) * beat)
  }
}

export class Whole extends NoteBase implements NoteTemplate {
  constructor(args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 4;
    const dotsLimit = 5;
    super(defaultBeatDuration, dotsLimit, args.cleanNote, args.octave, args.accidental, args.dots, args.isTied);
  }
}

export class Half extends NoteBase implements NoteTemplate {
  constructor(args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 2;
    const dotsLimit = 4;
    super(defaultBeatDuration, dotsLimit, args.cleanNote, args.octave, args.accidental, args.dots, args.isTied);
  }
}

export class Quarter extends NoteBase implements NoteTemplate {
  constructor(args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1;
    const dotsLimit = 3;
    super(defaultBeatDuration, dotsLimit, args.cleanNote, args.octave, args.accidental, args.dots, args.isTied);
  }
}

export class Eighth extends NoteBase implements NoteTemplate {
  constructor(args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1 / 2;
    const dotsLimit = 2;
    super(defaultBeatDuration, dotsLimit, args.cleanNote, args.octave, args.accidental, args.dots, args.isTied);
  }
}

export class Sixteenth extends NoteBase implements NoteTemplate {
  constructor(args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1 / 4;
    const dotsLimit = 1;
    super(defaultBeatDuration, dotsLimit, args.cleanNote, args.octave, args.accidental, args.dots, args.isTied);
  }
}

export class Thirtysecond extends NoteBase implements NoteTemplate {
  constructor(args: NoteConstructorArgsTemplate) {
    const defaultBeatDuration = 1 / 8;
    const dotsLimit = 0;
    super(defaultBeatDuration, dotsLimit, args.cleanNote, args.octave, args.accidental, args.dots, args.isTied);
  }
}

export class RestBase implements RestTemplate {
  name = '';
  beatDuration = 0;

  getWidth(
    measureWidth: number,
    measureDuration: number
  ) {
    return this.beatDuration / measureDuration * measureWidth
  }
}

export class WholeRest extends RestBase implements RestTemplate {
  name = 'WholeRest'
  beatDuration = 4;
}

export class HalfRest extends RestBase implements RestTemplate {
  name = 'HalfRest'
  beatDuration = 2;
}

export class QuarterRest extends RestBase implements RestTemplate {
  name = 'QuarterRest'
  beatDuration = 1;
}

export class EighthRest extends RestBase implements RestTemplate {
  name = 'EighthRest'
  beatDuration = 1 / 2;
}

export class SixteenthRest extends RestBase implements RestTemplate {
  name = 'SixteenthRest'
  beatDuration = 1 / 4;
}

export class ThirtysecondRest extends RestBase implements RestTemplate {
  name = 'ThirtysecondRest'
  beatDuration = 1 / 8
}

export class Chord implements ChordTemplate {
  notes: NoteTemplate[];
  beatDuration: number;
  noteConstructor: NoteConstructorTemplate;
  constructor(args: ChordConstructorArgsTemplate) {
    this.notes = args.notes.map(noteArgs => new args.noteConstructor({
      cleanNote: noteArgs.cleanNote,
      octave: noteArgs.octave,
      accidental: noteArgs.accidental,
      isTied: noteArgs.isTied
    }));
    this.beatDuration = this.notes[0]?.beatDuration ?? 0;
    this.noteConstructor = args.noteConstructor
  }

  getWidth(
    measureWidth: number,
    measureDuration: number
  ) {
    return this.beatDuration / measureDuration * measureWidth
  }
}

export const notesConstructors: NoteConstructorTemplate[] = [
  Whole,
  Half,
  Quarter,
  Eighth,
  Sixteenth,
  Thirtysecond,
];

export const restNotesConstructors: RestConstructorTemplate[] = [
  WholeRest,
  HalfRest,
  QuarterRest,
  EighthRest,
  SixteenthRest,
  ThirtysecondRest,
];