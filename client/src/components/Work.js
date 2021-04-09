import React, { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";
import MMsGCo from '../images/MMsGaming.png';
import MyStripes from '../images/My-Stripes.jpg';
import PaddleBalls from '../images/Paddle-Balls.png';
import DDD from '../images/DDD.png';
import { FaPhp, FaHtml5, FaCss3, FaJs, FaAndroid } from 'react-icons/fa';

const Project = (props) => {

    const { title, description, image, url, repo } = props

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
                    <p onClick={(e) => {
                            e.preventDefault();
                            window.open(repo, "_blank")
                        }}><a href="">Repo</a></p>
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
                    description={"A place for gamers to play free online games! If they have an account, as they play they will earn points. Gamers can use the points to get colored backgrounds, image backgrounds, circle trails, fonts, and custom cursors.\n\nCreated with XAMPP, MySQL, HTML5, CSS3, JavaScript, Ajax and PHP"}
                    image={MMsGCo}
                    url="https://mms-gaming.com/"
                    repo="https://github.com/mmhousto/MMsGaming"
                />
                <br/><br/>
                <Project
                    title="My Stripes"
                    description={"An e-commerce website for a clothing app. A remake of the Ruby on Rails version.\n\nCreated with Postgres, Express, React, Node.JS, SCSS, Heroku and JavaScript"}
                    image={MyStripes}
                    url="http://my-stripes.herokuapp.com/"
                    repo="https://github.com/zda17/MyStripesShop---API"
                />
                <br/><br/>
                <Project
                    title="Paddle Balls"
                    description={"A native mobile arcade game, like pong with gravity!\nAvailable on iOS, Android and PC.\n\nCreated with Unity Engine and C#"}
                    image={PaddleBalls}
                    url="https://apps.apple.com/us/app/paddle-balls/id1549834349"
                    repo="https://github.com/mmhousto/Gravity-Balls"
                />
                <br/><br/>
                <Project
                    title="Del Delivery Drivers"
                    description={"A web app, created to compare the prices of different delivery services.\n\nCreated with XAMPP, Apache, MySQL, HTML5, CSS3, JavaScript, PHP, and Google Maps API"}
                    image={DDD}
                    url="https://github.com/mmhousto/DeliveryDatabase"
                    repo="https://github.com/mmhousto/DeliveryDatabase"
                />
                <br/><br/>
            </div>
        </>
    );
}

export default Work;