import { NoteTemplate } from "../../../../../types/sheetMusicTemplates";
import { getExtraDistance } from "../../../../../utils";

interface LedgerLinesProps {
  note: NoteTemplate
}

const LedgerLines: React.FC<LedgerLinesProps> = ({
  note,
}) => {
  const [position, extraDistance] = getExtraDistance(note);
  const extraLines = Math.ceil(extraDistance / 25);

  return (
    <>
      {Array.from({ length: extraLines }).map((_, index) => (
        <div
          key={index}
          className="ledger_line"
          style={{ top: `${25 * (position ? -(1 + index) : 5 + index)}%` }}
        />
      ))}
    </>
  );
};

export default LedgerLines;
