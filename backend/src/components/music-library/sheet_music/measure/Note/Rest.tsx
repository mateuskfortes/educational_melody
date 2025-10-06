import { EighthRest, HalfRest, QuarterRest, SixteenthRest, ThirtysecondRest, WholeRest } from "@/classes/music-library/notes";
import { useSheetMusicLibraryContext } from "@/hooks/music-library/useSheetMusicLibraryContext";
import { RestPropsTemplate } from "@/types/music-library/ComponentsPropsTypes";

const Rest = ({ rest, measureIndex, noteIndex }: RestPropsTemplate) => {
  const { musicManageMode } = useSheetMusicLibraryContext()

  let offset = 0;

  if (rest instanceof WholeRest) offset = -11
  else if (rest instanceof HalfRest) offset = 1
  else if (rest instanceof QuarterRest) offset = 37
  else if (rest instanceof EighthRest) offset = 24
  else if (rest instanceof SixteenthRest) offset = 49
  else if (rest instanceof ThirtysecondRest) offset = 47

  const top = `${50 + offset}%`

  const ariaLabelStart =
    musicManageMode === 'ADD'
      ? 'adicionar nota antes da '
      : musicManageMode === 'ADD_TO_CHORD'
        ? ''
        : 'remover '

  return (
    <div
      className='rest_note'
      style={{ top }}
    >
      <img
        src={`images/music-library/${rest.name}.svg`}
        alt={`${ariaLabelStart + rest.getAriaLabel()}, na posição ${noteIndex + 1} do compasso ${measureIndex + 1}`}
        tabIndex={0}
        className={rest.name}
      />
    </div>
  );
}

export default Rest