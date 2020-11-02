import React from 'react';
import { Link } from "react-router-dom";
import "./UserWelcome.css";

function UserWelcomePage() {
    
    const token = window.localStorage.getItem("token")
    
    const removeToken = () => { 
        localStorage.removeItem("token")
    }

    const username = window.localStorage.getItem("username")


    
    const userLog = () => {
      if (token) {
        return (
            <div className="user-welcome-wrapper">
                <h2>Hi, {username}!</h2>
                <p>It's great to see you.</p>
                <img src="https://icon-library.com/images/b1585ed98b.png" className="down-arrow"/>
            </div>
        )
      }
      return (
          <div className="user-welcome-wrapper">
            <h2>Hi there!</h2>
            <p>Looks like you're not logged in yet.</p>
            <Link to="/login">Login</Link>
            <img src="https://icon-library.com/images/b1585ed98b.png" className="down-arrow" />
      </div>
      )
    }

    // handleLogoutClick = () => {
    //     this.setState({isLoggedIn: false});
    // }

    const Log = userLog()

    return (
        <div>
            {Log}
        </div>
    )
    
   }

export default UserWelcomePage;