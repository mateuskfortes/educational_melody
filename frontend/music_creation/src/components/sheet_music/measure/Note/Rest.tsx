import { EighthRest, HalfRest, QuarterRest, SixteenthRest, ThirtysecondRest, WholeRest } from "../../../../classes/notes";
import { RestPropsTemplate } from "../../../../types/ComponentsPropsTypes";

const Rest = ({ rest, measureIndex, noteIndex }: RestPropsTemplate) => {

  let offset = 0;

  if (rest instanceof WholeRest) offset = -11
  else if (rest instanceof HalfRest) offset = 1
  else if (rest instanceof QuarterRest) offset = 37
  else if (rest instanceof EighthRest) offset = 24
  else if (rest instanceof SixteenthRest) offset = 49
  else if (rest instanceof ThirtysecondRest) offset = 47

  const top = `${50 + offset}%`

  return (
    <div
      className='rest_note'
      aria-label={`${rest.getAriaLabel()}, na posição ${noteIndex + 1} do compasso ${measureIndex + 1}`}
      tabIndex={0}
      style={{ top }}
    >
      <img
        src={`img/${rest.name}.svg`}
        className={rest.name}
      />
    </div>
  );
}

export default Rest