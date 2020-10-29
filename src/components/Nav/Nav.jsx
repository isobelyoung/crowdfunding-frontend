import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    // const isLoggedIn = this.state.isLoggedIn;
    
    
    return (
    
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/projects">Project</Link>
            <Link to="/newuser">New User</Link>
            <Link to="/login">Login/Logout</Link>
        </nav>
    );
}

export default Nav;