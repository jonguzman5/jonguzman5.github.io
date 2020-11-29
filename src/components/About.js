import React from 'react';
import Nav from './Nav';
import '../css/About.css';
import resume from '../img/2020Resume.pdf';
import download from '../img/download.png';

function About(){
    return (
        <div className="about-container">
            <Nav/>
            <div className="about-header">
                <h1>About</h1>
            </div>
            <div className="about-body">
                <p>
                    A detail-oriented software engineer with the ability to establish a marketing foundation through the creation of an application or website. 
                    Proficient in front-end web development utilizing JavaScript, NodeJS, and React. 
                    Finds inspiration with every new project and uses learning experiences as building blocks for the next challenge. 
                    An individual with a background in visual arts, can bring unique perspective to the table.
                </p>
                <a src={download} href={resume} download>Download Resume</a>
            </div>
        </div>
    );
}

export default About;
