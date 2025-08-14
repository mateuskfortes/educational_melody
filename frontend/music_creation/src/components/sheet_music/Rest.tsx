import { FC } from "react"
import { RestTemplate } from "../../types/sheetMusicTemplates";
import { HalfRest, WholeRest } from "../../classes/notes";

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
        src={`img/${rest.name}.svg`}
        className="note"
        style={{ top }}
      />
    </div>
  );
}

export default Rest