import SheetMusicLines from "./SheetMusicLines"

export default function SheetMusicStart({ top, bottom }: { top: number, bottom: number }) {
  return (
    <>
      <div className="clef_area">
        <SheetMusicLines />
        <div className="clef_box treble">
          <img src="img/TrebleClef.svg" tabIndex={0} alt="clave de sol" />
        </div>
      </div>
      <div className="meter" aria-label={`compasso ${top} por ${bottom}`} tabIndex={0}>
        <SheetMusicLines />
        <p className="top">{top}</p>
        <p className="bottom">{bottom}</p>
      </div>
    </>
  )
}