import React from 'react'

export const Search = ({ results }) => {
    console.log(results)
  return (
    <div className="results-list">
        {results.map((result, id) => {
            return <div key={id}>{result.name}</div>
        })}
    </div>
  )
}
