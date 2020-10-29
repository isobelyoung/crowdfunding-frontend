import React from 'react';
import { Link } from "react-router-dom";

function LogoutPage() {
    
    const token = window.localStorage.getItem("token")
    
    const removeToken = () => { 
        localStorage.removeItem("token")
    }
    
    const userLog = () => {
      if (token) {
        return <Link to="/" onClick={removeToken}>Logout</Link>
      }
      return <Link to="/login">Whoops, looks like you're not logged in yet! Login here</Link>
      
    }

    // handleLogoutClick = () => {
    //     this.setState({isLoggedIn: false});
    // }

    const Log = userLog()

    return (
    <h4>{Log}</h4>
    )
    
   }

export default LogoutPage;
