import { useEffect, useState } from 'react'
import { getItems } from '@alheimsins/b5-johnson-120-ipip-neo-pi-r'
import { language } from '../config'
import Questions from '../components/questions'
import Result from '../components/result'

function HomePage() {
  const [questions, setQuestions] = useState()
  const result = null

  useEffect(() => {
    setQuestions(getItems(language, true))
  }, [])

  return (
    <div>
      <Questions questions={questions} />
      <Result result={result} />
    </div>
  )
}

export default HomePage
