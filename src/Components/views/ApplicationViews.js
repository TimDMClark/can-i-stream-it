
import "./ApplicationViews.css"
import { Route, Routes } from 'react-router-dom';
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { Movies } from "../home/Home";
import { Profile } from "../profile/Profile";

function StreamIt() {
  return (
      <Routes>  
          <Route>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Movies />} /> 
            <Route path="/profile" element={<Profile />} /> 
      </Route>
    </Routes>
    )
}

export default StreamIt;