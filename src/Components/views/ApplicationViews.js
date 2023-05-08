
import "./ApplicationViews.css"
import { Route, Routes } from 'react-router-dom';
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Movies } from "../home/Home";
import { Search } from "../search/Search";

function StreamIt() {
  return (
      <Routes>  
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/home" element={<Movies />} /> 
            <Route path="/searchResults" element={ <Search />} />
      </Route>
    </Routes>
    )
}

export default StreamIt;