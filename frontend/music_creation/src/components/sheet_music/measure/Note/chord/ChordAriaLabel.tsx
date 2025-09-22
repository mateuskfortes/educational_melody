import { NoteTemplate } from "../../../../../types/sheetMusicTemplates"
import { getTopDistance } from "../../../../../utils";
import CleanNoteDraw from "../CleanNoteDraw"

const ChordAriaLabel = ({ note, ariaLabel, stemHeight }: { stemHeight: number, ariaLabel: string, note: NoteTemplate }) => {
  const topDistance = getTopDistance(note);

  return (
    <div className="note" aria-label={ariaLabel} style={{ top: topDistance + '%' }} tabIndex={0}>
      <CleanNoteDraw note={note} className="chord_aria_label" stemHeight={stemHeight} />
    </div>
  )
}

export default ChordAriaLabel