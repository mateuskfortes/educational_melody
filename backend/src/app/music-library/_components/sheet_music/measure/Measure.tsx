import { MeasurePropsTemplate } from "../../../_types/ComponentsPropsTypes";
//import { getBeamPositionList } from "../../../utils";
import SheetMusicLines from "../SheetMusicLines";
import NoteContainer from "./Note/MusicNoteContainer";

const Measure = ({
  measure,
  ref,
  sheetMusicIndex,
  measureIndex,
}: MeasurePropsTemplate) => {
  //const beamPositionList = getBeamPositionList(measure.notes)

  return (
    <>
      <div className="measure" ref={ref}>
        <SheetMusicLines />

        {/* Note rendering area */}
        <div className="notes_area">
          {measure.notes.map((note, noteIndex) => {
            //const beamPositionRaw = beamPositionList.find(p => noteIndex >= p.start && noteIndex <= p.end)

            return (
              <NoteContainer
                key={noteIndex}
                note={note}
                sheetMusicIndex={sheetMusicIndex}
                measureIndex={measureIndex}
                noteIndex={noteIndex}
              />
            );
          })}
        </div>

        <div className="single_barline" />
      </div>
    </>
  );
};

export default Measure;
