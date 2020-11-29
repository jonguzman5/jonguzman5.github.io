import React from 'react';
import Nav from './Nav';
import '../css/BuyIt.css';
import buyit from '../img/buy-it.gif';

function BuyIt(){
    return (
        <div className="buyit-container">
            <Nav/>
            <div className="buyit-header">
                <h1>Buy-It</h1>
            </div>
            <div className="buyit-body">
                <img src={buyit} alt="Buy-It GIF"></img>
                <div className="buyit-desc">
                    <p>Technologies Used: React Native, PostgreSQL, and Node</p>
                    <a href="https://github.com/jonguzman5/buy-it">GitHub Link</a>
                </div>
            </div>
        </div>
    );
}

export default BuyIt;
