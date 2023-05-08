//! Functions needed: onClick to route to search page and show results, onClick to Link/Route to individual movie page for clicked movie
//! Search results need Linked/Routed to search page
//? Maybe substitute movie page with search results showing directly if and where they can be streamed

import React, { useEffect, useState } from 'react'
import { MovieCard } from '../home/MovieCard'
import { APIKey } from "../../api-key"


export const Search = ({ results }) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKey}`)
        .then((res) => res.json())
        .then(data => {
            setMovies(data.results)
        })
}, []
)

  return (
    <div className="results-list">
        {results.map((result, id) => {
            return  <div>
            {movies.length > 0 ?(
              <div className="container">
              <div className="grid">
                {movies.map((movieReq)=>
                <MovieCard key={movieReq.id} {...movieReq}/>)}
                  </div>
          </div>
            ):(
              <h2>Sorry !! No Movies Found</h2>
            )}
          </div>   
        })}
    </div>
  )
}
