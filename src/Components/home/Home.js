import React, { useState, useEffect } from "react"
import { GetPopularMovies } from "../movies/MovieAPIManager"
import {MovieCard } from "./MovieCard.js"
import { NavigateApp } from "../nav/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"

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
            <NavigateApp setMovies={setMovies} className="nav-bar" />
            <div className="container">
              <div className="grid">
                {movies.map((movie)=>
                <MovieCard key={movie.id} {...movie} page="home" />)}
              </div>
            </div>
          </>
        )
}
