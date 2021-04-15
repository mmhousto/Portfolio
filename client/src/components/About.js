import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
        AOS.init({
           duration : 1000
        });
      }, []);

    return (
        <>
        <div className="about-container">
                <div data-aos='slide-right'>
                    <h1>About Me</h1>
                </div>
            <hr/>
            <p>
                I love video games! Whether it is playing or developing them. Diving into another world is so fascinating to me.
            </p>
        </div>
        </>
    );
}

export default About;