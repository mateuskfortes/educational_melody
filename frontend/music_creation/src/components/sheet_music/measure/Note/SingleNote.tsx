import { getTopDistance } from "../../../../utils";
import Tie from "./ornaments/Tie";
import { SingleNotePropsTemplate } from "../../../../types/ComponentsPropsTypes";
import { useSheetMusicLibraryContext } from "../../../../hooks/useSheetMusicLibraryContext";
import { NoteBase } from "../../../../classes/notes";
import Accidental from "./ornaments/Accidental";
import Dots from "./ornaments/Dots";
import LedgerLines from "./ornaments/LedgerLines";
import CleanNoteDraw from "./CleanNoteDraw";

const SingleNote = ({ note, sheetMusicIndex, measureIndex, noteIndex }: SingleNotePropsTemplate) => {
  const { insertNote, selectedNote } = useSheetMusicLibraryContext()

  const topDistance = getTopDistance(note);

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation() // prevents the click from bubbling up to the parent
    insertNote(sheetMusicIndex, measureIndex, noteIndex, true)
  }

  return (
    <>
      {selectedNote instanceof NoteBase && <div className="add_to_chord_box" onClick={handleClick} />}

      {note.isTied && <Tie top={`${topDistance + 3}%`} measureIndex={measureIndex} noteIndex={noteIndex} />}

      <div
        className="note"
        style={{ top: `${topDistance}%` }}
        aria-label={`${note.getAriaLabel()}, na posição ${noteIndex + 1} do compasso ${measureIndex + 1}`}
        tabIndex={0}
      >

        <Accidental accidental={note.accidental} />

        <CleanNoteDraw note={note} />

        <Dots dotCount={note.dots} />
      </div>

      <LedgerLines note={note} />
    </>
  );
}

export default SingleNote;