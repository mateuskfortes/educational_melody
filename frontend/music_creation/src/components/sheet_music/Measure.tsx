import { NoteBase, RestBase } from "../../classes/notes";
import Note from "./Note";
import Rest from "./Rest";
import { MeasurePropsTemplate } from "../../types/ComponentsPropsTypes";
import SheetMusicLines from "./SheetMusicLines";

const Measure = ({ measure, ref, sheetMusicIndex, measureIndex }: MeasurePropsTemplate) => {
	return (
		<>
			<div className="measure" ref={ref}>
				<SheetMusicLines />

				{/* Note rendering area */}
				<div className="notes_area">
					{measure.notes.map((note, noteIndex) => {
						if (note instanceof NoteBase) {
							return <Note
								key={noteIndex}
								note={note}
								sheetMusicIndex={sheetMusicIndex}
								measureIndex={measureIndex}
								noteIndex={noteIndex}
							/>
						}

						else if (note instanceof RestBase) {
							return <Rest
								key={noteIndex}
								rest={note}
								sheetMusicIndex={sheetMusicIndex}
								measureIndex={measureIndex}
								noteIndex={noteIndex}
							/>;
						}
					}
					)}
				</div>

				<div className="single_barline" />
			</div>
		</>
	)
};

export default Measure;
