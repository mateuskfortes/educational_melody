import { ActionDispatch } from "react";
import { MeasureTemplate, MusicAction, MusicTemplate, NoteTemplate, RestTemplate } from "./sheetMusicTemplates";

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

export type NotePropsTemplate = {
  note: NoteTemplate;
  sheetMusicIndex: number
  measureIndex: number;
  noteIndex: number
}

export type RestPropsTemplate = {
  rest: RestTemplate;
  sheetMusicIndex: number
  measureIndex: number;
  noteIndex: number
}

export type TiePropsTemplate = {
  width: number,
  height?: number,
  left?: string,
  top?: string
}
