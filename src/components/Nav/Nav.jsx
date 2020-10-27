import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/projects">Project</Link>
            <Link to="/login">Login</Link>
            <Link to="/newuser">New User</Link>
        </nav>
    );
}

export default Nav;