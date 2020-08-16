import React from 'react';
import { Link } from 'react-router-dom';

//style
import '../style/NavBar.scss';

const TopBanner = () => {
    return (
        <>
            <h2>Morgan Houston</h2>
            <ul className='top-bar'>
                <li><Link id='projects' to='/Projects'>PROJECTS</Link></li>
                <li><Link id='about' to='/About'>ABOUT</Link></li>
                <li><Link id='contact' to='/Contact'>CONTACT</Link></li>
            </ul>
        </>
    )
}

const NavBar = () => {

    return(
        <>
            <nav>
                <TopBanner />
            </nav>

        </>
    );
}

export default NavBar;