import React, { useState, useEffect } from 'react';

const Contact = () => {

    return (
        <>
        <div id="Contact" className="contact-container">
            <div data-aos='slide-left'>
                <h1>Contact Me</h1>
            </div>
            <br/>
            <div className="contact-text">
                <p>{'You can reach me by\nPhone: (918) 606-2038\nEmail: '}<a href="mailto:mmhouston6@live.com">mmhouston6@live.com</a>{'\n'}<a href="https://mms-gaming.com/contactform.html" target="_blank">MMs Gaming Community Contact Form</a></p>
            </div>
        </div>
        </>
    );
}

export default Contact;