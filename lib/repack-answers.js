const isPartOfTest = key =>  /domain/.test(key) || /facet/.test(key) || /score/.test(key)

const extractIdFromKey = key => {
  const parts = key.split('-')
  const data = parts.pop()
  return {
    id: parts.join('-'),
    data
  }
}

function repackAnswers ( payload ) {
  const answers = Object.keys(payload).reduce((accumulator, current) => {
    if (isPartOfTest(current)) {
      const { id, data } = extractIdFromKey(current)
      if (!accumulator.hasOwnProperty(id)) {
        accumulator[id] = { id }
      }
      accumulator[id][data] = payload[current]
    }
    return accumulator
  }, {})

  return answers
}

export default repackAnswers
