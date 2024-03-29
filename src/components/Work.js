import React, { useEffect } from 'react';
import MMsGCo from '../images/MMsGaming.png';
import MyStripes from '../images/My-Stripes.jpg';
import PaddleBalls from '../images/Paddle-Balls.png';
import DDD from '../images/DDD.png';
import MagnetDestroyer from '../images/MagnetDestroyer.png';
import ZombCube from '../images/ZombCube.png';
import { FaGithubSquare } from 'react-icons/fa';
import AOS from "aos";
import 'aos/dist/aos.css';

const Project = (props) => {

    const { title, description, image, url, repo } = props

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <>
            
                <div className="project-container" data-aos="flip-left" data-aos-easing="ease-in-cubic" tabIndex="0" onClick={(e) => {
                    e.preventDefault();
                    window.open(url, "_blank")
                }}><a>
                    <div className="image-container">
                        <img src={image} />
                    </div>

                    <div className="text-container">
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <p onClick={(e) => {
                            e.preventDefault();
                            window.open(repo, "_blank")
                        }}><FaGithubSquare size={45} className="git" /></p>
                    </div>
                    </a>
                </div>
        </>
    );
}

const Work = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        window.addEventListener('load', AOS.refresh);
    }, []);


    return (
        <>
            <div id="Project" className="work-container">
                <div className="text" data-aos='slide-left'>
                    <h2>My Projects</h2>
                </div>
                <br /><br />

                <Project
                    title="ZombCube"
                    description={"Play ZombCube, a 3D fps, zombie-survival game for free online on PC, Xbox, MacOS, tvOS, iOS, and Android.\n\nCreated with the Unity Engine"}
                    image={ZombCube}
                    url="https://mms-gaming.com/ZombCube/"
                    repo="https://github.com/mmhousto/ZombCube"
                />
                <br /><br />

                <Project
                    title="Paddle Balls"
                    description={"A native mobile arcade game, like pong with gravity!\nAvailable on iOS, Android and PC.\n\nCreated with Unity Engine and C#"}
                    image={PaddleBalls}
                    url="https://mms-gaming.com/Gravity-Balls/"
                    repo="https://github.com/mmhousto/Gravity-Balls"
                />
                <br /><br />

                <Project
                    title="Magnet Destroyer"
                    description={"Play this new, free, casual, arcade game, Magnet Destroyer! Available on iOS and Android.\n\nCreated with Unity and Sloyd.ai"}
                    image={MagnetDestroyer}
                    url="https://mms-gaming.com/Magnet-Destroyer/"
                    repo="https://github.com/mmhousto/Magnet-Destroyer"
                />
                <br /><br />

                <Project
                    title="MM's Gaming Community"
                    description={"A place for gamers to play free online games and discuss gaming! If they have an account, as they play they will earn points. Gamers can use the points to get colored backgrounds, image backgrounds, circle trails, fonts, and custom cursors.\n\nCreated with XAMPP, MySQL, HTML5, CSS3, JavaScript, Ajax and PHP"}
                    image={MMsGCo}
                    url="https://mms-gaming.com/"
                    repo="https://github.com/mmhousto/MMsGaming"
                />
                <br /><br />

                <Project
                    title="My Stripes"
                    description={"An e-commerce website for a clothing app. A remake of the Ruby on Rails version.\n\nCreated with Postgres, Express, React, Node.JS, SCSS, Heroku and JavaScript"}
                    image={MyStripes}
                    url="http://my-stripes.herokuapp.com/"
                    repo="https://github.com/zda17/MyStripesShop---API"
                />
                <br /><br />
                
                <Project
                    title="Del Delivery Drivers"
                    description={"A web app, created to compare the prices of different delivery services.\n\nCreated with XAMPP, Apache, MySQL, HTML5, CSS3, JavaScript, PHP, and Google Maps API"}
                    image={DDD}
                    url="https://github.com/mmhousto/DeliveryDatabase"
                    repo="https://github.com/mmhousto/DeliveryDatabase"
                />
                <br /><br />
            </div>
        </>
    );
}

export default Work;