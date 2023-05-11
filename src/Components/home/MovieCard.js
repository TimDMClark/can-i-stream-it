import { useState } from "react"
import { Modal, Button } from "react-bootstrap"


export const MovieCard = ({id, title, poster_path, overview, release_date}) => {
    
    const [show, setShow]=useState(false)

    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
    
    const imagePath = 'https://image.tmdb.org/t/p/w500'

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={imagePath+poster_path} alt="" />
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={handleShow}>View More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top" src={imagePath+poster_path} alt="" />
                            <h4>{release_date}</h4>
                            <br></br>
                            <h6>Overview</h6>
                            <p>{overview}</p>
                            <button type ="button" className="btn btn-dark">Add To Watchlist</button>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>
    )
}