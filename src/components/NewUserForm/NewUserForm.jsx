import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function NewUserForm () {
    const [user, setUser] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        profile_picture: "",
        business_name: "",
		password: ""
    });
    const history = useHistory();
    const handleChange = (e) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    };
    const postData = async () => {
        // const token = window.localStorage.getItem("token")
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/users/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                // "Authorization": `Token ${token}`
            },
            body: JSON.stringify(user),
            }
            );
            return response.json();
    };

    // const putData = async () => {
    //     const token = window.localStorage.getItem("token")
        
    //     const response = await fetch(
    //         `${process.env.REACT_APP_API_URL}/projects/`, {
    //         method: "put",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Token ${token}`
    //         },
    //         body: JSON.stringify(project),
    //         }
    //         );
    //         return response.json();
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.username && user.first_name && user.last_name && user.email && user.profile_picture && user.business_name && user.password) {
        postData().then((response) => {
            console.log(response)
        setUser("user", response.user);
        history.push("/users/");
        });
        }
    };

    return (
        <form>
        <div>
        <label htmlFor="username">Username:</label>
        <input
            type="text"
            id="username"
            placeholder="Choose a username"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="first_name">First name:</label>
        <input 
            type="text"
            id="first_name"
            placeholder="Your name"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="last_name">Last name:</label>
        <input
            type="text"
            id="last_name"
            placeholder="Last name"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
        <input
            type="text"
            id="email"
            placeholder="Your email"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="profile_picture">Profile picture:</label>
        <input
            type="text"
            id="profile_picture"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="business_name">Biz name:</label>
        <input
            type="text"
            id="business_name"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input
            type="password"
            id="password"
            onChange={handleChange}
        />
        </div>
        
   
        <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
        </form>
    );
}
export default NewUserForm;

