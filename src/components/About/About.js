import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import { english, chinese } from '../../language';

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <ContextConsumer>
        {value => {
          const { cn, eng } = value;
          return (
            <div className="about-page-wrapper">
              <div className="about-page">
                <h2 className="title">{cn ? chinese.aboutPageTitle : english.aboutPageTitle}</h2>
                <div className="info-box">
                  <div className="image-section">   
                    <img src="../images/katarina.jpg" alt=""/>
                  </div>
                  <h2 className="about-name">| <span>Katarina</span>Blazhievskaya |</h2>
                  { cn &&
                    <h3 className="about-name cn-name">| <span>CHINESE Katarina</span>CHINESE Blazhievskaya |</h3>
                  }
                  <Link to="/contact"><button className="btn dark-btn">{cn ? chinese.contactPageTitle : english.contactPageTitle}</button></Link>
                  <div className="info-section">
                    { eng ?
                      <p className="bio-text">
                        <span className="abzac"/>I am a photographer from Ukraine, now based in Beijing, China. I'm happy to show you my artworks here. I do fine-art photography, my works are a mixture of classical photography, digital editing, and some particles, that were taken out of dreams. <br/>
                        <span className="abzac"/>I`ve been working within the photographic field over 10 years. I realized once that ordinary studio photography is not for me, that it`s a bit boring, because I felt that it was just some kind of neverending hunting for the fake emotion. <br/> 
                        <span className="abzac"/>I understood that being able to create your own story, create your own character with unspoking background, and then, using the skills of post-production, materialize it and build your own world - that is really amazing. <br/>
                        <span className="abzac"/>I make another, dreamlike-reality. Here are no rules, no restrictions. <br/>
                        We all live in the wild rhytms of big cities, and in this chaos and continious hurry we`re forgetting about miracles. And what I want to do is just share a part of these miracles and, at least for a moment, try to stop this crazy flow of time, and give somebody a moment to dream for a while.
                      </p>
                      :
                      <p className="bio-text">
                        <span className="abzac"/>CHINESE I am a photographer from Ukraine, now based in Beijing, China. I'm happy to show you my artworks here. I do fine-art photography, my works are a mixture of classical photography, digital editing, and some particles, that were taken out of dreams. <br/>
                        <span className="abzac"/>CHINESE I`ve been working within the photographic field over 10 years. I realized once that ordinary studio photography is not for me, that it`s a bit boring, because I felt that it was just some kind of neverending hunting for the fake emotion. <br/> 
                        <span className="abzac"/>CHINESE I understood that being able to create your own story, create your own character with unspoking background, and then, using the skills of post-production, materialize it and build your own world - that is really amazing. <br/>
                        <span className="abzac"/>CHINESE I make another, dreamlike-reality. Here are no rules, no restrictions. <br/>
                        We all live in the wild rhytms of big cities, and in this chaos and continious hurry we`re forgetting about miracles. And what I want to do is just share a part of these miracles and, at least for a moment, try to stop this crazy flow of time, and give somebody a moment to dream for a while.
                      </p>
                    }        
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ContextConsumer>
    )
  }
}
