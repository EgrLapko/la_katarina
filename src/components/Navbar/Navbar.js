import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import sign from '../../images/sign.png';

export default class Navbar extends Component {
  render() {
    return (
      <ContextConsumer>
        {value => {
          const { handleNavMenu, navMenu, toggleBackCompart, toggleBackBw, toggleBackPortraits, toggleENG, toggleCN, eng, cn } = value;
          return (
            <React.Fragment>
                <div className="hamburger">
                  <div className="sign-logo">
                    <Link to="/"><img src={sign} alt="sign" /></Link>
                  </div>
                  <div className="lang-menu">
                    <button className={"btn lang-btn " + (eng && "lang-active")} onClick={toggleENG} >EN</button>
                    <button className={"btn lang-btn " + (cn && "lang-active")} onClick={toggleCN} >中文</button>
                  </div>
                  <i className="fas fa-bars" onClick={() => handleNavMenu()}></i>
                </div>
                <nav className={"navbar " + (navMenu && "navbar-active")}>
                  <div className="nav-menus">
                    <div className="menu-item">
                      <h2 className="menu-category">Gallery</h2>
                      <Link to="/gallery/images_compart"><p className="menu-option" onClick={toggleBackCompart}>Computer Art</p></Link>
                      <Link to="/gallery/images_bw"><p className="menu-option" onClick={toggleBackBw}>B/W images</p></Link>
                      <Link to="/gallery/images_portraits"><p className="menu-option" onClick={toggleBackPortraits}>Portraits</p></Link>
                    </div>
                    <div className="menu-item">
                      <h2 className="menu-category">Projects</h2>
                      <Link to="/projects/overview"><p className="menu-option projects-link">Projects Page</p></Link>
                      <Link to="/projects/overview/shamans"><p className="menu-option">Shamans</p></Link>
                      <Link to="/projects/overview/ukrainian_beauty"><p className="menu-option">Ukrainian Beauties</p></Link>
                      <Link to="/projects/overview/steampunk"><p className="menu-option">Steampunk</p></Link>
                    </div>
                    <div className="menu-item">
                      <h2 className="menu-category">About Me</h2>
                      <Link to="/about"><p className="menu-option">Bio</p></Link>
                      <Link to="/contact"><p className="menu-option">Contact</p></Link>
                    </div>
                  </div>
                </nav>
            </React.Fragment>
            
          )
        }}
      </ContextConsumer>
     
    )
  }
}
