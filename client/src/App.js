import React from 'react';
import logo from './logo.svg';
import './style/App.scss';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


//routes
import Home from './routes/Home';

function App() {

  return (
    <Home />
  );
}

export default App;
