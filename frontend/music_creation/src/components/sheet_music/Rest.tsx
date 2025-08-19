import { EighthRest, HalfRest, NoteBase, QuarterRest, SixteenthRest, ThirtysecondRest, WholeRest } from "../../classes/notes";
import { RestPropsTemplate } from "../../types/ComponentsPropsTypes";
import { useSheetMusicContext } from "../../hooks/useSheetMusicContext";
import { useSheetMusicLibraryContext } from "../../hooks/useSheetMusicLibraryContext";

const Rest = ({ rest, sheetMusicIndex, measureIndex, noteIndex }: RestPropsTemplate) => {
  const { sheetMusicList, selectedNote } = useSheetMusicLibraryContext()
  const { measureDuration } = useSheetMusicContext()

  const width = `${rest.beatDuration / measureDuration * 100}%`;

  let offset = 0;

  if (rest instanceof WholeRest) offset = -11
  else if (rest instanceof HalfRest) offset = 1
  else if (rest instanceof QuarterRest) offset = 37
  else if (rest instanceof EighthRest) offset = 24
  else if (rest instanceof SixteenthRest) offset = 49
  else if (rest instanceof ThirtysecondRest) offset = 47

  const top = `${50 + offset}%`

  function insertNote() {
    if (selectedNote
      && selectedNote instanceof NoteBase
      && sheetMusicList[sheetMusicIndex]
      && sheetMusicList[sheetMusicIndex].dispatch
    ) {
      sheetMusicList[sheetMusicIndex].dispatch({
        type: "ADD_NOTE",
        payload: { note: selectedNote, measureIndex, noteIndex }
      })
    }
  }
  return (
    <div
      onClick={insertNote}
      className="note_container_on_insert"
      style={{ width }}
    >
      {/* Render the note at the calculated top position */}
      <img
        src={`img/${rest.name}.svg`}
        className={`rest_note ${rest.name}`}
        style={{ top }}
      />
    </div>
  );
}

export default Rest