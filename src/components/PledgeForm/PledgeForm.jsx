import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

function PledgeForm () {

    const { id } = useParams();

    const [pledgeData, setPledgeData] = useState({
        amount: "",
	    comment: "",
	    anonymous: "False",
        supporter_id: "",
        project_id: "",
    });

    const history = useHistory();
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: value,
        }));
    };

    // get project id from url, link it also to a user 

    const postData = async () => {
        const token = window.localStorage.getItem("token")
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/projects/${id}/pledge`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(pledgeData),
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
        if (pledgeData.amount) {
        postData().then((response) => {
            console.log(response)
        setPledgeData("pledge", response.pledgeData);
        console.log(response)
        history.push("/");
        });
        }
    };

    return (
        <form>
        <div>
        <label htmlFor="title">Pledge Amount:</label>
        <input
            type="number"
            id="amount"
            placeholder="Enter Pledge Amount"
            onChange={handleChange}
        />
        </div>

        <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
        </form>
    );
}
export default PledgeForm;


{/* <div>
<label htmlFor="description">Description:</label>
<input 
    type="text"
    id="description"
    placeholder="Project Description"
    onChange={handleChange}
/>
</div>
<div>
<label htmlFor="goal">Goal:</label>
<input
    type="number"
    id="goal"
    placeholder="Goal"
    onChange={handleChange}
/>
</div>
<div>
<label htmlFor="image">Image:</label>
<input
    type="text"
    id="image"
    placeholder="Image"
    onChange={handleChange}
/>
</div>
<div>
<label htmlFor="dateEnd">Date end:</label>
<input
    type="date"
    id="dateEnd"
    onChange={handleChange}
/>
</div> */}