import React from 'react';
import Nav from './Nav';
import Form from './Form'
import '../css/Contact.css';

function Contact(){
    return (
        <div className="contact-container">
            <Nav/>
            <div className="contact-header">
                <h1>Contact</h1>
            </div>
            <div className="contact-body">
                <p>Telephone: <a href="tel:347-322-6351">347-322-6351</a></p>
                <p>GitHub: <a href="https://www.github.com/jonguzman5">github.com/jonguzman5</a></p>
                <p>Email: <a href="mailto: jonguzman5@gmail.com">jonguzman5@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/jonguzman5">linkedin.com/in/jonguzman5</a></p>
                <Form/>
            </div>
        </div>
    );
}

export default Contact;
