 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/employee-details" className="nav-link">Search Employee</Link>
          </li>
          <li className="navbar-item">
          <Link to="/employee-form" className="nav-link">Employee Form</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}