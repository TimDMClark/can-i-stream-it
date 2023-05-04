import React, { useState, useEffect } from "react"
import { GetPopularMovies } from "./MovieAPIManager"



export const Movies = () => {

    const [movies, setMovies] = useState([])


    useEffect(
        () => {
          GetPopularMovies()
          .then((movieArray) => {
            setMovies(movieArray)
          })
        }, []
    )
    

    return <>
    
    <h2>These are Movies</h2>
    <div>{movies.map((movie) => <ul>{movie.title}</ul>)}</div>
    
    </>
}