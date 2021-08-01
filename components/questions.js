function Questions ({ questions }) {
  if (!questions) return null;

  return (
    <>
      {JSON.stringify(questions, null, 2)}
    </>
  )
}

export default Questions
