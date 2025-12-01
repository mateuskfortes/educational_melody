import Image from "next/image";
import { AccidentalTemplate } from "../../../../../_types/sheetMusicTemplates";

const Accidental = ({
  accidental,
  renderHidden,
}: {
  accidental: AccidentalTemplate;
  renderHidden?: boolean;
}) => {
  return (
    <>
      {accidental === "sharp" && (
        <div className="sharp_box">
          <Image alt="" src="images/music-library/sharp.svg" style={{}} />
        </div>
      )}
      {accidental === "flat" && (
        <div className="flat_box">
          <Image alt="" src="images/music-library/flat.svg" />
        </div>
      )}
      {accidental === "natural" && (
        <div className="natural_box">
          <Image alt="" src="images/music-library/natural.svg" />
        </div>
      )}
      {!accidental && renderHidden && (
        <div className="natural_box" style={{ visibility: "hidden" }}>
          <Image alt="" src="images/music-library/natural.svg" />
        </div>
      )}
    </>
  );
};

export default Accidental;
