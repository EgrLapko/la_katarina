import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableSection, { ScrollableLink } from 'react-scrollable-url';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';

export default class MainPage extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ContextConsumer>
        {value => {
          const { toggleBackCompart, toggleBackBw, toggleBackPortraits } = value;
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
                        <ScrollableLink href="/compart_section">
                          <p>Computer art</p>
                        </ScrollableLink>
                        <ScrollableLink href="/bw_section">
                          <p>B/W images</p>
                        </ScrollableLink>
                        <ScrollableLink href="/portraits_section">
                          <p>Portraits</p>
                        </ScrollableLink>
                        <ScrollableLink href="/projects_section">
                          <p>Art projects</p>
                        </ScrollableLink>
                      </div>   
                    </div>
                  </Fade>        
                </Parallax>
              </Fade>

              <ScrollableSection name={'compart_section'}>
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
                        <Link to="/gallery/images_compart"><button className="btn" onClick={toggleBackCompart}>Browse Gallery</button></Link>
                      </div>          
                    </Fade>      
                </Parallax>
              </ScrollableSection>

              <ScrollableSection name={'bw_section'}>
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
                        <Link to="/gallery/images_bw"><button className="btn" onClick={toggleBackBw}>Browse Gallery</button></Link>
                      </div>  
                    </Fade>      
                </Parallax>
              </ScrollableSection>

              <ScrollableSection name={'portraits_section'}>
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
                        <Link to="/gallery/images_portraits"><button className="btn" onClick={toggleBackPortraits}>Browse Gallery</button></Link>
                      </div>  
                    </Fade>      
                </Parallax>
              </ScrollableSection>

              <ScrollableSection name={'projects_section'}>
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
                        <Link to="/projects/overview"><button className="btn">Open Projects</button></Link>
                      </div>  
                    </Fade>      
                </Parallax>
              </ScrollableSection>
            </section>
          )
        }}
      </ContextConsumer>
    )
  }
}
