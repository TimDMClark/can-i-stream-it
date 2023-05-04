import { useState } from "react"
import { APIKey } from "../../api-key"
import { json } from "react-router-dom"

export const SearchBar = ({ setResults }) => {
    const [searchInput, setSearchInput] = useState("")

    const SearchMovies = (value) => {
        return fetch(`https://api.themoviedb.org/3/search/company?api_key=${APIKey}&query=${searchInput}`)
            .then(response =>
                response.json()
            )
            .then(r => {
                //must have r.results to be able to access array in API. First sends back as an object
                return r.results
            })
            .then ((json) => {
                const results = json.filter((movie) => {
                    return (value && movie)
                })
                setResults(results)
                console.log(results)
            })
    }

    const handleChange = (value) => {
        setSearchInput(value)
        SearchMovies(value)
    }
    


    return <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Search Here"
                    onChange={(e) => handleChange(e.target.value)}
                    value={searchInput} />
            </div>
            <div className="searchResults"></div>
    
    </div>
}