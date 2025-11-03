import { getTopDistance } from "../../../../utils";
import Tie from "./ornaments/Tie";
import { SingleNotePropsTemplate } from "../../../../_types/ComponentsPropsTypes";
import Accidental from "./ornaments/Accidental";
import Dots from "./ornaments/Dots";
import LedgerLines from "./ornaments/LedgerLines";
import CleanNoteDraw from "./CleanNoteDraw";
import { useSheetMusicLibraryContext } from "../../../../_hooks/useSheetMusicLibraryContext";

const SingleNote = ({ note, measureIndex, noteIndex }: SingleNotePropsTemplate) => {
  const { musicManageMode } = useSheetMusicLibraryContext()

  const topDistance = getTopDistance(note);

  const ariaLabelStart =
    musicManageMode === 'ADD'
      ? 'adicionar nota antes da '
      : musicManageMode === 'ADD_TO_CHORD'
        ? 'adicionar nota a '
        : 'remover '

  return (
    <>
      {note.isTied && <Tie top={`${topDistance + 3}%`} measureIndex={measureIndex} noteIndex={noteIndex} />}

      <div
        className="note"
        style={{ top: `${topDistance}%` }}
        aria-label={`${ariaLabelStart + note.getAriaLabel()}, na posição ${noteIndex + 1} do compasso ${measureIndex + 1}`}
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