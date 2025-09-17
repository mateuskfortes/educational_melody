import { useSheetMusicLibraryContext } from "../../../../../hooks/useSheetMusicLibraryContext";
import { ChordNotePropsTemplate } from "../../../../../types/ComponentsPropsTypes";
import { getTopDistance } from "../../../../../utils";
import Accidental from "../ornaments/Accidental";
import LedgerLines from "../ornaments/LedgerLines";
import Tie from "../ornaments/Tie";

const ChordNote = ({ note, sheetMusicIndex, measureIndex, noteIndex, chordNoteIndex }: ChordNotePropsTemplate) => {
  const { insertNote, removeNote, musicManageMode } = useSheetMusicLibraryContext()

  const topDistance = getTopDistance(note);

  function handleInsert(e: React.MouseEvent) {
    e.stopPropagation() // prevents the click from bubbling up to the parent
    console.log('oi', sheetMusicIndex, measureIndex, noteIndex,)
    insertNote(sheetMusicIndex, measureIndex, noteIndex, true)
  }

  function handleRemove(e: React.MouseEvent) {
    if (!(musicManageMode === 'REMOVE')) return
    e.stopPropagation()
    removeNote(sheetMusicIndex, measureIndex, noteIndex, chordNoteIndex)
  }

  return (
    <>
      {musicManageMode === 'ADD' &&
        <div className="add_to_chord_box" onClick={handleInsert} />
      }

      {note.isTied && <Tie top={`${topDistance + 3}%`} measureIndex={measureIndex} noteIndex={noteIndex} />}

      <div className="note" style={{ top: `${topDistance}%` }} >

        <Accidental accidental={note.accidental} />

        <img
          src={`img/${note.name}Note.svg`}
          className={`${note.name.toLowerCase()}_note ${musicManageMode === 'REMOVE' ? 'note_on_remove' : ''}`}
          onClick={handleRemove}
        />
      </div>

      <LedgerLines note={note} />
    </>
  )
}

export default ChordNote