import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";


function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div className="project-card">
        <Link to={`/projects/${projectData.id}`}>
        <img src={projectData.image}/>
        <div className="project-card-title">
            <h3>{projectData.title}</h3>
            <p></p>
        </div>
        </Link>
        </div>
);
}

export default ProjectCard;