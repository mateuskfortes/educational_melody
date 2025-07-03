import { FC } from "react"
import { RestTemplate } from "../../types/templates";
import { HalfRest, WholeRest } from "./notes";

type Props = {
  rest: RestTemplate;
  duration: number;
}

const Rest: FC<Props> = ({ rest, duration }) => {
  const width = `${rest.beatDuration / duration * 100}%`;

  let offset = 0;

  if (rest instanceof WholeRest) offset = -20
  else if (rest instanceof HalfRest) offset = -4

  const top = `${50 + offset}%`

  return (
    <div
      className="note_container"
      style={{ width }}
    >
      {/* Render the note at the calculated top position */}
      <img
        src={`public/static/img/${rest.constructor.name}.svg`}
        className="note"
        style={{ top }}
      />
    </div>
  );
}

export default Rest