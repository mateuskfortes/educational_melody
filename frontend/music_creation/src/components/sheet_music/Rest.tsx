import { FC } from "react"
import { RestTemplate } from "../../types/sheetMusicTemplates";
import { EighthRest, HalfRest, QuarterRest, SixteenthRest, ThirtysecondRest, WholeRest } from "../../classes/notes";

type Props = {
  rest: RestTemplate;
  duration: number;
}

const Rest: FC<Props> = ({ rest, duration }) => {
  const width = `${rest.beatDuration / duration * 100}%`;

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
      className="note_container"
      style={{ width }}
    >
      {/* Render the note at the calculated top position */}
      <img
        src={`img/${rest.name}.svg`}
        className={`rest_note ${rest.name}`}
        style={{ top }}
      />
    </div>
  );
}

export default Rest