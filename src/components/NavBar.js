import React, { useState, useEffect } from 'react';

const NavBar = () => {

    return (
        <>
            <div className="NavBar-container">
                <ul id="nav">
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Project">Projects</a></li>
                    <li><a href="#Connect">Connect</a></li>
                </ul>
            </div>
        </>
    );
}

export default NavBar;