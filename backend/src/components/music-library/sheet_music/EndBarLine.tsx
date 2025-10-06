import { useSheetMusicContext } from "@/hooks/music-library/useSheetMusicContext";
import { useSheetMusicLibraryContext } from "@/hooks/music-library/useSheetMusicLibraryContext";
import SheetMusicLines from "./SheetMusicLines";

export default function EndBarLine() {
  const { sheetMusicIndex, music } = useSheetMusicContext()
  const { musicManageMode, insertNote } = useSheetMusicLibraryContext()

  const containerClass = musicManageMode === 'ADD' ? 'end_bar_line_on_insert' : 'end_bar_line'

  function handleNote() {
    if (musicManageMode === 'ADD')
      insertNote(sheetMusicIndex, music.measures.length, 0)
  }

  return (
    <div onClick={handleNote} className={containerClass}>
      <SheetMusicLines />
      <div className="end_bar" />
    </div>
  )
}