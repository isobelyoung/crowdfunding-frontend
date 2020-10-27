import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function ProjectForm () {
    const [project, setProject] = useState({
        projectTitle: "",
        projectDescription: "",
        goal: 0,
        image: "",
        dateEnd: "",
    });
    const history = useHistory();
    const handleChange = (e) => {
        const { id, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [id]: value,
        }));
    };
    const postData = async () => {
        const response = await fetch(
        `${process.env.REACT_APP_API_URL}/projects/`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(),
        }
        );
        return response.json();
    };
    const handleSubmit = (e) => {
        console.log(project.title)
        console.log(project.description)
        console.log(project.goal)
        console.log(project.image)
        console.log(project.dateEnd)
        console.log(project.is_open)
        e.preventDefault();
        if (project.title && project.description && project.goal && project.image && project.dateEnd) {
        postData().then((response) => {
            console.log(response)
        setProject("project", response.project);
        history.push("/");
        });
        }
    };

    return (
        <form>
        <div>
        <label htmlFor="title">Project Title:</label>
        <input
            type="text"
            id="title"
            placeholder="Enter Project Title"
            onChange={handleChange}
        />
        </div>
        <div>
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
        </div>
   
        <button type="submit" onClick={handleSubmit}>
        Submit
        </button>
        </form>
    );
}
export default ProjectForm;

