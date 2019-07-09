import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

export default class MainPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="page">
        <Fade>       
          <Parallax
              blur={0}
              bgImage={require('../../images/parallax/parallax1.jpg')}
              bgImageAlt="par1"
              strength={200}
              contentClassName="parallax-background first"
          >   
            <Fade>
              <div className="parallax-textbox">
                <div className="titles-section">
                  <h2>Katarina Blazhievskaya</h2>
                  <p>Photographer</p>
                </div>         
                <div className="genres-section">
                  <ScrollableLink href="/compart">
                    <p>Computer art</p>
                  </ScrollableLink>
                  <ScrollableLink href="/bw">
                    <p>B/W images</p>
                  </ScrollableLink>
                  <ScrollableLink href="/portraits">
                    <p>Portraits</p>
                  </ScrollableLink>
                  <ScrollableLink href="/projects">
                    <p>Art projects</p>
                  </ScrollableLink>
                </div>   
              </div>
            </Fade>        
          </Parallax>
        </Fade>

        <ScrollableSection name={'compart'}>
          <Parallax
                blur={0}
                bgImage={require('../../images/parallax/parallax2.jpg')}
                bgImageAlt="par2"
                strength={450}
                contentClassName="parallax-background second"
            >   
              <Fade bottom>
                <div className="parallax-secondary-section">
                  <h2 className="parallax-title">Computer Art Images</h2>
                  <Link to="/gallery/images_compart"><button className="btn">Browse Gallery</button></Link>
                </div>          
              </Fade>      
          </Parallax>
        </ScrollableSection>

        <ScrollableSection name={'bw'}>
          <Parallax
                blur={0}
                bgImage={require('../../images/parallax/parallax3.jpg')}
                bgImageAlt="par3"
                strength={600}
                contentClassName="parallax-background second"
            >   
              <Fade bottom>
                <div className="parallax-secondary-section">
                  <h2 className="parallax-title">B/W Pictures</h2>
                  <Link to="/gallery/images_bw"><button className="btn">Browse Gallery</button></Link>
                </div>  
              </Fade>      
          </Parallax>
        </ScrollableSection>

        <ScrollableSection name={'portraits'}>
          <Parallax
                blur={0}
                bgImage={require('../../images/parallax/parallax4.jpg')}
                bgImageAlt="par4"
                strength={800}
                contentClassName="parallax-background second"
            >   
              <Fade bottom>
                <div className="parallax-secondary-section">
                  <h2 className="parallax-title">Portraits</h2>
                  <Link to="/gallery/images_portraits"><button className="btn">Browse Gallery</button></Link>
                </div>  
              </Fade>      
          </Parallax>
        </ScrollableSection>

        <ScrollableSection name={'projects'}>
          <Parallax
                blur={0}
                bgImage={require('../../images/parallax/parallax5.jpg')}
                bgImageAlt="par5"
                strength={400}
                contentClassName="parallax-background second"
            >   
              <Fade bottom>
                <div className="parallax-secondary-section">
                  <h2 className="parallax-title">Art Projects</h2>
                  <Link to="/gallery/images_shamans"><button className="btn">Browse Projects</button></Link>
                </div>  
              </Fade>      
          </Parallax>
        </ScrollableSection>
      </section>
    )
  }
}
