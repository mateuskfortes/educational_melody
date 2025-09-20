import { ImgHTMLAttributes } from "react"
import { NoteTemplate } from "../../../../types/sheetMusicTemplates"
import { Half, Whole } from "../../../../classes/notes"
import CleanNoteBody from "./ornaments/CleanNoteBody"
import { getConstructor, getFlagCountFromNote } from "../../../../utils"

const CleanNoteDraw = ({ note, hasFlag = true, stemHeight, ...props }: { note: NoteTemplate, stemHeight?: number, hasFlag?: boolean } & ImgHTMLAttributes<HTMLImageElement>) => {
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
        <CleanNoteBody flagCount={hasFlag ? getFlagCountFromNote(getConstructor(note)) : 0} height={stemHeight} />
      }
    </div>
  )
}

export default CleanNoteDraw