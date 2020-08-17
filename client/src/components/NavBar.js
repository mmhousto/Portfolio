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

const SideBanner = ({ navLinks, linkColor, hoverColor }) => {

    const [hoverIndex, setHoverIndex] = useState(-1);

    return (
        <>
            <ul className='side-bar'>
            {navLinks.map((link, key) => 
                <li key={key}
                    onMouseEnter={ () => setHoverIndex(key)}
                    onMouseLeave={ () => setHoverIndex(-1)}
                >
                    <Link
                        id={link.id}
                        to={link.path}
                        style={{ 
                                color: hoverIndex === key ? (hoverColor || '#999') : 'white',
                                 }}
                    >
                        {link.icon}
                        {link.id.toUpperCase()}
                    </Link>
                </li>
                )}
            </ul>
        </>
    )
}

const NavBar = ({ navLinks }) => {

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
            
                {windowWidth >= 712 ?
                    <nav className="responsive-top">
                    <TopBanner
                    navLinks={navLinks} />
                    </nav>
                    :
                    <nav className="responsive-side">
                    <SideBanner
                    navLinks={navLinks}
                    linkColor="white"
                    hoverColor="gray" />
                    </nav>
                }

        </>
    );
}

export default NavBar;