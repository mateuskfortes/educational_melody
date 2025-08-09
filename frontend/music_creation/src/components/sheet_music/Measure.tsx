// Measure.tsx
import { FC } from "react";
import { MeasureTemplate } from "../../types/sheetMusicTemplates";
import { NoteBase, RestBase } from "../../classes/notes";
import Note from "./Note";
import Rest from "./Rest";

type Props = {
	measure: MeasureTemplate;
	ref: React.RefObject<HTMLDivElement | null>;
	duration: number;
};

const Measure: FC<Props> = ({ measure, ref, duration }) => (
	<div className="measure" ref={ref}>
		{/* Left vertical bar */}
		<div className="barline_start" />

		{/* Horizontal staff lines */}
		<div className="line_area">
			{[...Array(5)].map((_, i) => (
				<div key={i} className="line" />
			))}
		</div>

		{/* Note rendering area */}
		<div className="notes_area">
			{measure.notes.map((note, index) => {
				if (note instanceof NoteBase) {
					return <Note key={index} note={note} duration={duration} />;
				}

				if (note instanceof RestBase) {
					return <Rest key={index} rest={note} duration={duration} />;
				}
			}
			)}
		</div>

		{/* Right vertical bar */}
		<div className="barline_end" />
	</div>
);

export default Measure;
