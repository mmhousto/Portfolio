import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Me from '../images/me.png';
import Arrow from '../images/up-arrow-with-scribble.png';

// Speech Bubble component
const Bubble = (props) => {

    // creates state for text to change in speech bubble and defines an array of text options to cycle through.
    const [text, setText] = useState("I love video games! Whether it is playing or developing them. Diving into another world is so fascinating to me.");
    const texts = [];
    const [i, setI] = useState(1);
    texts.push('I love video games! Whether it is playing or developing them. Diving into another world is so fascinating to me.');
    texts.push('My top tech skills are JavaScript, C#, SQL, and node.js!');
    texts.push('I am a highly motivated individual, who will stop at nothing until everything is perfect.');
    texts.push('Interested in Software, Game, Mobile, and Web development opportunities.');
    texts.push('React.JS is the bees knees! It is fast and you only need the basics - HTML, CSS, and JavaScript - and node.JS.');
    texts.push('My first game I ever played was, Mario Party 2, on the N64. One of my favorite games is Borderlands 2.');
    texts.push('I currently work in IT, for MCNC, as a Support Specialist. This allows my problem solving skills to continue to grow.');

    // changes text to next string in array.
    function changeText() {
        setI(i + 1);                  // increases i
        if (i >= texts.length - 1) {    // if i > lenght of array, sets i = 0
            setI(0)
        }
        setText(texts[i]);          // Sets new text
    }

    return (
        <>
            <div className="bubble-container" onClick={changeText}>
                <div className="bubble" >
                    <p>
                        {text}
                    </p>
                </div>
                <div className="click-me">
                    <img src={Arrow} alt="Up arrow Icon from Flaticon made by Freepik" />
                    <div className="click-me-text">Click Here</div>
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
                <Bubble />
                <div className="image-container">
                    <img
                        src={Me} alt="Picture of Morgan Houston, Game & Web Developer"
                    />
                </div>

            </div>
        </>
    );
}

export default About;