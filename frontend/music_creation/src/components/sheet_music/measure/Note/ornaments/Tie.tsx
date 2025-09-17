import { useSheetMusicContext } from "../../../../../hooks/useSheetMusicContext";
import { calculateTieWidth } from "../../../../../utils";
import { TiePropsTemplate } from "../../../../../types/ComponentsPropsTypes";

const Tie = ({ measureIndex, noteIndex, top }: TiePropsTemplate) => {
  const { measureDuration, measureWidth, music } = useSheetMusicContext()
  const left = '50%'
  const tieWidth = calculateTieWidth(measureWidth, measureDuration, music.measures, measureIndex, noteIndex)

  const tieHeight = tieWidth * .11
  const path = `M0,0 Q${tieWidth / 2},${tieHeight} ${tieWidth},0`;

  return (
    <svg
      style={{ position: 'absolute', left, top }}
      width={tieWidth}
      height={tieHeight}
      viewBox={`0 0 ${tieWidth} ${tieHeight}`}
    >
      <path d={path} stroke="black" fill="none" strokeWidth={2} />
    </svg>
  );
};

export default Tie;
