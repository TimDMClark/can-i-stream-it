import React from 'react'
import { useEffect, useState } from "react";
import { MovieCard } from "../home/MovieCard";
import { NavigateApp } from "../nav/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Profile.css"

export const Profile = () => {

  const [watchlistMovies, setWatchlistMovies] = useState([])
  const localMovieUser = localStorage.getItem("movie_user")
  const movieUserObject = JSON.parse(localMovieUser)

  useEffect(() => {
    fetch("http://localhost:8088/watchlist")
      .then((response) => response.json())
      .then((watchlists) => {
        const myWatchlist = watchlists.filter(
          (watchlist) => watchlist.userId === movieUserObject.id
        )
        setWatchlistMovies(myWatchlist)
      })
    }, [])
    
    
    return (
    <>
      <NavigateApp />
      <div className="container">
      <h1>Profile</h1>
        <div className="grid">
            <div>
            {watchlistMovies.map((movie) =>
            <MovieCard profileFetchId={movie.movieId} page="profile" />
            )}
          </div>
        </div>
      </div>
    </>
  )
}








// const movieIds = myWatchlist.map((watchlist) => watchlist.movieId)
// fetch(`https://api.themoviedb.org/3/movie/${movieIds}?api_key=${APIKey}`)
//   .then((response) => response.json())
//   .then((movies) => {
//     setWatchlistMovies(movies)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

// useEffect(() => {
//   // const copy = {...watchlistMovies}
//   const taco = {...myWatchlistMovies}

//   watchlistMovies.forEach( x => {
//     fetch(`https://api.themoviedb.org/3/movie/${x.id}?api_key=${APIKey}`)
//         .then((response) => response.json())
//         .then((movie) => {
//           taco.push(movie)
//           setMyWatchlistMovies(taco)
//         })
//   })
// }, [watchlistMovies])