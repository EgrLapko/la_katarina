import React, { Component } from 'react';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about-page">
        <h2 className="title">About me</h2>
        
        <div className="info-box">
          <div className="image-section">   
            <img src="../images/katarina.jpg" alt=""/>
          </div>
          <div className="info-section">
            <h2 className="about-name">My name is <span>Katarina</span></h2>
          </div>
        </div>
        
      </div>
    )
  }
}
