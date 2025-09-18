import { ImgHTMLAttributes } from "react"
import { NoteTemplate } from "../../../../types/sheetMusicTemplates"
import { Eighth, Half, Sixteenth, Thirtysecond, Whole } from "../../../../classes/notes"

const CleanNoteDraw = ({ note, ...props }: { note: NoteTemplate } & ImgHTMLAttributes<HTMLImageElement>) => {
  let flagCount = 0
  if (note instanceof Eighth) flagCount = 1
  else if (note instanceof Sixteenth) flagCount = 2
  else if (note instanceof Thirtysecond) flagCount = 3

  let headSrc = 'Head.svg'
  if (note instanceof Whole) headSrc = 'WholeNote.svg'
  else if (note instanceof Half) headSrc = 'HalfHead.svg'

  return (
    <div
      {...props}
      className={"clean_note_draw " + props.className}
    >
      <img
        src={`img/${headSrc}`}
        className="head"
      />
      {!(note instanceof Whole) &&
        <div className="body">
          <div className="stem" />
          <div className="flag_list">
            {Array.from({ length: flagCount }).map((_, index) => (
              <div key={index} className="flag_box"><img src="img/Flag.svg" className="flag" /></div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}

export default CleanNoteDraw