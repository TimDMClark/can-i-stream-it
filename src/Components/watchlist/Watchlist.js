import { useEffect, useState } from "react"
import { addToWatchlist } from "../movies/MovieAPIManager"

export const Watchlist = () => {

    const [watchlist, setWatchlist] = useState([])
    const localMovieUser = localStorage.getItem("movie_user")
    const movieUserObject = JSON.parse(localMovieUser)

    const addMovie = (e)  => {
        e.preventDefault()

        const movieToSendToWatlist = {
            
        }
    }

}