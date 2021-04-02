import React from 'react';
import '../style/Home.scss';

import Banner from '../components/Banner.js';
import Work from '../components/Work.js';
import Font from 'react-font';

function Home() {

    return (
        <>
        <Font family='Rubik'>
            <Banner/>
            <Work/>
        </Font>
        </>
    );
}

export default Home;