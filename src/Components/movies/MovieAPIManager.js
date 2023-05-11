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

export const GetMovieDetails= (movie) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movie.movie_id}`, {
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

export const fetchProvider = (id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, {
        method: 'GET',
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
// movie.movieId ? movie.movieId : id

// export async function providersFetch (movie, id) {
//    const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.movieId ? movie.movieId : id}/watch/providers?api_key=${APIKey}`, {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//         }
//     })
//         const movies = await response.json()
//         const results = await movies.results
//         return results
// }


export const providersFetch = (movie, id) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movie.id ? movie.id : id}/watch/providers?api_key=${APIKey}`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
        }
    })
        .then(response => response.json())
        .then(r => {
            // console.log(r)
            return r.results
        })
}