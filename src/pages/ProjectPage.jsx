import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, List } from "react-router-dom";
import UpdateProjectForm from "../components/UpdateProjectForm/UpdateProjectForm"; 

function ProjectPage() {
    const [projectData, setProjectData] = useState({ pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data)
        });
    }, []);

    const projectStatus = () => {
        if (projectData.is_open = true) {
          return "This project is currently accepting pledges! Make a submission below."
        }
        return <Link to="/projects">Looks like this project has finished! Browse our open projects here.</Link>
        
      }

  
    const thisProjectStatus = projectStatus()

    // const remainingPledges = {projectData.goal} 

    // const projectPledges = () => {
    //     {projectData.pledges.map((pledgeData, key) => {
    //         return (
    //             <div>
    //                 {pledgeData}
    //             </div>
    //         );
    //         })}
    // }

    // const thisProjectPledges = projectData.pledges.map()

    function List({ items, fallback }) {
        if (!items || items.length === 0) {
          return fallback;
        } else {
            
          return items.map((item, key) => {
                if (item.anonymous) {
                    return (
                        <div key={key} className="pledge-wrapper">
                            <h4>{item.id}</h4>
                            <div > ${item.amount} from anonymous </div>
                            <p>{item.comment}</p>
                        </div>
                    )
                } else {
                    return (
                        <div key={key} className="pledge-wrapper">
                            <h4>Pledge #{item.id}</h4>
                            <div > ${item.amount} from {item.supporter} </div>
                            <p>{item.comment}</p>
                        </div>
                    )
                }    
          });
        }
      } 

    return (

    <div>
        <img src={projectData.image} className="project-img" />
        <div className="outer-wrapper">
        <div className="project-details">
        <h2>{projectData.title}</h2>
        <p>{projectData.description}</p>
        <p className="secondary-text">This project has a goal of {projectData.goal} pledges.</p>
        <p><i>{`${thisProjectStatus}`}</i></p>
        <h3>{projectData.title} has received the following pledges:</h3>

        <div className="pledge-outer-wrapper">
            <div className="pledge-list">
                <List items={projectData.pledges} fallback={"First in, best dressed - no one has has pledged to this project yet. Why not start a trend?"} />
            </div>
        </div>
        
        <div className="submit-pledge">
            <Link to={`/projects/${projectData.id}/pledge`}>
                <button className="pledge-button">Make a pledge!</button>
            </Link>
        </div>

        </div></div>

        <UpdateProjectForm />
        
    </div>
);
}

export default ProjectPage;