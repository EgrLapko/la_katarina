import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="sign-container">
          <Link to="/"><img src="./images/sign.png" alt=""/></Link>
        </div>
        <ul className="menu-container">
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/gallery" activeClassName="active">Gallery</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About/Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}
