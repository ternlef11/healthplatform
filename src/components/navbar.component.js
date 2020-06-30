import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="fixed-top navbar navbar-dark bg-dark navbar-expand">
        <Link to="/" className="navbar-brand">BRCA-DIRECT</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/excercise" className="nav-link">Check Participants</Link>
          </li>
          <li className="navbar-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="navbar-item">
          <Link to="/contentM" className="nav-link">Content Manager</Link>
          </li>
          <li className="navbar-item">
          <Link to="/slide8" className="nav-link">Slide 8</Link>
          </li>
          <li className="navbar-item">
          <Link to="/slide9" className="nav-link">Slide 9</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}

