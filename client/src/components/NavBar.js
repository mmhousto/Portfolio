import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//style
import '../style/NavBar.scss';

const TopBanner = ({ navLinks }) => {
    return (
        <>
            <ul className='top-bar'>
                {navLinks.map((link, key) => 
                <li key={key}>
                    <Link
                        id={link.id}
                        to={link.path}
                    >
                        {link.text}
                    </Link>
                </li>
                )}
            </ul>
        </>
    )
}

const SideBanner = ({ navLinks, linkColor }) => {
    return (
        <>
            <ul className='side-bar'>
            {navLinks.map((link, key) => 
                <li key={key}>
                    <Link
                        id={link.id}
                        to={link.path}
                        style={{ color: linkColor,
                                padding: 10 }}
                    >
                        {link.icon}
                    </Link>
                </li>
                )}
            </ul>
        </>
    )
}

const NavBar = ({ navLinks, linkColor }) => {

    const [hoverIndex, setHoverIndex] = useState(-1);
    const [navOpen, setNavOpen] = useState(false);

    const [windowWidth, setWindowWidth] = useState(0);
    let resizeWindow = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    return(
        <>
            <nav class="responsive-nav">
                {windowWidth >= 712 ?
                    <TopBanner
                    navLinks={navLinks} />
                    :
                    <SideBanner
                    navLinks={navLinks}
                    linkColor="white" />
                }
            </nav>

        </>
    );
}

export default NavBar;