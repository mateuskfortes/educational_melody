import { AccidentalTemplate } from "../../../../../types/sheetMusicTemplates"

const Accidental = ({ accidental }: { accidental: AccidentalTemplate }) => {
  return (
    <>
      {accidental === 'sharp' && (
        <div className="sharp_box">
          <img src="img/sharp.svg" style={{}} />
        </div>
      )}
      {accidental === 'flat' && (
        <div className="flat_box">
          <img src="img/flat.svg" />
        </div>
      )}
      {accidental === 'natural' && (
        <div className="natural_box">
          <img src="img/natural.svg" />
        </div>
      )}
    </>
  )
}

export default Accidental