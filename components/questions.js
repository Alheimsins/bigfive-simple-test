import axios from 'axios'
import generatePayload from '../lib/generate-payload'
import repackAnswers from '../lib/repack-answers'
import Question from './question'

function Questions ({ questions, result, setResult }) {

  const handleCancel = event => {
    event.preventDefault()
    const form = document.getElementById('bigfive-test')
    form.reset()
  }

  const handleSubmit = async event => {
    event.preventDefault()
    const form = document.getElementById('bigfive-test')
    const data = generatePayload(form)
    const answers = repackAnswers(data)
    const payload = {
      answers: Object.values(answers)
    }
    try {
      await axios.post('/api/save', payload)
      form.reset()
      setResult(payload)
    } catch (error) {
      console.error(error)
    }
  }

  if (!questions) return null;
  if (result) return null;

  return (
    <div>
      <form id='bigfive-test' onSubmit={handleSubmit} className='space-y-8 divide-y divide-gray-200'>
        <div className='space-y-8 divide-y divide-gray-200'>
          {questions.map((question => <Question key={question.id} {...question} />))}
        </div>
        <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Questions
