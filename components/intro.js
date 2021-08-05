function Intro ({ result }) {
  if (result) return null

  return (
    <div>
      <h1 className="text-4xl">Big Five Test</h1>
      <ul className='list-disc pl-8 mt-2'>
        <li>Answer honestly, even if you don&apos;t like the answer.</li>
        <li>Describe yourself as you generally are now, not as you wish to be in the future.</li>
        <li>Your spontaneous answer is usually the most accurate.</li>
      </ul>
    </div>
  )
}

export default Intro
