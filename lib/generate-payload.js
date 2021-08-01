/* eslint-env browser */
import serializeForm from './serialize-form'

function generatePayload (form) {
  const data = new FormData(form)
  const payload = serializeForm(data)
  return payload
}

export default generatePayload
