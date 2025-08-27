import Measure from "./Measure";
import { useEffect, useRef, useState } from "react";
import { calculateMeasureLineMargin, getMeasureDurationByMeter } from "../../utils";
import useSheetMusic from "../../hooks/useSheetMusic";
import { SheetMusicPropsTemplate } from "../../types/ComponentsPropsTypes";
import SheetMusicContext from "../../hooks/useSheetMusicContext";

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

		const measurePerLine = Math.floor(
			sheetMusicRef.current.offsetWidth / measureRef.current.offsetWidth
		);

		setMeasureHeight(measureRef.current.offsetHeight);
		setMeasureWidth(measureRef.current.offsetWidth);
		setMeasuresPerLine(measurePerLine);
	}

	const sheetMusicLines = Math.ceil(music.measures.length / measuresPerLine)

	return (
		<SheetMusicContext.Provider value={{ measureDuration, measuresList: music.measures, measureWidth }}>
			<div className="sheet_music_container">
				<div className="sheet_music" ref={sheetMusicRef}>
					{Array.from({ length: sheetMusicLines }).map((_, lineIndex) => {
						const measuresRow = music.measures.slice(
							lineIndex * measuresPerLine,
							lineIndex * measuresPerLine + measuresPerLine
						)
						const { marginTop, marginBottom } = calculateMeasureLineMargin(measuresRow, measureHeight)

						return (
							<div
								className="sheet_music_row"
								key={lineIndex}
								style={{
									marginTop: `${marginTop}px`,
									marginBottom: `${marginBottom}px`,
								}}
							>								
								{measuresRow.map((measure, measureIndex) => (
									<Measure
										key={`${lineIndex}-${measureIndex}`}
										measure={measure}
										sheetMusicIndex={sheetMusicIndex}
										measureIndex={lineIndex * measuresPerLine + measureIndex}
										ref={measureRef}
										isFirst={lineIndex === 0 && measureIndex === 0}
									/>
								))}
							</div>
						)
					})}
					<button onClick={run}>run</button>
				</div>
			</div>
		</SheetMusicContext.Provider>
	);


};

export default SheetMusic;
