import React, { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";
import MMsGCo from '../images/MMsGCoo.png';

const Project = (props) => {

    const { title, description, image, url } = props

    return (
        <>
            <div className="project-container">
                <div className="image-container">
                    <img src={image}></img>
                </div>
                <div className="text-container">
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            window.open(url, "_blank")
                        }}>View</button>
                </div>
            </div>
        </>
    );
}

const Work = () => {

    return (
        <>
            <div className="work-container">
                <hr /><br />
                <div className="text">
                    <h2>My Projects</h2>
                </div>
                <Project
                    title="MM's Gaming Community"
                    description="A place for gamers to play free games!"
                    image={MMsGCo}
                    url="https://mms-gaming.com/"
                />
            </div>
        </>
    );
}

export default Work;