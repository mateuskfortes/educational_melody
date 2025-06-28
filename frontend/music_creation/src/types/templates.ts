export type OctaveType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type CleanNoteType = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';

export type MusicalNoteType = `${'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'}${'' | '#'}${1 | 2 | 3 | 4 | 5 | 6 | 7}`;

export type NoteConstructorType = [CleanNoteType, OctaveType, boolean]

export interface NoteTemplate {
    note: CleanNoteType; 
    octave: OctaveType;
    isSharp: boolean;
    beatDuration: number;
    play: (sampler: any, now: number, beat: number) => void
}

export interface ChordTemplate {
    notes: NoteTemplate[]
    beatDuration: number;
    play: (ampler: any, now: number, beat: number) => void
}

export interface RestTemplate {
    beatDuration: number;
    play: (...args: any) => void
}

export interface MeasureTemplate {
    notes: (NoteTemplate | ChordTemplate | RestTemplate)[]
}

export interface MusicTemplate {
    meter: {
        top: number,
        bottom: number
    }
    bpm: number,
    measures: MeasureTemplate[]
}

export interface GlobalTemplate {
    music: MusicTemplate
}

export type MusicAction = { type: 'ADD_NOTE'; note: NoteTemplate };