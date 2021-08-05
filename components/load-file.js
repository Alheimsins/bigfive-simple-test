function LoadFile ({ handler, buttonTitle }) {
  function triggerUpload (event) {
    event.preventDefault()
    const fileField = event.target.previousSibling
    fileField.click()
  }

  return (
  <div className='flex justify-end'>
    <input type='file' accept='.json' onChange={handler} className='invisible' />
    <button onClick={triggerUpload} className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      {buttonTitle}
    </button>
  </div>
  )
}

export default LoadFile

