const Dots = ({ dotCount }: { dotCount: number }) => {
  return (
    <>
      {
        [...Array(dotCount)].map((_, i) =>
          <img key={i} style={{ marginTop: 'auto' }} src="img/dot.svg" alt="" />
        )
      }
    </>
  )
}

export default Dots