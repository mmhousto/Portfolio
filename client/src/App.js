import React from 'react';
import logo from './logo.svg';
import './style/App.scss';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//icons
import { FaHome, FaQuestionCircle, FaFolder, FaEnvelope } from 'react-icons/fa';

//routes
import Home from './routes/Home';
import NavBar from './components/NavBar';

function App() {

const navLinks = [
  {
      text: 'Morgan Houston',
      path: '/',
      icon: <FaHome 
              size={46}/>,
      id: 'home'
  },
  {
      text: 'PROJECTS',
      path: '/Projects',
      icon: <FaFolder
              size={46} />,
      id: 'projects'
  },
  {
      text: 'ABOUT ME',
      path: '/About',
      icon: <FaQuestionCircle
              size={46} />,
      id: 'about'
  },
  {
      text: 'CONTACT ME',
      path: '/Contact',
      icon: <FaEnvelope
              size={46} />,
      id: 'contact'
  }
]

  return (
    <Router>
      <>
        <NavBar 
          navLinks={navLinks}
        />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="#Projects">
            <Home />
          </Route>
          <Route exact path="#About-Me">
            <Home />
          </Route>
          <Route exact path="#Contact-Me">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
