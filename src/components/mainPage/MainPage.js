import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import ScrollableAnchor from 'react-scrollable-anchor';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import { chinese, english } from '../../language';

import parallax1 from '../../images/parallax/parallax1.jpg'
import parallax2 from '../../images/parallax/parallax2.jpg'
import parallax3 from '../../images/parallax/parallax3.jpg'
import parallax4 from '../../images/parallax/parallax4.jpg'
import parallax5 from '../../images/parallax/parallax5.jpg'

const MainPage = () => {

  useEffect(() => window.scrollTo(0, 0), []); 

  return (
    <ContextConsumer>
      {value => {
        const { toggleBackCompart, toggleBackBw, toggleBackPortraits, cn } = value;
        return (
          <section className="page">
            <Fade>       
              <Parallax
                  blur={0}
                  bgImage={parallax1}
                  bgImageAlt="par1"
                  strength={100}
                  contentClassName="parallax-background first"
              >   
                <Fade>
                  <div className="parallax-textbox">
                    <div className="titles-section">
                      <h2>{cn ? chinese.section1Title : english.section1Title }</h2>
                      <p>{cn ? chinese.section1SubTitle : english.section1SubTitle }</p>
                    </div>         
                    <div className="genres-section" >
                      <a href="#compart_section">
                        <p className="btn">{cn ? chinese.section1Menu1 : english.section1Menu1 }</p>
                      </a>
                      <a href="#bw_section">
                        <p className="btn">{cn ? chinese.section1Menu2 : english.section1Menu2 }</p>
                      </a>
                      <a href="#portraits_section">
                        <p className="btn">{cn ? chinese.section1Menu3 : english.section1Menu3 }</p>
                      </a>
                      <a href="#projects_section">
                        <p className="btn">{cn ? chinese.section1Menu4 : english.section1Menu4 }</p>
                      </a>
                    </div>   
                  </div>
                </Fade>        
              </Parallax>
            </Fade>

            <ScrollableAnchor id={'compart_section'}>
              <Parallax
                    blur={0}
                    bgImage={parallax2}
                    bgImageAlt="par2"
                    strength={250}
                    contentClassName="parallax-background second"
                >   
                  <Fade bottom>
                    <div className="parallax-secondary-section">
                      <h2 className="parallax-title">{cn ? chinese.section2Title : english.section2Title}</h2>
                      <Link to="/gallery/images_compart"><button className="btn" onClick={toggleBackCompart}>{cn ? chinese.section2SubTitle : english.section2SubTitle }</button></Link>
                    </div>          
                  </Fade>      
              </Parallax>
            </ScrollableAnchor>

            <ScrollableAnchor id={'bw_section'}>
              <Parallax
                    blur={0}
                    bgImage={parallax3}
                    bgImageAlt="par3"
                    strength={250}
                    contentClassName="parallax-background second"
                >   
                  <Fade bottom>
                    <div className="parallax-secondary-section">
                      <h2 className="parallax-title">{cn ? chinese.section3Title : english.section3Title }</h2>
                      <Link to="/gallery/images_bw"><button className="btn" onClick={toggleBackBw}>{cn ? chinese.section3SubTitle : english.section3SubTitle }</button></Link>
                    </div>  
                  </Fade>      
              </Parallax>
            </ScrollableAnchor>

            <ScrollableAnchor id={'portraits_section'}>
              <Parallax
                    blur={0}
                    bgImage={parallax4}
                    bgImageAlt="par4"
                    strength={100}
                    contentClassName="parallax-background second"
                >   
                  <Fade bottom>
                    <div className="parallax-secondary-section">
                      <h2 className="parallax-title ">{cn ? chinese.section4Title : english.section4Title }</h2>
                      <Link to="/gallery/images_portraits"><button className="btn" onClick={toggleBackPortraits}>{cn ? chinese.section4SubTitle : english.section4SubTitle }</button></Link>
                    </div>  
                  </Fade>      
              </Parallax>
            </ScrollableAnchor>

            <ScrollableAnchor id={'projects_section'}>
              <Parallax
                    blur={0}
                    bgImage={parallax5}
                    bgImageAlt="par5"
                    strength={250}
                    contentClassName="parallax-background second"
                >   
                  <Fade bottom>
                    <div className="parallax-secondary-section">
                      <h2 className="parallax-title">{cn ? chinese.section5Title : english.section5Title }</h2>
                      <Link to="/projects/overview"><button className="btn">{cn ? chinese.section5SubTitle : english.section5SubTitle }</button></Link>
                    </div>  
                  </Fade>      
              </Parallax>
            </ScrollableAnchor>
          </section>
        )
      }}
    </ContextConsumer>
  )
}

export default MainPage;