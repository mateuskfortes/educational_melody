import { FC } from "react";
import { calculateTieWidth, getExtraDistance, getTopDistance } from "../../utils";
import { MeasureTemplate, NoteTemplate } from "../../types/sheetMusicTemplates";
import Tie from "./Tie";

type Props = {
  note: NoteTemplate;
  duration: number;
  measureWidth: number
  measuresList: MeasureTemplate[]
  measureIndex: number;
  noteIndex: number
}

const Note: FC<Props> = ({ note, duration, measureWidth, measuresList, measureIndex, noteIndex }) => {
  const topDistance = getTopDistance(note);

  const top = `${topDistance}%`;
  const width = `${note.beatDuration / duration * 100}%`;

  const [isTop, extraDistance] = getExtraDistance(note);

  const extraLines = Math.floor(extraDistance / 25);

  const tieWidth = calculateTieWidth(measureWidth, duration, measuresList, measureIndex, noteIndex)
  return (
    <div className="note_container" style={{ width }} >
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