import { Sampler } from "tone";
import { ChordTemplate, CleanNoteType, NoteConstructorTemplate, NoteConstructorType, NoteTemplate, OctaveType, RestTemplate } from "../../types/templates";

export class NoteBase implements NoteTemplate {
  note: CleanNoteType;
  octave: OctaveType;
  isSharp: boolean;
  beatDuration: number;

  constructor(note: CleanNoteType, octave: OctaveType, isSharp: boolean) {
    this.note = note
    this.octave = octave
    this.isSharp = isSharp
    this.beatDuration = 0
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

  constructor(note: NoteConstructorType[], noteType: NoteConstructorTemplate) {
    this.notes = note.map((nt: NoteConstructorType) => new noteType(nt[0], nt[1], nt[2]))
    this.beatDuration = new noteType('C', 4, false).beatDuration
  }

  play(sampler: Sampler, now: number, beat: number) {
    this.notes.forEach((note: NoteTemplate) => note.play(sampler, now, beat));
  }
}

export class Whole extends NoteBase implements NoteTemplate {
  beatDuration = 4
}

export class Half extends NoteBase implements NoteTemplate {
  beatDuration = 2
}

export class Quarter extends NoteBase implements NoteTemplate {
  beatDuration = 1
}

export class Eighth extends NoteBase implements NoteTemplate {
  beatDuration = 1 / 2
}

export class Sixteenth extends NoteBase implements NoteTemplate {
  beatDuration = 1 / 4
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