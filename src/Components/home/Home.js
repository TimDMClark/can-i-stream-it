import React, { useState, useEffect } from "react"
import { GetPopularMovies } from "../movies/MovieAPIManager"
import {MovieCard } from "./MovieCard.js"
import "./Home.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { NavigateApp } from "../nav/Navbar"
import { SearchBar } from "../nav/SearchBar"

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
            <NavigateApp />
            <SearchBar setMovies={setMovies} className="search-bar" />
            <div className="container">
              <div className="grid">
                {movies.map((movie)=>
                <MovieCard key={movie.id} {...movie} />)}
              </div>
            </div>
          </>
        )
}
