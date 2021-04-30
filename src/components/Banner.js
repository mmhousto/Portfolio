import React, { useEffect } from 'react';
import TextLoop from "react-text-loop";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {

    useEffect(() => {
        AOS.init({
          // duration : 5000
        });
      }, []);

    return(
        <>
        <div id="Connect" className="banner-container">
            <div className="intro">
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
                <br/><br/><div data-aos="fade-up"><h1>My name is Morgan Houston. I am an aspiring Game & Web Developer!</h1></div>
            </div>

            <div className="social" data-aos="fade-up">
                <h2>Connect with me:</h2><br/>
                <h3><FaTwitter
                        className="icon"
                        size={70}
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://twitter.com/mm6sgamingco", "_blank")
                        }}
                    /> &nbsp;&nbsp;&nbsp;
                    <FaLinkedin
                        className="icon"
                        size={70}
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://linkedin.com/in/morgan-houston", "_blank")
                        }}
                    /> &nbsp;&nbsp;&nbsp;
                    <FaGithub
                        className="icon"
                        size={70}
                        onClick={(e) => {
                            e.preventDefault();
                            window.open("https://github.com/mmhousto", "_blank")
                        }}
                    /></h3>
            </div>
            <br/>
            <div className="arrow-container" data-aos="fade-up" tabIndex="0">
                <a data-scroll href="#Project">
                    <div className="arrow"></div>
                </a>
            </div>
        </div>
        </>
    );
}

export default Banner;