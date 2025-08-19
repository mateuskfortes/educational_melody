import { ActionDispatch } from "react";
import { MeasureTemplate, MusicAction, MusicTemplate, NoteTemplate, RestTemplate } from "./sheetMusicTemplates";

export type SheetMusicPropsTemplate = {
  initMusic: MusicTemplate;
  setRunAndDispatch: (
    run: () => void,
    dispatch: ActionDispatch<[action: MusicAction]>
  ) => void;
};

export type MeasurePropsTemplate = {
  measure: MeasureTemplate;
  ref: React.RefObject<HTMLDivElement | null>;
  measureIndex: number;
};

export type NotePropsTemplate = {
  note: NoteTemplate;
  measureIndex: number;
  noteIndex: number
}

export type RestPropsTemplate = {
  rest: RestTemplate;
}

export type TiePropsTemplate = {
  width: number,
  height?: number,
  left?: string,
  top?: string
}
