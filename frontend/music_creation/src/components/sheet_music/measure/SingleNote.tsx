import { calculateTieWidth, getExtraDistance, getTopDistance } from "../../../utils";
import Tie from "./Tie";
import { SingleNotePropsTemplate } from "../../../types/ComponentsPropsTypes";
import { useSheetMusicContext } from "../../../hooks/useSheetMusicContext";
import { useSheetMusicLibraryContext } from "../../../hooks/useSheetMusicLibraryContext";
import { NoteBase } from "../../../classes/notes";

const SingleNote = ({ note, sheetMusicIndex, measureIndex, noteIndex }: SingleNotePropsTemplate) => {
  const { insertNote, selectedNote } = useSheetMusicLibraryContext()
  const { measureDuration, measureWidth, music } = useSheetMusicContext()

  const topDistance = getTopDistance(note);

  const top = `${topDistance}%`;

  const [isTop, extraDistance] = getExtraDistance(note);

  const extraLines = Math.ceil(extraDistance / 25);

  const tieWidth = calculateTieWidth(measureWidth, measureDuration, music.measures, measureIndex, noteIndex)

  function handleClick(e: React.MouseEvent) {
    e.stopPropagation() // prevents the click from bubbling up to the parent
    insertNote(sheetMusicIndex, measureIndex, noteIndex, true)
  }

  return (
    <>
      {selectedNote instanceof NoteBase && <div className="add_to_chord_box" onClick={handleClick} />}
      {note.isTied && <Tie top={`${topDistance + 3}%`} width={tieWidth} />}
      <div className="note" style={{ top }} >
        {note.accidental === 'sharp' && (
          <div className="sharp_box">
            <img src="img/sharp.svg" style={{}} />
          </div>
        )}
        {note.accidental === 'flat' && (
          <div className="flat_box">
            <img src="img/flat.svg" />
          </div>
        )}
        {note.accidental === 'natural' && (
          <div className="natural_box">
            <img src="img/natural.svg" />
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
    </>
  );
}

export default SingleNote;