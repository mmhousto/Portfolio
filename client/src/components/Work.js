import React, { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";
import MMsGCo from '../images/MMsGaming.png';
import { FaPhp, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';

const Project = (props) => {

    const { title, description, image, url } = props

    return (
        <>
            <div className="project-container" onClick={(e) => {
                            e.preventDefault();
                            window.open(url, "_blank")
                        }}>
                <div className="image-container">
                    <img src={image}/>
                </div>
                
                <div className="text-container">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}

const Work = () => {

    return (
        <>
            <div className="work-container">
                <div className="text">
                    <h2>My Projects</h2>
                </div>
                <hr /><br/><br/>
                <Project
                    title="MM's Gaming Community"
                    description={"A place for gamers to play free online games\nCreated with XAMPP, MySQL, HTML5, CSS3, Javascript, Ajax and PHP"}
                    image={MMsGCo}
                    url="https://mms-gaming.com/"
                />
            </div>
        </>
    );
}

export default Work;