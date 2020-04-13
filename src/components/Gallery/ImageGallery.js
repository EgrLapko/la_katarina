import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Route } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import Photo from './Photo';
import InnerNav from './InnerNav';
// import photos from '../../photos';
import photos_local from '../../photos_local';

import { english, chinese } from '../../language';

const ImageGallery = ({ match }) => {

  useEffect(() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'}), []);

  const options = {
    showCaption: false,
    showThumbnails: false,
    transitionSpeed: 400,
    transitionTimingFunction: "linear",
  };

  return (
      <ContextConsumer>
        {value => {
          const { compartGallery, bwGallery, portraitGallery, cn } = value;
          return (
            <div className={"gallery-main-container " + (compartGallery ? "compart-back" : null || bwGallery ? "bw-back" : null || portraitGallery ? "portraits-back" : null )}>
              <div className="gallery-inner-container">
                <InnerNav />
                
                <Route path = {`${match.path}/images_compart`} render={() =>  
                  <SimpleReactLightbox>
                    <SRLWrapper options={options}>
                      <div className="images-container">
                        <h2 className="genre-title">{cn ? chinese.galleryGenre1 : english.galleryGenre1}</h2>
                        <Fade>
                          <div className="gallery-container">
                            {photos_local.map(picture => picture.category === "compart" && <Photo
                              src = {picture.src}
                              srcBig = {picture.srcBig}
                              title = {picture.title}
                              key = {picture.index}
                              imgId = {picture.index}
                            />)}
                          </div>
                        </Fade> 
                      </div> 
                    </SRLWrapper>
                  </SimpleReactLightbox>
                        
                } />
        
              <Route path = {`${match.path}/images_bw`} render={() =>  
                <SimpleReactLightbox>
                  <SRLWrapper options={options}>
                    <div className="images-container">
                        <h2 className="genre-title">{cn ? chinese.galleryGenre2 : english.galleryGenre2}</h2>
                        <Fade>
                          <div className="gallery-container">
                            {photos_local.map(picture => picture.category === "bw" && <Photo
                                src = {picture.src}
                                srcBig = {picture.srcBig}
                                title = {picture.title}
                                key = {picture.index}
                                imgId = {picture.index}
                            />)}
                          </div>
                        </Fade>     
                    </div>
                  </SRLWrapper>
                </SimpleReactLightbox>
                } />
        
              <Route path = {`${match.path}/images_portraits`} render={() =>  
                <SimpleReactLightbox>
                  <SRLWrapper options={options}>
                    <div className="images-container">
                        <h2 className="genre-title">{cn ? chinese.galleryGenre3 : english.galleryGenre3}</h2>
                        <Fade>
                          <div className="gallery-container">
                            {photos_local.map(picture => picture.category === "portraits" && <Photo
                                src = {picture.src}
                                srcBig = {picture.srcBig}
                                title = {picture.title}
                                key = {picture.index}
                                imgId = {picture.index}
                            />)}
                          </div>
                        </Fade>     
                    </div>
                  </SRLWrapper>
                </SimpleReactLightbox>
              } />  
              </div>  
            </div>
          )
        }}
      </ContextConsumer>
  )
}

export default ImageGallery;



