import React from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import sign from '../../images/sign.png';
import { chinese, english } from '../../language';


export const Navbar = () => {
  return (
    <ContextConsumer>
      {value => {
        const { handleNavMenu, navMenu, toggleBackCompart, toggleBackBw, toggleBackPortraits, toggleENG, toggleCN, eng, cn } = value;
        return (
          <React.Fragment>
              <div className="navbar">
                <div className="sign-logo">
                  <Link to="/"><img src={sign} alt="sign" /></Link>
                </div>

                <div className="lang-menu">
                  <button className={"btn lang-btn " + (eng && "lang-active")} onClick={toggleENG} >EN</button>
                  <button className={"btn lang-btn cn-btn " + (cn && "lang-active")} onClick={toggleCN}>中文</button>
                </div>

                <div className={"hamburger " + (navMenu && "hamburger-active")} onClick={() => handleNavMenu()}>
                  <div className="bar"/>
                </div>  
              </div>
              


              <nav className={"main-menu " + (navMenu && "menu-active")}>
                <div className="nav-menus">
                  <div className="menu-item">
                    <h2 className="menu-category"> {cn ? chinese.navTitle1 : english.navTitle1 } </h2>
                    <Link to="/gallery/images_compart"><p className="menu-option" onClick={() => {toggleBackCompart(); handleNavMenu()}}>{cn ? chinese.navTitle1Opt1 : english.navTitle1Opt1 }</p></Link>
                    <Link to="/gallery/images_bw"><p className="menu-option" onClick={() => {toggleBackBw(); handleNavMenu()}}>{cn ? chinese.navTitle1Opt2 : english.navTitle1Opt2 }</p></Link>
                    <Link to="/gallery/images_portraits"><p className="menu-option" onClick={() => {toggleBackPortraits(); handleNavMenu()}}>{cn ? chinese.navTitle1Opt3 : english.navTitle1Opt3 }</p></Link>
                  </div>
                  <div className="menu-item">
                    <h2 className="menu-category">{cn ? chinese.navTitle2 : english.navTitle2 }</h2>
                    <Link to="/projects/overview"><p className="menu-option" onClick={handleNavMenu}>{cn ? chinese.navTitle2Opt1 : english.navTitle2Opt1 }</p></Link>
                    <Link to="/projects/overview/shamans"><p className="menu-option" onClick={handleNavMenu}>{cn ? chinese.navTitle2Opt2 : english.navTitle2Opt2 }</p></Link>
                    <Link to="/projects/overview/ukrainian_beauty"><p className="menu-option" onClick={handleNavMenu}>{cn ? chinese.navTitle2Opt3 : english.navTitle2Opt3 }</p></Link>
                    <Link to="/projects/overview/steampunk"><p className="menu-option" onClick={handleNavMenu}>{cn ? chinese.navTitle2Opt4 : english.navTitle2Opt4 }</p></Link>
                  </div>
                  <div className="menu-item">
                    <h2 className="menu-category" onClick={handleNavMenu}>{cn ? chinese.navTitle3 : english.navTitle3}</h2>
                    <Link to="/about"><p className="menu-option" onClick={handleNavMenu}>{cn ? chinese.navTitle3Opt1 : english.navTitle3Opt1 }</p></Link>
                    <Link to="/contact"><p className="menu-option" onClick={handleNavMenu}>{cn ? chinese.navTitle3Opt2 : english.navTitle3Opt2 }</p></Link>
                  </div>
                </div>
              </nav>
          </React.Fragment>
        )
      }}
    </ContextConsumer>
  )
}

export default Navbar;
