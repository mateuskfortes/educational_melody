import { Chord as ChordClass, NoteBase, RestBase } from "../../../classes/notes";
import { useSheetMusicContext } from "../../../hooks/useSheetMusicContext";
import { useSheetMusicLibraryContext } from "../../../hooks/useSheetMusicLibraryContext";
import { NoteContainerPropsTemplate } from "../../../types/ComponentsPropsTypes";
import Chord from "./Chord";
import Rest from "./Rest";
import SingleNote from "./SingleNote";

const NoteContainer = ({ note, sheetMusicIndex, measureIndex, noteIndex }: NoteContainerPropsTemplate) => {
  const { musicManageMode, insertNote, removeNote } = useSheetMusicLibraryContext()
  const { measureDuration } = useSheetMusicContext()

  const width = `${note.beatDuration / measureDuration * 100}%`;

  const containerClass = musicManageMode === "ADD" ? "note_container_on_insert" : "note_container_on_remove"

  function handleClick() {
    if (musicManageMode === 'ADD') insertNote(sheetMusicIndex, measureIndex, noteIndex)
    else if (musicManageMode === 'REMOVE') removeNote(sheetMusicIndex, measureIndex, noteIndex)
  }

  return (
    <div onClick={handleClick} className={containerClass} style={{ width }} >
      {note instanceof NoteBase && <SingleNote note={note} sheetMusicIndex={sheetMusicIndex} measureIndex={measureIndex} noteIndex={noteIndex} />}
      {note instanceof RestBase && <Rest rest={note} />}
      {note instanceof ChordClass && <Chord chord={note} sheetMusicIndex={sheetMusicIndex} measureIndex={measureIndex} noteIndex={noteIndex} />}
    </div>
  )
}

export default NoteContainer