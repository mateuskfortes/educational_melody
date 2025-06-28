import { useReducer } from "react"
import { ChordTemplate, CleanNoteType, MeasureTemplate, MusicAction, MusicTemplate, NoteConstructorType, NoteTemplate, OctaveType, RestTemplate } from "../types/templates"
import * as Tone from 'tone'
import { type Sampler } from "tone"

type NoteConstructor = new (note: CleanNoteType, octave: OctaveType, isSharp: boolean) => NoteBase;

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

  constructor(note: NoteConstructorType[], noteType: NoteConstructor) {
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

class RestBase implements RestTemplate {
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

const sheetMusicReducer = (prevState: MusicTemplate, action: MusicAction) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...prevState,
      };
    default:
      return prevState;
  }
}

const useSheetMusic = (initialState: MusicTemplate) => {
  const [music, dispatch] = useReducer(sheetMusicReducer, initialState)

  let loaded = false
  let running = false

  const sampler: Sampler = new Tone.Sampler({
    urls: {
      C4: "C4.mp3",
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();

  async function run() {
    if (!loaded) return

    if (running) return
    running = true

    const beat = 60 / music.bpm
    let now = Tone.now();
    music.measures.map((ms: MeasureTemplate) => {
      ms.notes.map((nc: NoteTemplate | ChordTemplate | RestTemplate) => {
        nc.play(sampler, now, beat)
        now += beat * nc.beatDuration
      })
    })

    await new  Promise(resolve => setTimeout(resolve, (now - Tone.now()) * 1000));
    running = false
  }

  Tone.loaded().then(() => {
    loaded = true
  });


  return [ run, music, dispatch ] as const
}

export default useSheetMusic