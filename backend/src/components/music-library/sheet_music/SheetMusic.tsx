import Measure from "./measure/Measure";
import { useEffect, useRef, useState } from "react";
import { calculateMeasureLineMargin, getMeasureDurationByMeter } from "@/utils/music-library";
import useSheetMusic from "@/hooks/music-library/useSheetMusic";
import { SheetMusicPropsTemplate } from "@/types/music-library/ComponentsPropsTypes";
import SheetMusicContext from "@/hooks/music-library/useSheetMusicContext";
import SheetMusicStart from "./SheetMusicStart";
import EndBarLine from "./EndBarLine";

const SheetMusic = ({ initMusic, setRunAndDispatch, sheetMusicIndex }: SheetMusicPropsTemplate) => {
	const { run, music, dispatch } = useSheetMusic(initMusic);
	const [measureDuration, setMeasureDuration] = useState(0);

	const measureRef = useRef<HTMLDivElement>(null);
	const sheetMusicRef = useRef<HTMLDivElement>(null);
	const [measureWidth, setMeasureWidth] = useState(0);
	const [measureHeight, setMeasureHeight] = useState(0);
	const [measuresPerLine, setMeasuresPerLine] = useState(1);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", calculateLayout);
			return () => window.removeEventListener("resize", calculateLayout);
		}
	}, [])

	useEffect(() => {
		setMeasureDuration(
			getMeasureDurationByMeter(music.meter.top, music.meter.bottom)
		);
		setRunAndDispatch({ music, run, dispatch })
		calculateLayout()
	}, [music]);

	function calculateLayout() {
		if (!measureRef.current || !sheetMusicRef.current) return;

		const newMeasuresPerLine = Math.floor(
			sheetMusicRef.current.offsetWidth / measureRef.current.offsetWidth
		);

		setMeasureHeight(measureRef.current.offsetHeight);
		setMeasureWidth(measureRef.current.offsetWidth);
		setMeasuresPerLine(newMeasuresPerLine === 0 ? 1 : newMeasuresPerLine);
	}

	const sheetMusicLines = Math.ceil(music.measures.length / measuresPerLine)

	return (
		<SheetMusicContext.Provider value={{ measureDuration, music, measureHeight, measureWidth, sheetMusicIndex }}>
			<div className="sheet_music_container">
				<h2 tabIndex={0}>Partitura {sheetMusicIndex + 1}</h2>
				<div className="sheet_music" ref={sheetMusicRef}>
					{Array.from({ length: sheetMusicLines }).map((_, lineIndex) => {
						const measuresRow = music.measures.slice(
							lineIndex * measuresPerLine,
							lineIndex * measuresPerLine + measuresPerLine
						)
						const { marginTop, marginBottom } = calculateMeasureLineMargin(measuresRow, measureHeight)

						const isFirstRow = lineIndex === 0
						const isFinalRow = lineIndex === sheetMusicLines - 1

						return (
							<div
								className="sheet_music_row"
								key={lineIndex}
								style={{
									marginTop: `${marginTop}px`,
									marginBottom: `${marginBottom}px`,
								}}
							>
								{isFirstRow ? <SheetMusicStart top={music.meter.top} bottom={music.meter.bottom} /> : <div className="single_barline" />}
								{measuresRow.map((measure, measureIndex) => (
									<Measure
										key={`${lineIndex}-${measureIndex}`}
										measure={measure}
										sheetMusicIndex={sheetMusicIndex}
										measureIndex={lineIndex * measuresPerLine + measureIndex}
										ref={measureRef}
									/>
								))}
								{isFinalRow && <EndBarLine />}
							</div>
						)
					})}
					{sheetMusicLines === 0 && (
						<div className="sheet_music_row">
							<SheetMusicStart top={music.meter.top} bottom={music.meter.bottom} />
							<EndBarLine />
						</div>
					)}
				</div>
			</div>
		</SheetMusicContext.Provider>
	);


};

export default SheetMusic;
