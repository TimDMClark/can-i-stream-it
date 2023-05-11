import React, { useState, useEffect } from "react"
import { GetPopularMovies } from "../movies/MovieAPIManager"
import {MovieCard } from "./MovieCard.js"
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavigateApp } from "../nav/Navbar"

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
        
        return (
          <>
            <NavigateApp setMovies={setMovies} movies={movies} />
            <div className="container">
            <h1>Popular Movies</h1>
              <div className="grid">
                {movies.map((movie)=>
                <MovieCard key={movie.id} {...movie} />)}
              </div>
            </div>
          </>
        )
}
