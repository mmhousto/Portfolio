import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Me from '../images/me.png';

// Speech Bubble component
const Bubble = (props) => {

    // creates state for text to change in speech bubble and defines an array of text options to cycle through.
    const [text, setText] = useState("I love video games! Whether it is playing or developing them. Diving into another world is so fascinating to me.");
    const texts = [];
    const [i, setI] = useState(1);
    texts.push('I love video games! Whether it is playing or developing them. Diving into another world is so fascinating to me.');
    texts.push('My top tech skills are JavaScript, C#, SQL, and node.js!');
    texts.push('I am a highly motivated individual, who will not stop until everything is perfect.');
    texts.push('Interested in Software, Game, Mobile, and Web development opportunities.');

    // changes text to next string in array.
    function changeText() {
        setI(i+1);                  // increases i
        if(i >= texts.length-1){    // if i > lenght of array, sets i = 0
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
                <Bubble/>
                <div className="click-me">Click Me</div>
                <img
                    src={Me} alt="Picture of Morgan Houston, Game & Web Developer"
                />
            </div>
        </>
    );
}

export default About;