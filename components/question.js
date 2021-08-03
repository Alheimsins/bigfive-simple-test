function Choice ( props ) {
  const { id, text, score } = props;
  return (
    <div className="flex items-center">
      <input
        id={`${id}-score-${score}`}
        name={`${id}-score`}
        type="radio"
        required
        value={score}
        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      />
      <label htmlFor={`${id}-score-${score}`} className="ml-3 block text-sm font-medium text-gray-700">
        {text}
      </label>
    </div>
  )
}

function Question ( props ) {
  const { id, text, domain, facet, choices } = props
  return (
    <div className='pt-8'>
      <input type='hidden' name={`${id}-domain`} value={domain} />
      <input type='hidden' name={`${id}-facet`} value={facet} />
      <fieldset className='mt-6'>
        <div>
          <legend className="text-base font-medium text-gray-900">{text}</legend>
        </div>
        <div className='mt-4 space-y-4'>
          {choices.map(choice => <Choice id={id} {...choice} key={`${id}-alternative-${choice.score}`} />)}
        </div>
      </fieldset>
    </div>
  )
}

export default Question
