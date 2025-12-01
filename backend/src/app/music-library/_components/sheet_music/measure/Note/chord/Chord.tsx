import { useSheetMusicContext } from "../../../../../_hooks/useSheetMusicContext"
import { useSheetMusicLibraryContext } from "../../../../../_hooks/useSheetMusicLibraryContext"
import { ChordTemplate } from "../../../../../_types/sheetMusicTemplates"
import { noteToHeightIndex } from "../../../../../utils"
import ChordAriaLabel from "./ChordAriaLabel"
import ChordNote from "./ChordNote"

const Chord = ({ chord, sheetMusicIndex, measureIndex, noteIndex }: { chord: ChordTemplate, sheetMusicIndex: number, measureIndex: number, noteIndex: number }) => {
  const { musicManageMode } = useSheetMusicLibraryContext()
  const { measureHeight } = useSheetMusicContext()

  const noteHeights = chord.notes.map(cn => noteToHeightIndex(cn))
  const chordStemHeight = ((Math.max(...noteHeights) - Math.min(...noteHeights)) * 0.125 + .8) * measureHeight

  const stemHeight = Math.max(chordStemHeight, measureHeight)

  const minNote = chord.notes[noteHeights.indexOf(Math.min(...noteHeights))]

  const ariaLabelStart =
    musicManageMode === 'ADD'
      ? 'adicionar nota antes do '
      : musicManageMode === 'ADD_TO_CHORD'
        ? 'adicionar nota ao '
        : 'remover '

  return (
    <>
      <ChordAriaLabel note={minNote} stemHeight={stemHeight} ariaLabel={ariaLabelStart + chord.getAriaLabel() + `, na posição ${noteIndex + 1} do compasso ${measureIndex + 1}`} />
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