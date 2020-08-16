import React from 'react';
import logo from './logo.svg';
import './style/App.scss';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//routes
import Home from './routes/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <>
        <NavBar />
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
