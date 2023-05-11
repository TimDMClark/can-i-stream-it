import { APIKey } from "../../api-key"

const localMovieUser = localStorage.getItem("movie_user")
const movieUserObject = JSON.parse(localMovieUser)

//fetch call for popular movies 
export const GetPopularMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`, {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${APIKey}`
        }
    })
        .then(response =>
            response.json()
        )
        .then(r => {
            return r.results
        })
}

// fetch call to post movies to local watchlist
export const addToWatchlist = () => {
    return fetch(`https://api.themoviedb.org/3/account/${movieUserObject.id}/watchlist`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${APIKey}`
        }
    })
        .then(response => response.json())
        .then(r => {
            return r.results
        })
}

// fetch call to remove movies from local watchlist
export const removeFromWatchlist = () => {
    return fetch(`https://api.themoviedb.org/3/list/list_item/remove_item`, {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${APIKey}`
        }
    })
        .then(response => response.json())
        .then(r => {
            return r.results
        })
}

export const fetchProvider = () => {
    return fetch(`https://api.themoviedb.org/3/movie/{movie_id}/watch/providers`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${APIKey}`
        }
    })
        .then(response => response.json())
        .then(r => {
            return r.results
        })
}