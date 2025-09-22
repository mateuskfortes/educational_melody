import { Chord as ChordClass, NoteBase, RestBase } from "../../../../classes/notes";
import { useSheetMusicContext } from "../../../../hooks/useSheetMusicContext";
import { useSheetMusicLibraryContext } from "../../../../hooks/useSheetMusicLibraryContext";
import { MusicNoteContainerPropsTemplate } from "../../../../types/ComponentsPropsTypes";
import Chord from "./chord/Chord";
import Rest from "./Rest";
import SingleNote from "./SingleNote";

const MusicNoteContainer = ({ note, sheetMusicIndex, measureIndex, noteIndex }: MusicNoteContainerPropsTemplate) => {
  const { musicManageMode, insertNote, removeNote } = useSheetMusicLibraryContext()
  const { measureDuration } = useSheetMusicContext()

  const width = `${note.beatDuration / measureDuration * 100}%`;

  const containerClass = musicManageMode === "ADD" ? "on_insert" : "on_remove"

  function handleClick() {
    if (musicManageMode === 'ADD') insertNote(sheetMusicIndex, measureIndex, noteIndex)
    else if (musicManageMode === 'REMOVE') removeNote(sheetMusicIndex, measureIndex, noteIndex)
  }

  return (
    <div
      onClick={handleClick}
      className={"note_container " + containerClass}
      style={{ width }}
    >
      {note instanceof NoteBase && <SingleNote note={note} sheetMusicIndex={sheetMusicIndex} measureIndex={measureIndex} noteIndex={noteIndex} />}
      {note instanceof RestBase && <Rest rest={note} measureIndex={measureIndex} noteIndex={noteIndex} />}
      {note instanceof ChordClass && <Chord chord={note} sheetMusicIndex={sheetMusicIndex} measureIndex={measureIndex} noteIndex={noteIndex} />}
    </div>
  )
}

export default MusicNoteContainer