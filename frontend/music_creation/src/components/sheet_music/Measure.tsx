import { NoteBase, RestBase } from "../../classes/notes";
import Note from "./Note";
import Rest from "./Rest";
import { MeasurePropsTemplate } from "../../types/ComponentsPropsTypes";

const Measure = ({ measure, ref, sheetMusicIndex, measureIndex, isFirst }: MeasurePropsTemplate) => {
	return (
		<>
			{ isFirst && (
				<div className="clef_area">
					<div className="clef_box treble">
						<img src="img/TrebleClef.svg" alt="" />
					</div>
					{/* Horizontal staff lines */}
					<div className="line_area">
						{[...Array(5)].map((_, i) => (
							<div key={i} className="line" />
						))}
					</div>
				</div>
			)}
			<div className="measure" ref={ref}>
				{/* Left vertical bar */}
				{ !isFirst && <div className="barline_start" /> } 

				{/* Horizontal staff lines */}
				<div className="line_area">
					{[...Array(5)].map((_, i) => (
						<div key={i} className="line" />
					))}
				</div>

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

				{/* Right vertical bar */}
				<div className="barline_end" />
			</div>
		</>
	)
};

export default Measure;
