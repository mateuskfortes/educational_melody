import { useSheetMusicLibraryContext } from "../../../../../_hooks/useSheetMusicLibraryContext";
import { ChordNotePropsTemplate } from "../../../../../_types/ComponentsPropsTypes";
import { getTopDistance } from "../../../../../utils";
import CleanNoteDraw from "../CleanNoteDraw";
import Accidental from "../ornaments/Accidental";
import LedgerLines from "../ornaments/LedgerLines";
import Tie from "../ornaments/Tie";

const ChordNote = ({ note, sheetMusicIndex, measureIndex, noteIndex, chordNoteIndex, stemHeight }: ChordNotePropsTemplate) => {
  const { removeNote, musicManageMode } = useSheetMusicLibraryContext()

  const topDistance = getTopDistance(note);

  function handleRemove(e: React.MouseEvent) {
    if (!(musicManageMode === 'REMOVE')) return
    e.stopPropagation()
    removeNote(sheetMusicIndex, measureIndex, noteIndex, chordNoteIndex)
  }

  return (
    <>
      {note.isTied && <Tie top={`${topDistance + 3}%`} measureIndex={measureIndex} noteIndex={noteIndex} />}

      <div className="note" style={{ top: `${topDistance}%` }} >

        <Accidental accidental={note.accidental} renderHidden={true} />

        <CleanNoteDraw
          note={note}
          className={`${musicManageMode === 'REMOVE' ? 'note_on_remove' : ''}`}
          onClick={handleRemove}
          stemHeight={stemHeight}
        />
      </div>

      <LedgerLines note={note} />
    </>
  )
}

export default ChordNote