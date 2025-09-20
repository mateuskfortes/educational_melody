import { ActionDispatch } from "react";
import { MeasureTemplate, MusicAction, MusicTemplate, NotesTemplate, NoteTemplate, RestTemplate } from "./sheetMusicTemplates";

export type SheetMusicSetRunAndDispatchArgs = {
  music: MusicTemplate,
  run: () => void,
  dispatch: ActionDispatch<[action: MusicAction]>
}

export type SheetMusicPropsTemplate = {
  initMusic: MusicTemplate;
  sheetMusicIndex: number
  setRunAndDispatch: (args: SheetMusicSetRunAndDispatchArgs) => void;
};

export type MeasurePropsTemplate = {
  measure: MeasureTemplate;
  ref: React.RefObject<HTMLDivElement | null>;
  sheetMusicIndex: number;
  measureIndex: number;
};

export type MusicNoteContainerPropsTemplate = {
  note: NotesTemplate;
  sheetMusicIndex: number;
  measureIndex: number;
  noteIndex: number;
}

export type ChordNotePropsTemplate = {
  note: NoteTemplate;
  sheetMusicIndex: number;
  measureIndex: number;
  noteIndex: number;
  chordNoteIndex: number
  stemHeight?: number
}

export type SingleNotePropsTemplate = {
  note: NoteTemplate;
  sheetMusicIndex: number;
  measureIndex: number;
  noteIndex: number;
}

export type RestPropsTemplate = {
  rest: RestTemplate;
}

export type TiePropsTemplate = {
  measureIndex: number
  noteIndex: number
  top?: string;
}
