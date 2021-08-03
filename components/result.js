function Result ({ result, setResult }) {
  const handleReset = () => setResult(false)
  if (!result) return null

  return (
    <div>
      <div>
      {JSON.stringify(result, null, 2)}
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
