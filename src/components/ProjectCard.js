import React from 'react';

function ProjectCard(props){
    return (
        <div className="projectcard-container">
            <div className="projectcard-header">
              <h3>{props.name}</h3>
              <img src={props.image} alt="Project GIF"></img>
            </div>
            <div className="projectcard-body">
              <p>{props.desc}</p>
            </div>
        </div>
    );
}

export default ProjectCard;
