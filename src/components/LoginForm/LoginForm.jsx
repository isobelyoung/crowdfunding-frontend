import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginForm.css"

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        console.log(response, "response");
        if (response.non_field_errors) {
          window.alert("Login failed, soz");
          history.push("/login");
          return;
        }
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("username", credentials.username)
        history.push("/");
      });
    }
  };


  return (
    <form className="form-wrapper">
      <div className="form-item">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </div>
      <div className="login-buttons">
        <button type="submit" onClick={handleSubmit} className="my-button"> 
          Login
        </button>
          <Link to="/logout">Logout</Link>
      </div>
    </form>
  );
  
}

export default LoginForm;
