import { AccidentalTemplate } from "@/types/music-library/sheetMusicTemplates"

const Accidental = ({ accidental, renderHidden }: { accidental: AccidentalTemplate, renderHidden?: boolean }) => {
  return (
    <>
      {accidental === 'sharp' && (
        <div className="sharp_box">
          <img src="images/music-library/sharp.svg" style={{}} />
        </div>
      )}
      {accidental === 'flat' && (
        <div className="flat_box">
          <img src="images/music-library/flat.svg" />
        </div>
      )}
      {accidental === 'natural' && (
        <div className="natural_box">
          <img src="images/music-library/natural.svg" />
        </div>
      )}
      {!accidental && renderHidden && (
        <div className="natural_box" style={{ visibility: 'hidden' }}>
          <img src="images/music-library/natural.svg" />
        </div>
      )}
    </>
  )
}

export default Accidental