import { useSheetMusicContext } from "../../../../../hooks/useSheetMusicContext"
import { ChordTemplate } from "../../../../../types/sheetMusicTemplates"
import { noteToHeightIndex } from "../../../../../utils"
import ChordAriaLabel from "./ChordAriaLabel"
import ChordNote from "./ChordNote"

const Chord = ({ chord, sheetMusicIndex, measureIndex, noteIndex }: { chord: ChordTemplate, sheetMusicIndex: number, measureIndex: number, noteIndex: number }) => {
  const { measureHeight } = useSheetMusicContext()

  const noteHeights = chord.notes.map(cn => noteToHeightIndex(cn))
  const chordStemHeight = ((Math.max(...noteHeights) - Math.min(...noteHeights)) * 0.125 + .8) * measureHeight

  const stemHeight = Math.max(chordStemHeight, measureHeight)

  const minNote = chord.notes[noteHeights.indexOf(Math.min(...noteHeights))]
  return (
    <>
      <ChordAriaLabel note={minNote} stemHeight={stemHeight} ariaLabel={chord.getAriaLabel()} />
      {
        chord.notes.map((note, i) =>
          <ChordNote
            key={i}
            note={note}
            sheetMusicIndex={sheetMusicIndex}
            measureIndex={measureIndex}
            noteIndex={noteIndex}
            chordNoteIndex={i}
            stemHeight={note.equal(minNote) ? stemHeight : 0}
          />
        )
      }
    </>
  )
}

export default Chord