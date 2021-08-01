function Result ({ result }) {
  if (!result) return null

  return (
    <>{JSON.stringify(result, null, 2)}</>
  )
}

export default Result
