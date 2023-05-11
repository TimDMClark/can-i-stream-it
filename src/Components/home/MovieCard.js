import { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { APIKey } from "../../api-key"
import { providersFetch } from "../movies/MovieAPIManager"


export const MovieCard = ({ id, title, poster_path, overview, release_date, profileFetchId, page }) => {

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    const imagePath = 'https://image.tmdb.org/t/p/w500'
    
    const [watchlists, setWatchlists] = useState([])
    const [providers, setProviders] = useState([])
    const localMovieUser = localStorage.getItem("movie_user")
    const movieUserObject = JSON.parse(localMovieUser)
    const [movie, setMovie] = useState({id, title, poster_path, overview, release_date, profileFetchId})

    const addMovie = (e) => {
        e.preventDefault()
        return fetch("http://localhost:8088/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ movieId: id, userId: movieUserObject.id })
        })
            .then(res => res.json())
            .then(data => {
                if (data.hasOwnProperty("id")) {
                    fetch("http://localhost:8088/watchlist")
                        .then(response => response.json())
                        .then((watchlists) => {
                            const myWatchlist = watchlists.filter(watchlist => watchlist.userId === movieUserObject.id)
                            setWatchlists(myWatchlist)
                        })
                }
            })
    }

    useEffect(
        () => {
            fetch("http://localhost:8088/watchlist")
                .then(response => response.json())
                .then((watchlists) => {
                    const myWatchlist = watchlists.filter(watchlist => watchlist.userId === movieUserObject.id)
                    setWatchlists(myWatchlist)
                })
        },
        []
    )

    // return fetch(`https://api.themoviedb.org/3/movie/${movie.movieId ? movie.movieId : id}/watch/providers?api_key=${APIKey}`, {

    // ! Movie isn't defined until useEffect on line 84, need to find a way to define movie before fetching Provider
    // const fetchProvider = () => {
    //     console.log(movie)
    //     return fetch(`https://api.themoviedb.org/3/movie/${movie.movieId ? movie.movieId : id}/watch/providers?api_key=${APIKey}`, {
    //         method: 'GET',
    //         headers: {
    //             accept: 'application/json',
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(r => {
    //             // console.log(r)
    //             return r.results
    //         })
    // }


    useEffect(() => {
        if(profileFetchId) {
            fetch(`https://api.themoviedb.org/3/movie/${profileFetchId}?api_key=${APIKey}`)
            .then((response) => response.json())
            .then((movieobj) => {
                setMovie(movieobj)
            })}
        }, [])

        
    useEffect(
        () => {
            // {watchlists.map((singleMovieWatchList) => {
            //     console.log(singleMovieWatchList)
                providersFetch(movie, profileFetchId)
                .then((results) => {
                    console.log(results)
                    setProviders(results);
                })
            // })}
                
        },
        [movie]
    );

    return (
        <div className="card text-center bg-black mb-3">
            <div className="card-body">
                <img className="card-img-top" src={imagePath + movie.poster_path} alt="" />
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{movie.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" src={imagePath + movie.poster_path} alt="" />
                            <h4>{movie.release_date}</h4>
                            <br></br>
                            <h6>Overview</h6>
                            <p>{movie.overview}</p>
                            <h6>Streaming @</h6>
                            {providers?.US && providers?.US?.flatrate &&
                                <ul>
                                    {providers?.US?.flatrate.map((provider, index) => (
                                        <li key={index}>{provider.provider_name}</li>
                                    ))}
                                </ul>
                            }
                            <h6>Rent @</h6>
                            {providers?.US && providers?.US?.rent &&
                                <ul>
                                    {providers?.US?.rent.map((provider, index) => (
                                        <li key={index}>{provider.provider_name}</li>
                                    ))}
                                </ul>
                            }
                            <h6>Buy @</h6>
                            {providers?.US && providers?.US?.buy &&
                                <ul>
                                    {providers?.US?.buy.map((provider, index) => (
                                        <li key={index}>{provider.provider_name}</li>
                                    ))}
                                </ul>
                            }
                            {page !== "profile" && (
                            <Button
                                variant={watchlists.some(watchlist => watchlist.movieId === id) ? 'secondary' : 'dark'}
                                onClick={addMovie}
                                disabled={watchlists.some(watchlist => watchlist.movieId === id)}
                                >
                                {watchlists.some(watchlist => watchlist.movieId === id) ? 'Added to Watchlist' : 'Add to Watchlist'}
                            </Button>
                            )}
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}