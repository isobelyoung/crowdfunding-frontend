import React, { useEffect, useState } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import UserWelcome from "../components/UserWelcome/UserWelcome";


function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects`).then((results) => {
            return results.json();
        }).then((data) => {
            setProjectList(data);
        });
    }, []);

    return (

    <div>
        <div className="user-welcome">
            <UserWelcome />
        </div>
        <div id="project-list">
            {projectList.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    </div>
    )
}

export default HomePage;