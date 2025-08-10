type Props = {
  width: number,
  height?: number,
  left?: string,
  top?: string
}

const Tie = ({ width, height, left = '50%', top = '0' }: Props) => {
  if (!height) height = width * .11
  const path = `M0,0 Q${width / 2},${height} ${width},0`;

  return (
    <svg style={{ position: 'absolute', left, top }} width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={path} stroke="black" fill="none" strokeWidth={2} />
    </svg>
  );
};

export default Tie;
