import React, { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";

const Banner = () => {

    return(
        <>
        <div className="banner-container">
            <div className="text">
                <TextLoop
                    springCofig={{stiffness: 70, damping: 31 }}
                    adjustingSpeed={500}
                    interval={1500}
                    >
                        <span>Hello,</span>
                        <span>Hola,</span>
                        <span>Bonjour,</span>
                        <span>Konnichiwa,</span>
                        <span>Guten Tag,</span>
                        <span>Nǐn hǎo,</span>
                        <span>Namaste,</span>
                        <span>Shalom,</span>
                        <span>God dag,</span>
                    </TextLoop>{" "}
                <br/><br/><h1>My name is Morgan Houston. I am a Junior Game & Web Developer!</h1>
            </div>
        </div>
        </>
    );
}

export default Banner;