import { MeasureTemplate, MusicAction, MusicTemplate } from "../../types/sheetMusicTemplates";
import Measure from "./Measure"
import { Eighth, Quarter, EighthRest, NoteBase } from "../../classes/notes";
import { ActionDispatch, useEffect, useLayoutEffect, useRef, useState } from "react";
import { getExtraDistance, getMeasureDurationByMeter } from "../../utils";
import useSheetMusic from "../../hooks/useSheetMusic";

const musicDefault: MusicTemplate = {
	meter: {
		top: 2,
		bottom: 4,
	},
	bpm: 120,
	measures: [
		{
			notes: [
				new EighthRest(),
				new Eighth({ note: 'C', octave: 5, isSharp: false, isTied: false, dots: 0 }),
				new Eighth({ note: 'D', octave: 5 }),
				new Eighth({ note: 'E', octave: 5 }),
			],
		},
		{
			notes: [
				new Quarter({ note: 'F', octave: 5 }),
				new Eighth({ note: 'F', octave: 5 }),
				new Eighth({ note: 'F', octave: 5 }),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth({ note: 'C', octave: 5 }),
				new Eighth({ note: 'D', octave: 5 }),
				new Eighth({ note: 'C', octave: 5 }),
			]
		},
		{
			notes: [
				new Quarter({ note: 'D', octave: 5 }),
				new Eighth({ note: 'D', octave: 5 }),
				new Eighth({ note: 'D', octave: 5 }),
			]
		},
		{
			notes: [
				new EighthRest(),
				new Eighth({ note: 'C', octave: 5 }),
				new Eighth({ note: 'G', octave: 5 }),
				new Eighth({ note: 'F', octave: 5 }),
			],
		},
		{
			notes: [
				new Quarter({ note: 'E', octave: 5 }),
				new Eighth({ note: 'E', octave: 5 }),
				new Eighth({ note: 'E', octave: 5 }),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth({ note: 'C', octave: 5 }),
				new Eighth({ note: 'D', octave: 5 }),
				new Eighth({ note: 'E', octave: 5 }),
			],
		},
		{
			notes: [
				new Quarter({ note: 'F', octave: 5 }),
				new Eighth({ note: 'F', octave: 5 }),
				new Eighth({ note: 'F', octave: 5 }),
			],
		},
	],
}

const SheetMusic = ({ setDispatch }: { setDispatch: (ds: ActionDispatch<[action: MusicAction]>) => void }) => {
	const { run, music, dispatch } = useSheetMusic(musicDefault)



	const [measureDuration, setMeasureDuration] = useState(0)

	const measureRef = useRef<HTMLDivElement>(null);
	const sheetMusicRef = useRef<HTMLDivElement>(null);
	const sheetMusicContainerRef = useRef<HTMLDivElement>(null);
	const [measureHeight, setMeasureHeight] = useState(0);
	const [measureWidth, setMeasureWidth] = useState(0)
	const [measuresPerLine, setMeasuresPerLine] = useState(0)
	const [measuresList, setMeasuresList] = useState<(MeasureTemplate[])[]>();

	useEffect(() => {
		setMeasureDuration(getMeasureDurationByMeter(music.meter.top, music.meter.bottom))
	}, [music])

	useEffect(() => setDispatch(() => dispatch), [])

	// Calculates the extra distance a note extends above or below the standard staff height.
	const getMeasureStyle = (measureList: MeasureTemplate[]) => {
		let maxExtraDistanceTop = 0;
		let maxExtraDistanceBottom = 0;

		measureList.forEach((measure) => measure.notes.forEach((note) => {
			if (!(note instanceof NoteBase)) return

			const [isTop, extraDistance] = getExtraDistance(note);

			if (isTop && extraDistance > maxExtraDistanceTop) {
				maxExtraDistanceTop = extraDistance;
			}
			else if (!isTop && extraDistance > maxExtraDistanceBottom) {
				maxExtraDistanceBottom = extraDistance;
			}
		}))

		const marginTop = maxExtraDistanceTop * measureHeight / 100 + measureHeight * .3
		const marginBottom = maxExtraDistanceBottom * measureHeight / 100 - measureHeight * .3;

		return {
			marginTop: `${marginTop}px`,
			marginBottom: `${marginBottom < 0 ? 0 : marginBottom}px`,
		}
	}


	useLayoutEffect(() => {
		if (measureRef.current && sheetMusicRef.current) {
			// Number of measures rendered in one row
			const measurePerLine = Math.floor(sheetMusicRef.current.offsetWidth / measureRef.current.offsetWidth)
			const lines: MeasureTemplate[][] = [];

			for (let i = 0; i < music.measures.length; i += measurePerLine) {
				lines.push(music.measures.slice(i, i + measurePerLine));
			}
			setMeasuresList(lines);
			setMeasureHeight(measureRef.current.offsetHeight)
			setMeasureWidth(measureRef.current.offsetWidth)
			setMeasuresPerLine(measurePerLine);
		}
	}, [music, measureRef.current, sheetMusicRef.current]);

	return (
		<div className="sheet_music_container" ref={sheetMusicContainerRef}>
			<div className="sheet_music" ref={sheetMusicRef}>
				{measuresList ?
					measuresList.map((line, lineIndex) => {
						const measureStyle = getMeasureStyle(line)
						return (
							<div className="sheet_music_row" style={measureStyle} key={lineIndex}>
								{line.map((measure, measureIndex) => (
									<Measure
										key={`${lineIndex}-${measureIndex}`}
										measure={measure}
										duration={measureDuration}
										width={measureWidth}
										measuresList={music.measures}
										measureIndex={lineIndex * measuresPerLine + measureIndex}
										ref={measureRef}
									/>
								))}
							</div>
						)
					})
					:
					<Measure
						measure={music.measures[0]}
						duration={measureDuration}
						width={measureWidth}
						measuresList={music.measures}
						measureIndex={0}
						ref={measureRef} />
				}
				<button onClick={run}>run</button>
			</div>
		</div>

	)
}

export default SheetMusic