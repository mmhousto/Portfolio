import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Me from '../images/me.png';


const Bubble = (props) => {

    const { text, placement } = props

    return (
        <>
            <div className="bubble-container">
                <div className="bubble" >
                    <p>
                        {text}
                    </p>
                </div>
                <div className="bubbles"></div>
                <div className="bubbles2"></div>
            </div>
        </>
    );
}

const About = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <>
            <div className="about-container">
                <div data-aos='slide-right'>
                    <h1>About Me</h1>
                </div>
                <hr />
                <Bubble
                    text='I love video games! Whether it is playing or developing them. Diving into another world is so fascinating to me.'
                />
                <img
                    src={Me} alt="Picture of Morgan Houston, Game & Web Developer"
                />
            </div>
        </>
    );
}

export default About;