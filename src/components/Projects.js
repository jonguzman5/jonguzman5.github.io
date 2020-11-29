import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import ProjectCard from './ProjectCard';
import '../css/Projects.css';
import buyit from '../img/buy-it.gif';
import designpad from '../img/design-pad.gif';

function Projects(){
    return (
        <div className="projects-container">
            <Nav/>
            <div className="projects-header">
                <h1>Projects</h1>
            </div>
            <div className="projects-body">
                <Link to="/projects/buyit">
                    <ProjectCard
                        name="buy-it"
                        image={buyit}
                        desc="A React Native app"
                    />
                </Link> 

                <Link to="/projects/designpad">
                    <ProjectCard
                        name="design-pad"
                        image={designpad}
                        desc="A React app"
                    />
                </Link>                               
            </div>
        </div>
    );
}

export default Projects;
