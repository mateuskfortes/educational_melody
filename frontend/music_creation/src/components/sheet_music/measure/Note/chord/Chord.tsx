import { ChordTemplate } from "../../../../../types/sheetMusicTemplates"
import ChordNote from "./ChordNote"

const Chord = ({ chord, sheetMusicIndex, measureIndex, noteIndex }: { chord: ChordTemplate, sheetMusicIndex: number, measureIndex: number, noteIndex: number }) => {
  return (
    <>
      {chord.notes.map((note, i) =>
        <ChordNote
          key={i}
          note={note}
          sheetMusicIndex={sheetMusicIndex}
          measureIndex={measureIndex}
          noteIndex={noteIndex}
          chordNoteIndex={i}
        />
      )}
    </>
  )
}

export default Chord