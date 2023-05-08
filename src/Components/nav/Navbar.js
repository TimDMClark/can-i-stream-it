import { Link, useNavigate } from "react-router-dom"
import { SearchBar } from "./SearchBar"
import "./NavBar.css"
import { Container, Navbar } from "react-bootstrap"
import { useState } from "react"


export const NavigateApp = () => {

    const [movies, setMovies] = useState([])

    const navigate = useNavigate()
    const localMovieUser = localStorage.getItem("movie_user")
    const movieUserObject = JSON.parse(localMovieUser)

    if (movieUserObject) {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
            <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Navbar.Brand href="/profile">Profile</Navbar.Brand>
                <SearchBar setMovies={setMovies} movies={movies} />
                <Navbar.Brand href="/" onClick={() => {
                    localStorage.removeItem("movie_user")
                    navigate("/", {replace: true})
                    }}>Logout
                </Navbar.Brand>
            </Container>
        </Navbar>
    )}
}
