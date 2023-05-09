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

export const GetMovieDetails= () => {
    return fetch(`https://api.themoviedb.org/3/movie/{movie_id}`, {
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