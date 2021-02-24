import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import './index.css';
import './App.css';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";

const App = ()=> {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/contact' component={Contact}/>
      <Route exact path='/skills' component={Skills}/>
      <Route exact path='/about' component={About}/>
      <Redirect to = "/"></Redirect>
    </Switch>
    </>
  );
}

export default App;
