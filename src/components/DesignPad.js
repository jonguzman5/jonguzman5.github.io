import React from 'react';
import Nav from './Nav';
import '../css/DesignPad.css';
import designpad from '../img/design-pad.gif';

function DesignPad(){
    return (
        <div className="designpad-container">
            <Nav/>
            <div className="designpad-header">
                <h1>Buy-It</h1>
            </div>
            <div className="designpad-body">
                <img src={designpad} alt="Buy-It GIF"></img>
                <div className="designpad-desc">
                    <p>Technologies Used: HTML, CSS, and React</p>
                    <a href="https://github.com/jonguzman5/design-pad">GitHub Link</a>
                </div>
            </div>
        </div>
    );
}

export default DesignPad;
