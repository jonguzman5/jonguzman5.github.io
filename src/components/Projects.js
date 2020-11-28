import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import '../css/Projects.css';

function Projects(){
    return (
        <div>
            <Nav/>
            <h1>Projects</h1>
            <p><Link to="/projects/projectsubpage">Link to Project</Link></p>
        </div>
    );
}

export default Projects;
