import { ChordTemplate } from "../../../types/sheetMusicTemplates"
import SingleNote from "./SingleNote"

const Chord = ({ chord, sheetMusicIndex, measureIndex, noteIndex }: { chord: ChordTemplate, sheetMusicIndex: number, measureIndex: number, noteIndex: number }) => {
  return (
    <>
      {chord.notes.map((note, i) =>
        <SingleNote key={i} note={note} sheetMusicIndex={sheetMusicIndex} measureIndex={measureIndex} noteIndex={noteIndex} />
      )}
    </>
  )
}

export default Chord