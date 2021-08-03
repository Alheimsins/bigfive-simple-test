import { useEffect, useState } from 'react'
import calculateScore from '@alheimsins/bigfive-calculate-score'
import generateResult from '@alheimsins/b5-result-text'

import config from '../config'

function Facet (props) {
  const { title, text, score, scoreText } = props
  return (
    <div className="mb-2">
      <h3 className='text-xl'>{title}</h3>
      <p className='mb-1 font-semibold'>Score: {score} - {scoreText}</p>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  )
}

function Domain ( props ) {
  const { domain, title, shortDescription, description, text, score, facets } = props
  return (
    <div className='mb-5'>
      <h1 className='text-4xl'>{title}</h1>
      <p>{shortDescription}</p>
      <p className='mb-2 font-semibold'>Score: {score}</p>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <h2 className='text-2xl mb-2 mt-2'>Facets</h2>
      {facets.map(data => <Facet {...data} key={`facet-${domain}-${data.facet}`} />)}
    </div>
  )
}


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
  if (!text) return null

  return (
    <div>
      <div>
        {text.map(data => <Domain {...data} key={`domain-${data.domain}`} />)}
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
