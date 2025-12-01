import Image from "next/image";

const CleanNoteBody = ({
  flagCount,
  height,
}: {
  flagCount: number;
  height?: number;
}) => (
  <div
    className="body"
    style={{ height: height !== undefined ? height + "px" : undefined }}
  >
    <div
      className="stem"
      style={{ height: height !== undefined ? height + "px" : undefined }}
    />
    <div className="flag_list">
      {Array.from({ length: flagCount }).map((_, index) => (
        <div
          key={index}
          className="flag_box"
          style={{ visibility: height === 0 ? "hidden" : undefined }}
        >
          <Image alt="" src="images/music-library/Flag.svg" className="flag" />
        </div>
      ))}
    </div>
  </div>
);

export default CleanNoteBody;
