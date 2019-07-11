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
          <h2 className="about-name">My name is <span>Katarina</span></h2>
          <div className="info-section">
            <p className="bio-text">
            <span></span>I am a photographer from Ukraine, now based in Beijing (China). I am happy to introduce my art here. <br/>Its a mixture of photography, digital art and my dreams. Around 10 years I have been working professionally in the photographic field. I think that ordinary studio photography is a little bit boring, its just some kind of hunting for the fake emotion. But! If you can create some kind of story or interesting character using skills of post production and then build your own world - that is really amazing. 
            I am just trying to create a mood in the best way I feel. Welcome!
            I make another - a fabulous reality. There are no rules here. With the help of thoughts, fantasies and images, you can create new moods. We all live in the wild rhythms of big cities, forgetting in a hurry about miracles. I would like to share a part of my fantasies, at least for a moment try to stop the usual flow of time and give a person the opportunity to dream a little
            </p>
          </div>
        </div>
        
      </div>
    )
  }
}
