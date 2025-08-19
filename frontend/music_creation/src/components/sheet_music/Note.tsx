import { calculateTieWidth, getExtraDistance, getTopDistance } from "../../utils";
import Tie from "./Tie";
import { NotePropsTemplate } from "../../types/ComponentsPropsTypes";
import { useSheetMusicContext } from "../../hooks/useSheetMusicContext";
import { useSheetMusicLibraryContext } from "../../hooks/useSheetMusicLibraryContext";
import { NoteBase } from "../../classes/notes";

const Note = ({ note, sheetMusicIndex, measureIndex, noteIndex }: NotePropsTemplate) => {
  const { sheetMusicList, selectedNote } = useSheetMusicLibraryContext()
  const { measureDuration, measureWidth, measuresList } = useSheetMusicContext()

  if (noteIndex > measuresList[measureIndex].notes.length - 1) return <></> // Prevent render bugs

  const topDistance = getTopDistance(note);

  const top = `${topDistance}%`;
  const width = `${note.beatDuration / measureDuration * 100}%`;

  const [isTop, extraDistance] = getExtraDistance(note);

  const extraLines = Math.floor(extraDistance / 25);

  const tieWidth = calculateTieWidth(measureWidth, measureDuration, measuresList, measureIndex, noteIndex)

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
    <div onClick={insertNote} className="note_container_on_insert" style={{ width }} >
      {note.isTied && <Tie top={`${topDistance + 15}%`} width={tieWidth} />}
      <div className="note" style={{ top }} >
        {note.isSharp && (
          <div className="sharp_box">
            <img src="img/sharp.svg" style={{}} />
          </div>
        )}
        <img
          src={`img/${note.name}Note.svg`}
          className={`${note.name.toLowerCase()}_note`}
        />
        {[...Array(note.dots)].map((_, i) =>
          <img key={i} style={{ marginTop: 'auto' }} src="img/dot.svg" alt="" />
        )}
      </div>

      {/* Render ledger lines, if needed */}
      {isTop ?
        [...Array(extraLines)].map((_, i) => (
          <div
            key={i}
            className="note_line"
            style={{ top: `${-25 - i * 25}%` }}
          />
        ))
        : [...Array(extraLines)].map((_, i) => (
          <div
            key={i}
            className="note_line"
            style={{ top: `${125 + i * 25}%` }}
          />
        ))}
    </div>
  );
}

export default Note;