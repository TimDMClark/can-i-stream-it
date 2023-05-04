import { APIKey } from "../../api-key"

//fetch call for popular movies 
export const GetPopularMovies = () => {
    return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}`)
        .then(response =>
            response.json()
        )
        .then(r => {
            //must have r.results to be able to access array in API. First sends back as an object
            return r.results
        }
        )
}
