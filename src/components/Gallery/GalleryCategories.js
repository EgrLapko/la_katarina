import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import Fade from 'react-reveal/Fade';


export default class GalleryCategories extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
  render() {
    return (
        <div className="genres-list-container">
        <div className="genre-element">
          <Parallax
              blur={0}
              bgImage={require('../../images/parallax2/compart_category.jpg')}
              bgImageAlt="par2"
              strength={200}
              contentClassName="parallax-background third"
            >   
            <Fade bottom>
              <div className="parallax-secondary-section">
                <Link to="/gallery/images_compart"><h2 className="parallax-title">Outworld</h2></Link>
              </div>          
            </Fade>      
          </Parallax>
        </div>
        <div className="genre-element">
          <Parallax
              blur={0}
              bgImage={require('../../images/parallax2/bw_category.jpg')}
              bgImageAlt="par2"
              strength={400}
              contentClassName="parallax-background third"
            >   
            <Fade bottom>
              <div className="parallax-secondary-section">
              <Link to="/gallery/images_bw"><h2 className="parallax-title">BW</h2></Link>
              </div>          
            </Fade>      
          </Parallax>
        </div>
        <div className="genre-element">
          <Parallax
              blur={0}
              bgImage={require('../../images/parallax2/portraits_category.jpg')}
              bgImageAlt="par2"
              strength={600}
              contentClassName="parallax-background third"
            >   
            <Fade bottom>
              <div className="parallax-secondary-section">
                <Link to="/gallery/images_portraits"><h2 className="parallax-title">Portraits</h2></Link>
              </div>          
            </Fade>      
          </Parallax>
        </div>
        <div className="genre-element">
          <Parallax
              blur={0}
              bgImage={require('../../images/parallax2/shamans_category.jpg')}
              bgImageAlt="par2"
              strength={800}
              contentClassName="parallax-background third"
            >   
            <Fade bottom>
              <div className="parallax-secondary-section">
                <Link to="/gallery/images_shamans"><h2 className="parallax-title">Shamans</h2></Link>
              </div>          
            </Fade>      
          </Parallax>
        </div>
      </div> 
    )
  }
}
