import { MeasurePropsTemplate } from "../../types/ComponentsPropsTypes";
import SheetMusicLines from "./SheetMusicLines";
import NoteContainer from "./NoteContainer";

const Measure = ({ measure, ref, sheetMusicIndex, measureIndex }: MeasurePropsTemplate) => {
	return (
		<>
			<div className="measure" ref={ref}>
				<SheetMusicLines />

				{/* Note rendering area */}
				<div className="notes_area">
					{measure.notes.map((note, noteIndex) =>
						<NoteContainer
							note={note}
							sheetMusicIndex={sheetMusicIndex}
							measureIndex={measureIndex}
							noteIndex={noteIndex}
						/>
					)}
				</div>

				<div className="single_barline" />
			</div>
		</>
	)
};

export default Measure;
