import { useEffect, useState } from 'react'
import { getItems } from '@alheimsins/b5-johnson-120-ipip-neo-pi-r'
import config from '../config'
import Intro from '../components/intro'
import LoadFile from '../components/load-file'
import Questions from '../components/questions'
import Result from '../components/result'

function HomePage() {
  const [questions, setQuestions] = useState()
  const [result, setResult] = useState()

  function loadPreviousResult (event) {
    event.preventDefault()
    const reader = new window.FileReader()
    const files = event.target.files
    reader.onload = () => {
      const text = reader.result
      const result = JSON.parse(text)
      setResult(result)
    }
    if (files.length === 1) {
      reader.readAsText(files[0])
    }
  }

  useEffect(() => {
    setQuestions(getItems(config.language, true))
  }, [])

  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-grow'>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-4 sm:px-0'>
            <LoadFile handler={loadPreviousResult} buttonTitle='Load previous result' />
            <Intro result={result} />
            <Questions questions={questions} result={result} setResult={setResult} />
            <Result result={result} setResult={setResult} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
