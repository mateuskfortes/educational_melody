import { useRef, useEffect } from "react";
import { Sixteenth, Thirtysecond } from "@/classes/music-library/notes";
import { NoteTemplate } from "@/types/music-library/sheetMusicTemplates";
import { useSheetMusicContext } from "@/hooks/music-library/useSheetMusicContext";
import { calculateNoteDistance, getTopDistance } from "@/utils/music-library";

interface BeamRenderer {
  notes: NoteTemplate[];
  beamThickness?: number;
  marginTop: number
  marginBottom: number
  measureRef: React.RefObject<HTMLDivElement | null>
}

export default function BeamRenderer({
  notes,
  beamThickness = 3,
  marginTop,
  marginBottom,
  measureRef
}: BeamRenderer) {
  const { measureWidth, measureDuration, measureHeight } = useSheetMusicContext()

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !measureRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";

    let noteWidthAcc = 0
    let previousSingleBeamCount = 0

    const currentMeasureMarginTop = parseInt(getComputedStyle(measureRef.current).marginTop, 10)

    const currentMargin = parseInt(getComputedStyle(canvas).marginTop, 10);
    canvas.style.marginTop = `${currentMargin - marginTop / 100 * measureHeight}px`;

    const currentHeight = parseInt(getComputedStyle(canvas).height, 10);
    canvas.style.height = `${currentHeight + marginTop / 100 * measureHeight + marginBottom / 100 * measureHeight}px`

    notes.forEach((note, noteIndex) => {
      if (noteIndex === notes.length - 1) return

      const nextNote = notes[noteIndex + 1]



      const beamWidth = calculateNoteDistance(note, nextNote, measureWidth, measureDuration)
      const x1 = 0 + noteWidthAcc;
      const y1 = getTopDistance(note) / 100 * measureHeight - measureHeight + marginTop / 100 * measureHeight + currentMeasureMarginTop;
      const x2 = x1 + beamWidth;
      const y2 = getTopDistance(nextNote) / 100 * measureHeight - measureHeight + marginTop / 100 * measureHeight + currentMeasureMarginTop;
      noteWidthAcc += beamWidth

      console.log(y1, y2)

      let currentNoteBeamCount = 1;
      let nextNoteBeamCount = 1;
      if (note instanceof Sixteenth) currentNoteBeamCount = 2;
      else if (note instanceof Thirtysecond) currentNoteBeamCount = 3;
      if (nextNote instanceof Sixteenth) nextNoteBeamCount = 2;
      else if (nextNote instanceof Thirtysecond) nextNoteBeamCount = 3;

      const singleBeamCount = Math.min(currentNoteBeamCount, nextNoteBeamCount)

      for (let i = 0; i < singleBeamCount; i++) {
        const yOffset = i * beamThickness * 3;

        const dx = x2 - x1;
        const dy = y2 - y1;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        ctx.save();
        ctx.translate(x1, y1 + yOffset);
        ctx.rotate(angle);
        ctx.fillRect(0, -beamThickness / 2, length, beamThickness);
        ctx.restore();
      }

      let halfSingleBeamCount = 0
      if (
        currentNoteBeamCount > previousSingleBeamCount
        && currentNoteBeamCount > nextNoteBeamCount
      ) {
        halfSingleBeamCount = currentNoteBeamCount - nextNoteBeamCount
      }

      const halfSingleBeamSize = .3
      for (let i = 0; i < halfSingleBeamCount; i++) {
        const yOffset = (i + singleBeamCount) * beamThickness * 3;

        const dx = (x2 - x1) * halfSingleBeamSize;
        const dy = (y2 - y1) * halfSingleBeamSize;
        const length = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        ctx.save();
        ctx.translate(x1, y1 + yOffset);
        ctx.rotate(angle);
        ctx.fillRect(0, -beamThickness / 2, length, beamThickness);
        ctx.restore();
      }

      if (nextNoteBeamCount > currentNoteBeamCount && noteIndex === notes.length - 2)
        for (let i = 0; i < nextNoteBeamCount - currentNoteBeamCount; i++) {
          const yOffset = (i + singleBeamCount) * beamThickness * 3;

          const dx = (x2 - x1) * halfSingleBeamSize;
          const dy = (y2 - y1) * halfSingleBeamSize;
          const length = Math.sqrt(dx * dx + dy * dy);
          const angle = Math.atan2(dy, dx);

          ctx.save();
          ctx.translate(x2, y2 + yOffset);
          ctx.rotate(angle + Math.PI);
          ctx.fillRect(0, -beamThickness / 2, length, beamThickness);
          ctx.restore();
        }

      previousSingleBeamCount = singleBeamCount
    });
  }, [notes, beamThickness]);

  return <canvas
    className="beam_renderer"
    ref={canvasRef}
    style={{ marginLeft: notes[0].getWidth(measureWidth, measureDuration) / 2 + 'px' }}
    width={notes.reduce((acc, note) => acc + note.getWidth(measureWidth, measureDuration), 0) - calculateNoteDistance(notes[0], notes[notes.length - 1], measureWidth, measureDuration) + 'px'}

  />;
}
