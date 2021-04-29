import React from 'react';

//style
import '../style/Home.scss';

//components
import Banner from '../components/Banner.js';
import Work from '../components/Work.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';

function Home() {

    return (
        <>
            <Banner />
            <Work />
            <About />
            <Contact />
        </>
    );
}

export default Home;