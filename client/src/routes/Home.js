import React from 'react';

//style
import '../style/Home.scss';

//components
import Banner from '../components/Banner.js';
import Work from '../components/Work.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';

//libs
import Font from 'react-font';

function Home() {

    return (
        <>
        <Font family='Rubik'>
            <Banner/>
            <Work/>
            <About/>
            <Contact/>
        </Font>
        </>
    );
}

export default Home;