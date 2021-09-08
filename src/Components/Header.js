import React from 'react'
import { NavLink } from "react-router-dom";
import "../App.css"
const Header = () => {
    return (
        <div>
            <div id="Navbar">
            <NavLink style={style} activeClassName="active" to="/">
              Login
            </NavLink>
            <NavLink style={style} activeClassName="active" to="/welcome">
              welcome
            </NavLink>
          </div>
        </div>
    )
}

const style={
  textDecoration:"none",
  fontSize:"40px",    
  color:"white"
}

export default Header
