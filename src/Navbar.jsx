import React, { useState } from 'react';
import './index.css';
import './App.css';
import { NavLink } from 'react-router-dom';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <>
      <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-md-10 col-10 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <h3 className="navbar-brand " disabled href="/">ReactJS</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink  activeClassName="menu_active"
           exact to="/"
           className="nav-link active" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active"
          exact to="/skills"
          className="nav-link active" aria-current="page">Skills</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active"
          exact to="/about"
          className="nav-link active" aria-current="page">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active"
            exact to="/contact"
           className="nav-link active" aria-current="page">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav></div></div></div>
    </>
  );
}

export default Example;