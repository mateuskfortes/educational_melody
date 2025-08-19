import Measure from "./Measure";
import { useEffect, useState } from "react";
import { getMeasureDurationByMeter } from "../../utils";
import useSheetMusic from "../../hooks/useSheetMusic";
import { useSheetMusicLayout } from "../../hooks/useSheetMusicLayout";
import { SheetMusicPropsTemplate } from "../../types/ComponentsPropsTypes";
import SheetMusicContext from "../../hooks/useSheetMusicContext";

const SheetMusic = ({ initMusic, setRunAndDispatch }: SheetMusicPropsTemplate) => {
	const { run, music, dispatch } = useSheetMusic(initMusic);
	const [measureDuration, setMeasureDuration] = useState(0);

	useEffect(() => {
		setRunAndDispatch(run, dispatch);
	}, []);

	useEffect(() => {
		setMeasureDuration(
			getMeasureDurationByMeter(music.meter.top, music.meter.bottom)
		);
	}, [music]);

	const { measureRef, sheetMusicRef, measureWidth, measuresPerLine, lines } =
		useSheetMusicLayout(music);

	return (
		<SheetMusicContext.Provider value={{ measureDuration, measuresList: music.measures, measureWidth }}>
			<div className="sheet_music_container">
				<div className="sheet_music" ref={sheetMusicRef}>
					{lines.map((line, lineIndex) => (
						<div
							className="sheet_music_row"
							key={lineIndex}
							style={{
								marginTop: `${line.marginTop}px`,
								marginBottom: `${line.marginBottom}px`,
							}}
						>
							{line.measures.map((measure, measureIndex) => (
								<Measure
									key={`${lineIndex}-${measureIndex}`}
									measure={measure}
									measureIndex={lineIndex * measuresPerLine + measureIndex}
									ref={measureRef}
								/>
							))}
						</div>
					))}
					<button onClick={run}>run</button>
				</div>
			</div>
		</SheetMusicContext.Provider>
	);


};

export default SheetMusic;
