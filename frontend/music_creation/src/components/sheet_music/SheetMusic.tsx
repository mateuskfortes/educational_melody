import { MeasureTemplate, MusicTemplate } from "../../types/templates";
import Measure from "./Measure"
import { Eighth, Quarter, EighthRest, NoteBase } from "../../components/sheet_music/notes";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
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
				new Eighth('C', 5),
				new Eighth('D', 5),
				new Eighth('E', 5),
			],
		},
		{
			notes: [
				new Quarter('F', 5),
				new Eighth('F', 5),
				new Eighth('F', 5),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth('C', 5),
				new Eighth('D', 5),
				new Eighth('C', 5),
			]
		},
		{
			notes: [
				new Quarter('D', 5),
				new Eighth('D', 5),
				new Eighth('D', 5),
			]
		},
		{
			notes: [
				new EighthRest(),
				new Eighth('C', 5),
				new Eighth('G', 5),
				new Eighth('F', 5),
			],
		},
		{
			notes: [
				new Quarter('E', 5),
				new Eighth('E', 5),
				new Eighth('E', 5),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth('C', 5),
				new Eighth('D', 5),
				new Eighth('E', 5),
			],
		},
		{
			notes: [
				new Quarter('F', 5),
				new Eighth('F', 5),
				new Eighth('F', 5),
			],
		},
	],
}

const SheetMusic = () => {
	const { run, music } = useSheetMusic(musicDefault)
	const [measureDuration, setMeasureDuration] = useState(0)

	const measureRef = useRef<HTMLDivElement>(null);
	const sheetMusicRef = useRef<HTMLDivElement>(null);
	const sheetMusicContainerRef = useRef<HTMLDivElement>(null);
	const [ measureHeight, setMeasureHeight ] = useState(0);
	const [ measuresList, setMeasuresList ] = useState<(MeasureTemplate[])[]>();

	useEffect(() => {
		setMeasureDuration(getMeasureDurationByMeter(music.meter.top, music.meter.bottom))
	}, [music])

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
						ref={measureRef} />
				}
				<button onClick={run}>run</button>
			</div>
		</div>

	)
}

export default SheetMusic