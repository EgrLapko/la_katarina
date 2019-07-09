import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';

export default class Navbar extends Component {
  render() {
    return (
      <ContextConsumer>
        {value => {
          const { handleNavMenu, navMenu } = value;
          return (
            <React.Fragment>
                <i className="fas fa-bars hamburger" onClick={() => handleNavMenu()}></i>
            </React.Fragment>
            
          )
        }}
      </ContextConsumer>
     
    )
  }
}
