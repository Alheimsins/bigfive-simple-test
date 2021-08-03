import { useEffect, useState } from 'react'
import calculateScore from '@alheimsins/bigfive-calculate-score'
import generateResult from '@alheimsins/b5-result-text'

import config from '../config'

function Result ({ result, setResult }) {
  const [score, setScore] = useState()
  const [text, setText] = useState()

  const handleReset = () => {
    setScore(false)
    setResult(false)
  }

  useEffect(() => {
    if (result) {
      setScore(calculateScore(result))
    }
    if (score) {
      setText(generateResult({ scores: score, lang: config.language }))
    }
  }, [result, score])

  if (!result) return null

  return (
    <div>
      <div>
      {JSON.stringify(text, null, 2)}
    </div>
    <div className="pt-5">
      <div className="flex justify-end">
        <button
          type="button"
          className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
    </div>
  )
}

export default Result
