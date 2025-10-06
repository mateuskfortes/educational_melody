import { useEffect, useState } from "react";
import {
  AccidentalTemplate,
  CleanNoteType,
  MusicManageModeType,
  NotesTemplate,
  OctaveType
} from "@/types/music-library/sheetMusicTemplates";
import { useSheetMusicLibraryContext } from "@/hooks/music-library/useSheetMusicLibraryContext";
import { notesConstructors, restNotesConstructors } from "@/classes/music-library/notes";

const ManageNoteForm = () => {
  const { addSheetMusic, runAll, selectNote, musicManageMode, setMusicManageMode } =
    useSheetMusicLibraryContext();

  const [cleanNote, setCleanNote] = useState<CleanNoteType | "REST">("C");
  const [octave, setOctave] = useState<OctaveType>(5);
  const [accidental, setAccidental] = useState<AccidentalTemplate>(undefined);
  const [dots, setDots] = useState<number>(0);
  const [noteType, setNoteType] = useState<number>(3);

  useEffect(() => {
    if (musicManageMode === "ADD") {
      let noteObj: NotesTemplate;
      if (cleanNote === "REST") {
        const RestClass = restNotesConstructors[noteType];
        noteObj = new RestClass();
      } else {
        const NoteClass = notesConstructors[noteType];
        noteObj = new NoteClass({ cleanNote, octave, accidental, dots });
      }
      selectNote(noteObj);
      setMusicManageMode("ADD");
    } else if (musicManageMode === "ADD_TO_CHORD") {
      setCleanNote(prev => (prev === "REST" ? "C" : prev));
      const NoteClass = notesConstructors[noteType];
      const noteObj = new NoteClass({ cleanNote: cleanNote as CleanNoteType, octave, accidental, dots });
      selectNote(noteObj);
      setMusicManageMode("ADD_TO_CHORD");
    } else {
      selectNote(undefined);
      setMusicManageMode("REMOVE");
    }
  }, [cleanNote, octave, accidental, dots, noteType, musicManageMode]);

  return (
    <section className="creator-box">
      <h2 className="creator-title">Menu de Notas</h2>

      <form className="creator-grid">
        <label>
          Modos
          <select
            value={musicManageMode}
            onChange={e => setMusicManageMode(e.target.value as MusicManageModeType)}
          >
            <option value="ADD">Adicionar</option>
            <option value="ADD_TO_CHORD">Adicionar Acorde</option>
            <option value="REMOVE">Remover</option>
          </select>
        </label>

        {(musicManageMode === "ADD" || musicManageMode === "ADD_TO_CHORD") && (
          <>
            <label>
              Nota
              <select value={cleanNote} onChange={e => setCleanNote(e.target.value as CleanNoteType)}>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="A">A</option>
                <option value="B">B</option>
                {musicManageMode !== "ADD_TO_CHORD" && <option value="REST">Pausa</option>}
              </select>
            </label>

            {cleanNote !== "REST" && (
              <>
                <label>
                  Oitava
                  <input
                    type="number"
                    min={0}
                    max={8}
                    value={octave}
                    onChange={e => setOctave(Number(e.target.value) as OctaveType)}
                  />
                </label>

                {musicManageMode !== "ADD_TO_CHORD" && (
                  <label>
                    Pontos
                    <input
                      type="number"
                      min={0}
                      max={new notesConstructors[noteType]({ cleanNote, octave }).dotsLimit}
                      value={dots}
                      onChange={e => setDots(Number(e.target.value))}
                    />
                  </label>
                )}

                <label>
                  Acidental
                  <select
                    value={accidental}
                    onChange={e => setAccidental(e.target.value as AccidentalTemplate)}
                  >
                    <option value={undefined}>Nenhum</option>
                    <option value="sharp">♯</option>
                    <option value="flat">♭</option>
                    <option value="natural">♮</option>
                  </select>
                </label>
              </>
            )}

            <label>
              Duração
              <select value={noteType} onChange={e => setNoteType(Number(e.target.value))}>
                <option value="0">Whole</option>
                <option value="1">Half</option>
                <option value="2">Quarter</option>
                <option value="3">Eighth</option>
                <option value="4">Sixteenth</option>
                <option value="5">Thirtysecond</option>
              </select>
            </label>
          </>
        )}
      </form>

      <div className="creator-buttons">
        <button onClick={addSheetMusic} className="btn-orange">
          Adicionar Partitura
        </button>
        <button onClick={runAll} className="btn-border">
          Tocar Música
        </button>
      </div>
    </section>
  );
};

export default ManageNoteForm;
