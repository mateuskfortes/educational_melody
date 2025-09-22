import { ActionDispatch, Dispatch, SetStateAction } from "react";
import { Sampler } from "tone";

export type OctaveType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type CleanNoteType = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';

export type MusicalNoteType = `${'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'}${'' | '#'}${1 | 2 | 3 | 4 | 5 | 6 | 7}`;

export type NoteConstructorTemplate = new (args: NoteConstructorArgsTemplate) => NoteTemplate;

export type RestConstructorTemplate = new () => RestTemplate;

export type ChordConstructorTemplate = new (args: ChordConstructorArgsTemplate) => ChordTemplate;

export type AccidentalTemplate = undefined | "sharp" | "flat" | "natural";

export type NoteConstructorArgsTemplate = {
    cleanNote: CleanNoteType;
    octave: OctaveType;
    accidental?: AccidentalTemplate;
    isTied?: boolean; // If the note is tied with the next one
    dots?: number; // Number of dots
}

export type NoteConstructorCoreArgsTemplate = Omit<NoteConstructorArgsTemplate, 'dots'>

export type ChordConstructorArgsTemplate = {
    notes: NoteConstructorCoreArgsTemplate[];
    noteConstructor: NoteConstructorTemplate;
}

export type EqualNoteArgsTemplate = {
    cleanNote: CleanNoteType,
    octave: OctaveType,
    accidental: AccidentalTemplate
}

export interface NoteTemplate {
    cleanNote: CleanNoteType;
    octave: OctaveType;
    accidental: AccidentalTemplate;
    isTied: boolean; // If the note is tied with the next one
    beatDuration: number;
    dots: number; // Number of dots
    dotsLimit: number // Max number of dots
    getWidth: (measureWidth: number, measureDuration: number) => number
    equal: (note: EqualNoteArgsTemplate) => boolean
    play: (sampler: Sampler, now: number, beat: number, extraTieDuration?: number) => void
    getAriaLabel: (withRhythmicName?: boolean) => string
}

export interface RestTemplate {
    name: string
    beatDuration: number;
    getWidth: (measureWidth: number, measureDuration: number) => number
    getAriaLabel: () => string
}

export interface ChordTemplate {
    beatDuration: number;
    notes: NoteTemplate[];
    noteConstructor: NoteConstructorTemplate;
    getWidth: (measureWidth: number, measureDuration: number) => number
    getAriaLabel: () => string
}

export type NotesTemplate = NoteTemplate | RestTemplate | ChordTemplate;

export interface MeasureTemplate {
    notes: NotesTemplate[]
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

export type AddNotePayload = {
    note: NotesTemplate
    measureIndex: number
    noteIndex: number
    addToChord?: boolean
}

export type AddNoteAction = {
    type: 'ADD_NOTE'
    payload: AddNotePayload
}

export type RemoveNotePayload = {
    measureIndex: number
    noteIndex: number
    chordNoteIndex?: number
}

export type RemoveNoteAction = {
    type: 'REMOVE_NOTE'
    payload: RemoveNotePayload
}

export type TieNotePayload = {
    startMeasureIndex: number
    startNoteIndex: number
    startChordNoteIndex?: number
    endMeasureIndex: number
    endNoteIndex: number
}

export type TieNoteAction = {
    type: 'TIE_NOTE'
    payload: TieNotePayload
}

export type MusicAction = AddNoteAction | RemoveNoteAction | TieNoteAction;

export type MusicManageModeType = "ADD" | "REMOVE"

export type SheetMusicItem = {
    music: MusicTemplate,
    run?: (() => void),
    dispatch?: ActionDispatch<[action: MusicAction]>
}

export type MusicContextType = {
    addSheetMusic: () => void
    runAll: () => void
    selectedNote: NotesTemplate | undefined
    selectNote: Dispatch<SetStateAction<NotesTemplate | undefined>>
    musicManageMode: MusicManageModeType
    setMusicManageMode: Dispatch<SetStateAction<MusicManageModeType>>
    insertNote: (sheetMusicIndex: number, measureIndex: number, noteIndex: number, addToChord?: boolean) => void
    removeNote: (sheetMusicIndex: number, measureIndex: number, noteIndex: number, chordNoteIndex?: number) => void
}

export type SheetMusicContextType = {
    sheetMusicIndex: number
    music: MusicTemplate
    measureWidth: number
    measureDuration: number
    measureHeight: number
}

export type PlayingNoteTemplate = {
    cleanNote: CleanNoteType;
    octave: OctaveType;
    accidental: AccidentalTemplate;
    end: number;
}