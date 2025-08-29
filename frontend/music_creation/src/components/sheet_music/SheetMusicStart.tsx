import SheetMusicLines from "./SheetMusicLines"

export default function SheetMusicStart() {
  return (
    <div className="clef_area">
      <SheetMusicLines />
      <div className="clef_box treble">
        <img src="img/TrebleClef.svg" alt="" />
      </div>
    </div>
  )
}