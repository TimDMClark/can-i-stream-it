import { useEffect, useState } from "react"
import { APIKey } from "../../api-key"
import { Button, Form, FormControl } from "react-bootstrap"
import { Search } from "../search/Search"
import { useNavigate } from "react-router-dom"


export const SearchBar = ({setMovies}) => {
    
    const [searchInput, setSearchInput] = useState("")

    const handleSearch = async (e) => {
        e.preventDefault()
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&query=${searchInput}`
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
            console.log(data.results)
        }

        catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    return <Form className="d-flex" onSubmit={handleSearch}>
        <FormControl
            type="text"
            placeholder="Search Movies"
            className="me-2"
            aria-label="search"
            onChange={(e) => handleChange(e)}
            value={searchInput} />
        <Button variant="secondary" type="submit">Search</Button>
    </Form>
}