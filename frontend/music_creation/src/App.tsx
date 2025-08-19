import SheetMusic from "./components/sheet_music/SheetMusic";
import './assets/main.scss';
import InsertNoteForm from "./components/InsertNoteForm";
import { ActionDispatch, createContext, useState } from "react";
import { MusicAction, MusicContextType, MusicTemplate, SheetMusicItem } from "./types/sheetMusicTemplates";
import { Eighth, EighthRest, Quarter, Whole } from "./classes/notes";

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

export const MusicContext = createContext<MusicContextType>({
	sheetMusicList: [] as SheetMusicItem[],
	addSheetMusic: () => undefined
})

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

	return (
		<MusicContext.Provider value={{ sheetMusicList, addSheetMusic }}>
			{sheetMusicList.map((sheetMusic: SheetMusicItem, index: number) =>
				<SheetMusic
					key={index}
					initMusic={sheetMusic.music}
					setRunAndDispatch={(run: () => void, dispatch: ActionDispatch<[action: MusicAction]>) => {
						setSheetMusicList(prev => {
							const newList = [...prev]
							newList[index] = {
								...newList[index],
								run,
								dispatch
							}
							return newList
						})
					}}
				/>)}
			<InsertNoteForm />
		</MusicContext.Provider>
	)
}

export default App
