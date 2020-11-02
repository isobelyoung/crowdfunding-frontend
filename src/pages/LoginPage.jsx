import React from 'react';
import LoginForm from "../components/LoginForm/LoginForm";
import { Link } from "react-router-dom";
import "./LogStyling.css"

function LoginPage() {
    return ( 
    <div>
        <LoginForm />
        <div className="button-wrapper">
            <p>Don't have an account?</p>
            <Link to="/newuser"><button className="yellow-button">Create New User</button></Link>
        </div>
    </div>
    )
   }

export default LoginPage;


