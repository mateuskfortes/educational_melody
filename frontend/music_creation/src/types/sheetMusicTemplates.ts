import { ActionDispatch, Dispatch, SetStateAction } from "react";
import { Sampler } from "tone";

export type OctaveType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type CleanNoteType = 'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B';

export type MusicalNoteType = `${'C' | 'D' | 'E' | 'F' | 'G' | 'A' | 'B'}${'' | '#'}${1 | 2 | 3 | 4 | 5 | 6 | 7}`;

export type NoteConstructorTemplate = new (args: NoteConstructorArgsTemplate) => NoteTemplate;

export type RestConstructorTemplate = new () => RestTemplate;

export type NoteConstructorArgsTemplate = {
    note: CleanNoteType;
    octave: OctaveType;
    isSharp?: boolean;
    isTied?: boolean; // If the note is tied with the next one
    dots?: number; // Number of dots
}

export interface NoteTemplate {
    name: string
    note: CleanNoteType;
    octave: OctaveType;
    isSharp: boolean;
    isTied: boolean; // If the note is tied with the next one
    beatDuration: number;
    dots: number; // Number of dots
    dotsLimit: number // Max number of dots
    play: (sampler: Sampler, now: number, beat: number) => void
}

export interface RestTemplate {
    name: string
    beatDuration: number;
}

export type NotesTemplate = NoteTemplate | RestTemplate

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
    note: NoteTemplate
    measureIndex: number
    noteIndex: number
}

export type AddNoteAction = {
    type: 'ADD_NOTE'
    payload: AddNotePayload
}

export type RemoveNotePayload = {
    measureIndex: number
    noteIndex: number
}

export type RemoveNoteAction = {
    type: 'REMOVE_NOTE'
    payload: RemoveNotePayload
}

export type MusicAction = AddNoteAction | RemoveNoteAction;

export type SheetMusicItem = {
    music: MusicTemplate,
    run?: (() => void),
    dispatch?: ActionDispatch<[action: MusicAction]>
}

export type MusicContextType = {
    sheetMusicList: SheetMusicItem[]
    addSheetMusic: () => void
    runAll: () => void
    selectedNote: NotesTemplate | undefined
    selectNote: Dispatch<SetStateAction<NotesTemplate | undefined>>
}

export type SheetMusicContextType = {
    measureWidth: number
    measureDuration: number
    measuresList: MeasureTemplate[]
}