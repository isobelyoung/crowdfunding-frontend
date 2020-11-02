import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    // const isLoggedIn = this.state.isLoggedIn;
    
    
    return (
    
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/newproject">New Project</Link>
            <Link to="/login">Login/Logout</Link>
        </nav>
    );
}

export default Nav;