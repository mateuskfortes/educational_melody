import SheetMusic from "./components/sheet_music/SheetMusic";
import './assets/main.scss';
import ManageNoteForm from "./components/ManageNoteForm";
import { useState } from "react";
import { MusicManageModeType, MusicTemplate, NotesTemplate, SheetMusicItem } from "./types/sheetMusicTemplates";
import { Chord, Eighth, EighthRest, NoteBase, Quarter } from "./classes/notes";
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
				new Chord({
					noteConstructor: Eighth,
					notes: [{ cleanNote: 'C', octave: 5 }, { cleanNote: 'E', octave: 5 }, { cleanNote: 'G', octave: 5 }]
				}),
				new Chord({
					noteConstructor: Eighth,
					notes: [{ cleanNote: 'D', octave: 5 }, { cleanNote: 'F', octave: 5 }, { cleanNote: 'A', octave: 5 }]
				}),
				new Chord({
					noteConstructor: Eighth,
					notes: [{ cleanNote: 'E', octave: 5 }, { cleanNote: 'G', octave: 5 }, { cleanNote: 'B', octave: 5 }]
				}),
			],
		},
		{
			notes: [
				new Quarter({ cleanNote: 'F', octave: 5 }),
				new Eighth({ cleanNote: 'F', octave: 5 }),
				new Eighth({ cleanNote: 'F', octave: 5 }),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth({ cleanNote: 'C', octave: 5 }),
				new Eighth({ cleanNote: 'D', octave: 5 }),
				new Eighth({ cleanNote: 'C', octave: 5 }),
			]
		},
		{
			notes: [
				new Quarter({ cleanNote: 'D', octave: 5 }),
				new Eighth({ cleanNote: 'D', octave: 5 }),
				new Eighth({ cleanNote: 'D', octave: 5 }),
			]
		},
		{
			notes: [
				new EighthRest(),
				new Eighth({ cleanNote: 'C', octave: 5 }),
				new Eighth({ cleanNote: 'G', octave: 5 }),
				new Eighth({ cleanNote: 'F', octave: 5 }),
			],
		},
		{
			notes: [
				new Quarter({ cleanNote: 'E', octave: 5 }),
				new Eighth({ cleanNote: 'E', octave: 5 }),
				new Eighth({ cleanNote: 'E', octave: 5 }),
			],
		},
		{
			notes: [
				new EighthRest(),
				new Eighth({ cleanNote: 'C', octave: 5 }),
				new Eighth({ cleanNote: 'D', octave: 5 }),
				new Eighth({ cleanNote: 'E', octave: 5 }),
			],
		},
		{
			notes: [
				new Quarter({ cleanNote: 'F', octave: 5 }),
				new Eighth({ cleanNote: 'F', octave: 5 }),
				new Eighth({ cleanNote: 'F', octave: 5 }),
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
							notes: []
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

	function insertNote(sheetMusicIndex: number, measureIndex: number, noteIndex: number, addToChord: boolean = false) {
		if (selectedNote
			&& sheetMusicList[sheetMusicIndex]
			&& sheetMusicList[sheetMusicIndex].dispatch
		) {
			if (addToChord && selectedNote instanceof NoteBase) {
				sheetMusicList[sheetMusicIndex].dispatch({
					type: "ADD_NOTE",
					payload: { note: selectedNote, measureIndex, noteIndex, addToChord }
				})
			}
			else sheetMusicList[sheetMusicIndex].dispatch({
				type: "ADD_NOTE",
				payload: { note: selectedNote, measureIndex, noteIndex }
			})
		}
	}

	function removeNote(sheetMusicIndex: number, measureIndex: number, noteIndex: number, chordNoteIndex?: number) {
		if (sheetMusicList[sheetMusicIndex] && sheetMusicList[sheetMusicIndex].dispatch) {
			sheetMusicList[sheetMusicIndex].dispatch({
				type: "REMOVE_NOTE",
				payload: { measureIndex, noteIndex, chordNoteIndex }
			})
		}
	}
	return (
		<SheetMusicLibraryContext.Provider
			value={{
				addSheetMusic,
				runAll,
				selectedNote,
				selectNote: setSelectedNote,
				musicManageMode,
				setMusicManageMode,
				insertNote,
				removeNote
			}}>
			<h1>Criador de Partituras</h1>

			<section className="tutorial">
				<div>
					<h3>Instruções de Navegação:</h3>
					<ul>
						<li>
							<span className="tecla">TAB</span>
							<span>Próxima posição</span>
						</li>
						<li>
							<span className="tecla">SHIFT • TAB</span>
							<span>Posição anterior</span>
						</li>
						<li>
							<span className="tecla">ENTER/ESPAÇO</span>
							<span>Editar posição</span>
						</li>
					</ul>
				</div>
				<img src="img/mic.png" alt="" />
				<img src="img/vinil.png" alt="" />
			</section>
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
