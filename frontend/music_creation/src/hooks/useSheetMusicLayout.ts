import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { MeasureTemplate, MusicTemplate } from "../types/sheetMusicTemplates";
import { NoteBase } from "../classes/notes";
import { getExtraDistance } from "../utils";

export type SheetMusicLine = {
  measures: MeasureTemplate[];
  marginTop: number;
  marginBottom: number;
};

const defaultLines: SheetMusicLine[] = [
  { measures: [{ notes: [] }], marginTop: 0, marginBottom: 0 }
]

/**
 * Hook to calculate sheet music layout metrics:
 * - Measure width and height
 * - Number of measures per line
 * - Lines of measures with their top and bottom margins
 *
 * @returns The refs and calculated layout for rendering sheet music.
 */
export function useSheetMusicLayout(music: MusicTemplate) {
  const measureRef = useRef<HTMLDivElement>(null);
  const sheetMusicRef = useRef<HTMLDivElement>(null);

  const [measureWidth, setMeasureWidth] = useState(0);
  const [measureHeight, setMeasureHeight] = useState(0);
  const [measuresPerLine, setMeasuresPerLine] = useState(0);
  const [lines, setLines] = useState<SheetMusicLine[]>(defaultLines);

  const calculateLayout = useCallback(() => {
    if (!measureRef.current || !sheetMusicRef.current) return;

    const measurePerLine = Math.floor(
      sheetMusicRef.current.offsetWidth / measureRef.current.offsetWidth
    );

    const newLines: SheetMusicLine[] = [];

    for (let i = 0; i < music.measures.length; i += measurePerLine) {
      const lineMeasures = music.measures.slice(i, i + measurePerLine);

      // calculate top/bottom extra distance for this line
      let maxExtraTop = 0;
      let maxExtraBottom = 0;

      lineMeasures.forEach((measure) =>
        measure.notes.forEach((note) => {
          if (!(note instanceof NoteBase)) return;
          const [isTop, extra] = getExtraDistance(note);
          if (isTop && extra > maxExtraTop) maxExtraTop = extra;
          if (!isTop && extra > maxExtraBottom) maxExtraBottom = extra;
        })
      );

      const topPx =
        (maxExtraTop * measureRef.current.offsetHeight) / 100 +
        measureRef.current.offsetHeight * 0.3;
      const bottomPx =
        (maxExtraBottom * measureRef.current.offsetHeight) / 100 -
        measureRef.current.offsetHeight * 0.3;

      newLines.push({
        measures: lineMeasures,
        marginTop: topPx,
        marginBottom: bottomPx < 0 ? 0 : bottomPx,
      });
    }

    setLines(newLines);
    setMeasureHeight(measureRef.current.offsetHeight);
    setMeasureWidth(measureRef.current.offsetWidth);
    setMeasuresPerLine(measurePerLine);
  }, [music]);

  useLayoutEffect(() => {
    calculateLayout();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", calculateLayout);
      return () => window.removeEventListener("resize", calculateLayout);
    }
  }, [calculateLayout]);

  return {
    measureRef,
    sheetMusicRef,
    measureWidth,
    measureHeight,
    measuresPerLine,
    lines,
  };
}
