import { ActionDispatch, useState } from "react"
import { CleanNoteType, MusicAction, OctaveType } from "../types/sheetMusicTemplates"
import { Whole, Half, Quarter, Eighth, Sixteenth, Thirtysecond } from "../classes/notes"

const noteClasses = {
  whole: Whole,
  half: Half,
  quarter: Quarter,
  eighth: Eighth,
  sixteenth: Sixteenth,
  thirtysecond: Thirtysecond
};

type NoteTypeKey = keyof typeof noteClasses;

const InsertNoteForm = ({ dispatch }: { dispatch: ActionDispatch<[action: MusicAction]> }) => {
  const [note, setNote] = useState<CleanNoteType>("C");
  const [octave, setOctave] = useState<OctaveType>(5);
  const [measureIndex, setMeasureIndex] = useState(0);
  const [noteIndex, setNoteIndex] = useState(0);
  const [noteType, setNoteType] = useState<NoteTypeKey>("eighth");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const NoteClass = noteClasses[noteType];
    const noteObj = new NoteClass({ note, octave });

    dispatch({
      type: "ADD_NOTE",
      payload: { note: noteObj, measureIndex, noteIndex }
    });
  }

  return (
    <form onSubmit={handleSubmit}>

      <select value={note} onChange={e => setNote(e.target.value as CleanNoteType)}>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>

      <input
        type="number"
        min={0}
        max={8}
        value={octave}
        onChange={e => setOctave(Number(e.target.value) as OctaveType)}
        placeholder="Oitava"
      />

      <select value={noteType} onChange={e => setNoteType(e.target.value as NoteTypeKey)}>
        <option value="whole">Whole</option>
        <option value="half">Half</option>
        <option value="quarter">Quarter</option>
        <option value="eighth">Eighth</option>
        <option value="sixteenth">Sixteenth</option>
        <option value="thirtysecond">Thirtysecond</option>
      </select>

      <input
        type="number"
        min={0}
        value={measureIndex}
        onChange={e => setMeasureIndex(Number(e.target.value))}
        placeholder="Compasso"
      />
      <input
        type="number"
        min={0}
        value={noteIndex}
        onChange={e => setNoteIndex(Number(e.target.value))}
        placeholder="Índice da nota"
      />

      <button type="submit">Adicionar</button>
    </form>
  )
}

export default InsertNoteForm
