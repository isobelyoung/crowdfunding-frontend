import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {

    return (
        <div className="my-header">
            <img src={require('../images/logo.png')} />
            <h1>Philanthrivia</h1>
        </div>
    );
}

export default Header;