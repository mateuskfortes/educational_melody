export default function SheetMusicLines() {
  return (
    <div className="line_area">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="line" />
      ))}
    </div>
  )
}