import { useEffect, useState } from "react"
import { Modal, Button } from "react-bootstrap"
import { APIKey } from "../../api-key"


export const MovieCard = ({id, title, poster_path, overview, release_date}) => {
    
    const [show, setShow]=useState(false)

    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
    const imagePath = 'https://image.tmdb.org/t/p/w500'

    const [watchlists, setWatchlists] = useState([])
    const [providers, setProviders] = useState([])
    const localMovieUser = localStorage.getItem("movie_user")
    const movieUserObject = JSON.parse(localMovieUser)

    const addMovie = (e) =>{
        e.preventDefault()
        return fetch("http://localhost:8088/watchlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({movieId:id, userId:movieUserObject.id})
        })
            .then(res => res.json())
            .then(data => {
                if (data.hasOwnProperty("id")) {
                    fetch("http://localhost:8088/watchlist")
                    .then (response => response.json())
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
                .then (response => response.json())
                .then((watchlists) => {
                    const myWatchlist = watchlists.filter(watchlist => watchlist.userId === movieUserObject.id)
                    setWatchlists(myWatchlist)
                })
        },
        []
    )
    
    const fetchProvider = () => {
        return fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${APIKey}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
            }
        })
            .then(response => response.json())
            .then(r => {
                console.log(r)
                return r.results
            })
    }

    useEffect(
        () => {
            fetchProvider()
                .then((results) => {
                    setProviders(results);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        []
    );

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={imagePath+poster_path} alt="" />
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" src={imagePath+poster_path} alt="" />
                            <h3>{title}</h3>
                            <h4>{release_date}</h4>
                            <br></br>
                            <h6>Overview</h6>
                            <p>{overview}</p>
                            <h6>Providers</h6>
                            {providers.US && providers.US.flatrate &&
                              <ul>
                                {providers.US.flatrate.map((provider, index) => (
                                  <li key={index}>{provider.provider_name}</li>
                                ))}
                              </ul>
                            }
                            <button type="button" className="btn btn-dark" onClick={addMovie}>Add to Watchlist</button>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}