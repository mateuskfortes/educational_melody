import SheetMusicLines from "./SheetMusicLines"

export default function SheetMusicStart({ top, bottom }: { top: number, bottom: number }) {
  return (
    <>
      <div className="clef_area">
        <SheetMusicLines />
        <div className="clef_box treble">
          <img src="img/TrebleClef.svg" alt="" />
        </div>
      </div>
      <div className="meter">
        <SheetMusicLines />
        <p className="top">{top}</p>
        <p className="bottom">{bottom}</p>
      </div>
    </>
  )
}