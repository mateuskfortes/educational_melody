import { useEffect, useState } from "react"
import { CleanNoteType, OctaveType } from "../types/sheetMusicTemplates"
import { Whole, Half, Quarter, Eighth, Sixteenth, Thirtysecond } from "../classes/notes"
import { useSheetMusicLibraryContext } from "../hooks/useSheetMusicLibraryContext";

const noteClasses = {
  whole: Whole,
  half: Half,
  quarter: Quarter,
  eighth: Eighth,
  sixteenth: Sixteenth,
  thirtysecond: Thirtysecond
};

type NoteTypeKey = keyof typeof noteClasses;

const InsertNoteForm = () => {
  const { sheetMusicList, addSheetMusic, runAll, selectNote } = useSheetMusicLibraryContext()

  const [note, setNote] = useState<CleanNoteType>("C");
  const [octave, setOctave] = useState<OctaveType>(5);
  const [isSharp, setIsSharp] = useState<boolean>(false)
  const [dots, setDots] = useState<number>(0)
  const [isTied, setIsTied] = useState<boolean>(false)
  const [sheetMusicIndex, setSheetMusicIndex] = useState(0)
  const [measureIndex, setMeasureIndex] = useState(0);
  const [noteIndex, setNoteIndex] = useState(0);
  const [noteType, setNoteType] = useState<NoteTypeKey>("eighth");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const NoteClass = noteClasses[noteType];
    const noteObj = new NoteClass({ note, octave, isSharp, dots, isTied });

    if (sheetMusicList[sheetMusicIndex] && sheetMusicList[sheetMusicIndex].dispatch)
      sheetMusicList[sheetMusicIndex].dispatch({
        type: "ADD_NOTE",
        payload: { note: noteObj, measureIndex, noteIndex }
      })
  }

  useEffect(() => {
    const NoteClass = noteClasses[noteType];
    const noteObj = new NoteClass({ note, octave, isSharp, dots, isTied });
    selectNote(noteObj)
  }, [note, octave, isSharp, dots, isTied, noteType])

  return (
    <>
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

        <input
          type="number"
          min={0}
          max={new noteClasses[noteType]({ note, octave }).dotsLimit}
          value={dots}
          onChange={e => setDots(Number(e.target.value) as OctaveType)}
          placeholder="Pontos de aumento"
        />

        <input
          type="checkbox"
          checked={isSharp}
          onChange={e => setIsSharp(e.target.checked)}
        />

        <input
          type="checkbox"
          checked={isTied}
          onChange={e => setIsTied(e.target.checked)}
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
          value={sheetMusicIndex}
          onChange={e => setSheetMusicIndex(Number(e.target.value))}
          placeholder="Partitura"
        />
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
      <button onClick={addSheetMusic}>adicionar partitura</button>
      <button onClick={runAll}>Tocar tudo</button>
    </>
  )
}

export default InsertNoteForm
