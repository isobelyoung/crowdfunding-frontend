import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";

function PledgeForm (props) {

    // const { project_id } = props
    const { project_id } = props;

    const [pledgeData, setPledgeData] = useState({ 
        amount: "",
        comment: "",
        supporter_id: "",
        anonymous: false,
        project: project_id,
    });

    // const { id } = useParams();


    const [errorMessage, setErrorMessage] = useState(null)

    const [allOk, setAllOk] = useState(false)


    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}/pledges`)
    //     .then((results) => {
    //         return results.json();
    //     })
    //     .then((data) => {
    //         // console.log(data)
    //         setPledgeData(data)
    //     });
    // }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            [id]: value,
        }));
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        setPledgeData((prevPledgeData) => ({
            ...prevPledgeData,
            anonymous: value,
            }));
      }

    useEffect(() => {
        if (allOk) {
            window.location.reload(false);
        }

    }, [allOk]);

    const postData = async () => {
        const token = window.localStorage.getItem("token")
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/pledges/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(pledgeData),
            });
            console.log(pledgeData)
            setAllOk(response.ok)
            return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pledgeData.amount && pledgeData.comment ) {

        postData().then((response) => {
            if (!allOk) {
                setErrorMessage(response[Object.keys(response)[0]])
            } else {
                window.location.reload(false);
                console.log(response)
            }
        })

    } else {
        setErrorMessage("You need to add a comment!")
    }
        //     console.log(response)
        // setPledgeData("pledgeData", response.pledgeData);
        // console.log(pledgeData)
        // history.push(`project/${id}`);
        // });
        // }
    };

    return (
        <div>
        <form>
        <div>
        <label htmlFor="amount">Pledge Amount:</label>
        <input
            type="number"
            id="amount"
            placeholder="Enter Pledge Amount"
            onChange={handleChange}
        />
        </div>
        <div>
        <label htmlFor="comment">Pledge Comment:</label>
        <input
            type="text"
            id="comment"
            placeholder="Enter Your Comment"
            onChange={handleChange}
        />
        </div>
        {/* <div>
        <label htmlFor="supporter_id">Your ID:</label>
        <input
            type="number"
            id="supporter_id"
            placeholder="Your unique number - get it from your login page!"
            onChange={handleChange}
            value={credentials.id}
        />
        </div> */}
        <div>
            <input
                name="anonymous"
                type="checkbox"
                checked={pledgeData.anonymous}
                onChange={handleInputChange} />
            <label> Anonymous</label>
        </div>
        <div>
        <label htmlFor="project_id">The Project ID - don't change this!</label>
        <input
            type="number"
            id="project_id"
            // placeholder="Project Id - don't change this!!"
            onChange={handleChange}
            value={project_id}
        />
        </div>
        

        <button type="submit" onClick={handleSubmit}>
            Submit
        </button>
        {/* <div>
            <{errorMessage != null ? <p className="error">{errorMessage}</p> : <></>}   
        </div> */}
        </form>
    </div>
    );
}
export default PledgeForm;


/* <div>
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
</div> */