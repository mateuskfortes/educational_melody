// Measure.tsx
import { FC } from "react";
import { MeasureTemplate } from "../../types/templates";
import { getExtraDistance, getTopDistance } from "../../utils";
import { Eighth, Half, HalfRest, Quarter, Sixteenth, Whole, WholeRest } from "../../components/sheet_music/notes";

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
				if ("note" in note) {
					const topDistance = getTopDistance(note);

					let offset = 0;

					// Calculate the top position for the note based on its type
					if (note instanceof Whole) offset = 4
					else if (note instanceof Half) offset = -35
					else if (note instanceof Quarter) offset = -38
					else if (note instanceof Eighth) offset = -38
					else if (note instanceof Sixteenth) offset = -38

					const top = `${topDistance + offset}%`;
					const width = `${note.beatDuration / duration * 100}%`;

					const [isTop, extraDistance] = getExtraDistance(note);

					const extraLines = Math.floor(extraDistance / 25);

					return (
						<div
							key={index}
							className="note_container"
							style={{ width }}
						>
							{/* Render the note at the calculated top position */}
							<img
								src={`public/static/img/${note.constructor.name}Note.svg`}
								className={`${note.constructor.name.toLowerCase()}_note`}
								style={{ top }}
							/>

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

				if ('beatDuration' in note) {
					const width = `${note.beatDuration / duration * 100}%`;

					let offset = 0;

					if (note instanceof WholeRest) offset = -20
					else if (note instanceof HalfRest) offset = -4

					const top = `${50 + offset}%`

					return (
						<div
							key={index}
							className="note_container"
							style={{ width }}
						>
							{/* Render the note at the calculated top position */}
							<img
								src={`public/static/img/${note.constructor.name}.svg`}
								className="note"
								style={{ top }}
							/>
						</div>
					);
				}
			}
			)}
		</div>

		{/* Right vertical bar */}
		<div className="barline_end" />
	</div>
);

export default Measure;
