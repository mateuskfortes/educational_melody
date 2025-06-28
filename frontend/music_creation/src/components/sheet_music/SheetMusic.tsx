import { MusicTemplate } from "../../types/templates";
import Measure from "./Measure"
import useSheetMusic, { Eighth, Half, HalfRest, Quarter, QuarterRest, WholeRest, Whole, EighthRest } from "../../hooks/useSheetMusic";
import { useEffect, useRef, useState } from "react";
import { getExtraDistance } from "../../utils";

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
				new Eighth('C', 5, false),
				new Eighth('D', 5, false),
				new Eighth('E', 5, false),
			],
		},
		{
			notes: [
				new Quarter('F', 5, false),
				new Eighth('F', 5, false),
				new Eighth('F', 5, false),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth('C', 5, false),
				new Eighth('D', 5, false),
				new Eighth('C', 5, false),
			]
		},
		{
			notes: [
				new Quarter('D', 5, false),
				new Eighth('D', 5, false),
				new Eighth('D', 5, false),
			]
		},
		{
			notes: [
				new EighthRest(),
				new Eighth('C', 5, false),
				new Eighth('G', 5, false),
				new Eighth('F', 5, false),
			],
		},
		{
			notes: [
				new Quarter('E', 5, false),
				new Eighth('E', 5, false),
				new Eighth('E', 5, false),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth('C', 5, false),
				new Eighth('D', 5, false),
				new Eighth('E', 5, false),
			],
		},
		{
			notes: [
				new Quarter('F', 5, false),
				new Eighth('F', 5, false),
				new Eighth('F', 5, false),
			],
		},
	],
}

const SheetMusic = () => {
	const [ run, music ] = useSheetMusic(musicDefault)
	const [ measureDuration, setMeasureDuration ] = useState(0)

	const measureRef = useRef<HTMLDivElement>(null);
	const sheetMusicRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let noteType = Quarter
		switch (music.meter.bottom) {
			case 1:
				noteType = Whole
				break;
			case 2:
				noteType = Half
				break;
			case 4:
				noteType = Quarter
				break;
			case 8:
				noteType = Eighth
				break;
		}

		setMeasureDuration(music.meter.top * new noteType('C', 4, false).beatDuration)
	}, [music])

	// Adjusts vertical spacing (margin and row gap) of the music sheet dynamically,
	// based on the notes that extend above or below the standard staff height.
	// This ensures that all measures remain visually aligned regardless of note position.
	useEffect(() => {
		requestAnimationFrame(() => {
		if (measureRef.current && sheetMusicRef.current) {
			let maxExtraDistanceTop = 0;
			let maxExtraDistanceBottom = 0;

			music.measures.forEach(measure => measure.notes.forEach((note) => {
				if (!('note' in note)) return

				const [isTop, extraDistance] = getExtraDistance(note);

				if (isTop && extraDistance > maxExtraDistanceTop) {
					maxExtraDistanceTop = extraDistance;
				}
				else if (!isTop && extraDistance > maxExtraDistanceBottom) {
					maxExtraDistanceBottom = extraDistance;
				}
			}))

			const percentage = measureRef.current.offsetHeight / 100

			sheetMusicRef.current.style.rowGap = `${(maxExtraDistanceBottom + maxExtraDistanceTop) * percentage + 32}px`;
			sheetMusicRef.current.style.marginTop = `${maxExtraDistanceTop * percentage + 32}px`;
			sheetMusicRef.current.style.marginBottom = `${maxExtraDistanceBottom * percentage + 32}px`;
		}})
	}, [music]);

	return (
		<div className="sheet_music" ref={sheetMusicRef} >
			{music.measures.map((measure, i) => (
				<Measure key={i} measure={measure} duration={measureDuration} ref={measureRef} />
			))}
			<button onClick={run}>run</button>
		</div>
	)
}

export default SheetMusic