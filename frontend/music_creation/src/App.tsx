import SheetMusic from "./components/sheet_music/SheetMusic";
import './assets/main.scss';
import InsertNoteForm from "./components/InsertNoteForm";
import { useState } from "react";
import { MusicTemplate, SheetMusicItem } from "./types/sheetMusicTemplates";
import { Eighth, EighthRest, Quarter, Whole } from "./classes/notes";
import SheetMusicLibraryContext from "./hooks/useSheetMusicLibrary";

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

function App() {
	const [sheetMusicList, setSheetMusicList] = useState<SheetMusicItem[]>([{ music: musicDefault }])

	function addSheetMusic() {
		setSheetMusicList(prev => [
			...prev,
			{
				music: {
					meter: { top: 4, bottom: 4 },
					bpm: 120,
					measures: [
						{
							notes: [new Whole({ note: 'C', octave: 4 })]
						}
					]
				}
			}
		])
	}

	function runAll() {
		sheetMusicList.map(sheetMusic => {
			sheetMusic.run?.(); console.log('oi')
		})
	}

	return (
		<SheetMusicLibraryContext.Provider value={{ sheetMusicList, addSheetMusic, runAll }}>
			{sheetMusicList.map((sheetMusic: SheetMusicItem, index: number) =>
				<SheetMusic
					key={index}
					initMusic={sheetMusic.music}
					setRunAndDispatch={({ music, run, dispatch }) => {
						setSheetMusicList(prev => {
							const newList = [...prev]
							if (music) newList[index].music = music
							if (run) newList[index].run = run
							if (dispatch) newList[index].dispatch = dispatch
							return newList
						})
					}}
				/>)}
			<InsertNoteForm />
		</SheetMusicLibraryContext.Provider>
	)
}

export default App
