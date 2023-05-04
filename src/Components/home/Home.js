import React, { useState, useEffect } from "react"
import { GetPopularMovies } from "../movies/MovieAPIManager"



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
    
    <h2>Popular Movies</h2>
    <div>{movies.map((movie) => <img src="`https://www.themoviedb.org/t/p/w300_and_h450_bestv2{movie.poster_path}`" alt="{movie.name}"></img>)}</div>
    
    </>
}