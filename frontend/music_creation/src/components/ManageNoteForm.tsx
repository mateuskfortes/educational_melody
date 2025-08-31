import { useEffect, useState } from "react"
import { AccidentalTemplate, CleanNoteType, MusicManageModeType, NotesTemplate, OctaveType } from "../types/sheetMusicTemplates"
import { useSheetMusicLibraryContext } from "../hooks/useSheetMusicLibraryContext";
import { notesConstructors, restNotesConstructors } from "../classes/notes";

const ManageNoteForm = () => {
  const { addSheetMusic, runAll, selectNote, musicManageMode, setMusicManageMode, insertNote, removeNote } = useSheetMusicLibraryContext()

  const [note, setNote] = useState<CleanNoteType | "REST">("C");
  const [octave, setOctave] = useState<OctaveType>(5);
  const [accidental, setAccidental] = useState<AccidentalTemplate>(undefined);
  const [dots, setDots] = useState<number>(0)
  const [isTied, setIsTied] = useState<boolean>(false)
  const [sheetMusicIndex, setSheetMusicIndex] = useState(0)
  const [measureIndex, setMeasureIndex] = useState(0);
  const [noteIndex, setNoteIndex] = useState(0);
  const [noteType, setNoteType] = useState<number>(3);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (musicManageMode === "ADD") insertNote(sheetMusicIndex, measureIndex, noteIndex)
    else if (musicManageMode === "REMOVE") removeNote(sheetMusicIndex, measureIndex, noteIndex)
  }

  useEffect(() => {
    if (musicManageMode === "ADD") {
      let noteObj: NotesTemplate;
      if (note === "REST") {
        const RestClass = restNotesConstructors[noteType];
        noteObj = new RestClass();
      } else {
        const NoteClass = notesConstructors[noteType];
        noteObj = new NoteClass({ note, octave, accidental, dots, isTied });
      }
      selectNote(noteObj);
      setMusicManageMode("ADD");
    } else {
      selectNote(undefined);
      setMusicManageMode("REMOVE");
    }
  }, [note, octave, accidental, dots, isTied, noteType, musicManageMode]);

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>
          Mode:
          <select value={musicManageMode} onChange={e => setMusicManageMode(e.target.value as MusicManageModeType)}>
            <option value="ADD">Add</option>
            <option value="REMOVE">Remove</option>
          </select>
        </label>

        {musicManageMode === "ADD" && (
          <>
            <select value={note} onChange={e => setNote(e.target.value as CleanNoteType)}>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="REST">Pausa</option>
            </select>

            {note !== "REST" && (
              <>
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
                  max={new notesConstructors[noteType]({ note, octave }).dotsLimit}
                  value={dots}
                  onChange={e => setDots(Number(e.target.value))}
                  placeholder="Pontos de aumento"
                />

                <label>
                  Acidental:
                  <select value={accidental} onChange={e => setAccidental(e.target.value as AccidentalTemplate)}>
                    <option value={undefined}>Nenhum</option>
                    <option value="sharp">♯</option>
                    <option value="flat">♭</option>
                    <option value="natural">♮</option>
                  </select>
                </label>

                <label>
                  Tie
                  <input
                    type="checkbox"
                    checked={isTied}
                    onChange={e => setIsTied(e.target.checked)}
                  />
                </label>
              </>
            )}

            <select value={noteType} onChange={e => setNoteType(Number(e.target.value))}>
              <option value="0">Whole</option>
              <option value="1">Half</option>
              <option value="2">Quarter</option>
              <option value="3">Eighth</option>
              <option value="4">Sixteenth</option>
              <option value="5">Thirtysecond</option>
            </select>
          </>
        )}

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

        <button type="submit">
          {musicManageMode === "ADD" ? "Adicionar" : "Remover"}
        </button>
      </form>

      <button onClick={addSheetMusic}>Adicionar partitura</button>
      <button onClick={runAll}>Tocar tudo</button>
    </>
  )
}

export default ManageNoteForm
