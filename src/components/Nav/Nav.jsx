import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
        </nav>
    );
}

export default Nav;