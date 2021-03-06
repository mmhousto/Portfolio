import React from 'react';
import './style/App.scss';

//component
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';

//libs
import Font from 'react-font';

//routes
import Home from './routes/Home';

function App() {

  return (
    <div className="wrapper">
      <Font family='Rubik'>
        <NavBar />
        <Home />
        <Footer />
      </Font>
    </div>

  );
}

export default App;
