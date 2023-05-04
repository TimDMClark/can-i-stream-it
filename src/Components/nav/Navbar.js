import { Link, useNavigate } from "react-router-dom"
import { SearchBar } from "./SearchBar"
import { useState } from "react"
import "./NavBar.css"
import { Search } from "../search/Search"


export const Nav = () => {
    const navigate = useNavigate()
    const [results, setResults] = useState([])
    const localMovieUser = localStorage.getItem("movie_user")
    const movieUserObject = JSON.parse(localMovieUser)

    if (movieUserObject) {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/profile">Profile</Link>
                <Link className="navbar__link" to="/settings">Settings</Link>
                <div className="navbar__search">
                    <SearchBar setResults={setResults} />
                    <Search results={results} />
                </div>
            </li>
            {
                localStorage.getItem("movie_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("movie_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )}
}
