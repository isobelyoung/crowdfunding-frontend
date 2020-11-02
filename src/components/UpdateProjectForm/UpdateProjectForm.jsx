import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";
import "./UpdateProjectForm.css";

function UpdateProjectForm () {

    const { id } = useParams();

    const [project, setProject] = useState({
        projectTitle: "",
        projectDescription: "",
        goal: 0,
        image: "",
        dateEnd: "",
    });

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProject(data)
        });
    }, []);

 
    const history = useHistory();
    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };

    // get the project data for the id

    const putData = async () => {
        const token = window.localStorage.getItem("token")
        
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/projects/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            },
            body: JSON.stringify(project),
            }
            );
            return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (project.title && project.description && project.goal && project.image) {
        putData().then((response) => {
            console.log(response)
        setProject("project", response.project);
        history.push("/");
        });
        }
    };

    return (
        <form className="update-project-wrapper">
        <h5>Oh hey there, looks like you're the owner! Edit your project here</h5>
        <div className="form-item">
        <label htmlFor="title">Project Title:</label>
        <input
            type="text"
            id="title"
            placeholder="Enter Project Title"
            onChange={handleChange}
            value={project.title}
        />
        </div>
        <div className="form-item">
        <label htmlFor="description">Description:</label>
        <input 
            type="text"
            id="description"
            placeholder="Project Description"
            onChange={handleChange}
            value={project.description}
        />
        </div>
        <div className="form-item">
        <label htmlFor="goal">Goal:</label>
        <input
            type="number"
            id="goal"
            placeholder="Goal"
            onChange={handleChange}
            value={project.goal}
            />
        </div>
        <div className="form-item">
        <label htmlFor="image">Image:</label>
        <input
            type="text"
            id="image"
            placeholder="Image"
            onChange={handleChange}
            value={project.image}
        />
        </div>

        <div className="button-wrapper">
            <button type="submit" onClick={handleSubmit} className="my-button">
                Submit Changes
            </button>
        </div>

        </form>
    )
}
export default UpdateProjectForm;

