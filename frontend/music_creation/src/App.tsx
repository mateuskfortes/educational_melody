import SheetMusic from "./components/sheet_music/SheetMusic";
import './assets/main.scss';
import InsertNoteForm from "./components/InsertNoteForm";
import { ActionDispatch, useState } from "react";
import { MusicAction } from "./types/sheetMusicTemplates";

function App() {
	const [dispatch, setDispatch] = useState<ActionDispatch<[action: MusicAction]> | undefined>()

	return (
		<>
			<SheetMusic setDispatch={setDispatch} />
			{dispatch && <InsertNoteForm dispatch={dispatch} />}
		</>
	)
}

export default App
