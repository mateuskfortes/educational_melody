import SheetMusic from "./components/sheet_music/SheetMusic";
import './assets/main.scss';
import ManageNoteForm from "./components/ManageNoteForm";
import { useState } from "react";
import { MusicManageModeType, MusicTemplate, NotesTemplate, SheetMusicItem } from "./types/sheetMusicTemplates";
import { Eighth, EighthRest, Quarter, Whole } from "./classes/notes";
import SheetMusicLibraryContext from "./hooks/useSheetMusicLibraryContext";

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
	const [selectedNote, setSelectedNote] = useState<NotesTemplate | undefined>()
	const [musicManageMode, setMusicManageMode] = useState<MusicManageModeType>("ADD")

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
			sheetMusic.run?.();
		})
	}

	function insertNote(sheetMusicIndex: number, measureIndex: number, noteIndex: number) {
		if (selectedNote
			&& sheetMusicList[sheetMusicIndex]
			&& sheetMusicList[sheetMusicIndex].dispatch
		) {
			sheetMusicList[sheetMusicIndex].dispatch({
				type: "ADD_NOTE",
				payload: { note: selectedNote, measureIndex, noteIndex }
			})
		}
	}

	function removeNote(sheetMusicIndex: number, measureIndex: number, noteIndex: number) {
		if (sheetMusicList[sheetMusicIndex] && sheetMusicList[sheetMusicIndex].dispatch) {
			sheetMusicList[sheetMusicIndex].dispatch({
				type: "REMOVE_NOTE",
				payload: { measureIndex, noteIndex }
			})
		}
	}
	return (
		<SheetMusicLibraryContext.Provider
			value={{
				addSheetMusic,
				runAll,
				selectNote: setSelectedNote,
				musicManageMode,
				setMusicManageMode,
				insertNote,
				removeNote
			}}>
			{sheetMusicList.map((sheetMusic: SheetMusicItem, index: number) =>
				<SheetMusic
					key={index}
					initMusic={sheetMusic.music}
					sheetMusicIndex={index}
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
			<ManageNoteForm />
		</SheetMusicLibraryContext.Provider>
	)
}

export default App
