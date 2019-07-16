import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { NavLink, Route } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';

import Photo from './Photo';
import photos from '../../photos';
import ModalImage from '../projects_page/single_project/ModalImage';
import { english, chinese } from '../../language';


export default class ImageGallery extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const {match} = this.props;

    return (
      <ContextConsumer>
        {value => {
          const { compartGallery, bwGallery, portraitGallery, toggleBackCompart, toggleBackBw, toggleBackPortraits, cn } = value;
          return (
            <div className={"gallery-main-container " + (compartGallery ? "compart-back" : null || bwGallery ? "bw-back" : null || portraitGallery ? "portraits-back" : null )}>
              <div className="gallery-inner-container">
                <div className="gallery-main-textbox">
                  <Fade>
                    <h2 className="gallery-title">{cn ? chinese.galleryTitle : english.galleryTitle}</h2>
                    <div className="gallery-categories">
                      <NavLink to={`${match.url}/images_compart`} activeClassName="active-submenu" onClick={toggleBackCompart}><p>{cn ? chinese.galleryGenre1 : english.galleryGenre1}</p></NavLink>
                      <NavLink to={`${match.url}/images_bw`} activeClassName="active-submenu" onClick={toggleBackBw}><p>{cn ? chinese.galleryGenre2 : english.galleryGenre2}</p></NavLink>
                      <NavLink to={`${match.url}/images_portraits`} activeClassName="active-submenu" onClick={toggleBackPortraits}><p>{cn ? chinese.galleryGenre3 : english.galleryGenre3}</p></NavLink>                    </div>
                  </Fade>    
                </div>
                
                <Route path = {`${match.path}/images_compart`} render={() =>  
                <div className="images-container compart-container">
                  <h2>{cn ? chinese.galleryGenre1 : english.galleryGenre1}</h2>
                  <Fade>
                    <div className="gallery">
                      <div className ="gallery-column">
                        {photos.map(picture => picture.position === "compart column 1" && <Photo
                          src = {picture.src}
                          title = {picture.title}
                          key = {picture.index}
                          imgId = {picture.index}
                        />)}
                      </div>
                      <div className ="gallery-column">
                        {photos.map(picture => picture.position === "compart column 2" && <Photo
                          src = {picture.src}
                          title = {picture.title}
                          key = {picture.index}
                          imgId = {picture.index}
                        />)}
                      </div>
                      <div className ="gallery-column">
                        {photos.map(picture => picture.position === "compart column 3" && <Photo
                          src = {picture.src}
                          title = {picture.title}
                            key = {picture.index}
                            imgId = {picture.index}
                        />)}
                      </div>
                    </div>
                    <div className="gallery-mobile">
                      {photos.map(picture => picture.category === "compart" && <Photo
                          src = {picture.src}
                          title = {picture.title}
                          key = {picture.index}
                          imgId = {picture.index}
                        />)}
                    </div>
                  </Fade> 
                  <ModalImage /> 
                </div>       
                } />
        
              <Route path = {`${match.path}/images_bw`} render={() =>  
                <div className="images-container bw-container">
                    <h2>{cn ? chinese.galleryGenre2 : english.galleryGenre2}</h2>
                    <Fade>
                    <div className="gallery">
                        <div className ="gallery-column">
                        {photos.map(picture => picture.position === "bw column 1" && <Photo
                            src = {picture.src}
                            title = {picture.title}
                            key = {picture.index}
                            imgId = {picture.index}
                        />)}
                        </div>
                        <div className ="gallery-column">
                        {photos.map(picture => picture.position === "bw column 2" && <Photo
                            src = {picture.src}
                            title = {picture.title}
                            key = {picture.index}
                            imgId = {picture.index}
                        />)}
                        </div>
                        <div className ="gallery-column">
                        {photos.map(picture => picture.position === "bw column 3" && <Photo
                            src = {picture.src}
                            title = {picture.title}
                            key = {picture.index}
                            imgId = {picture.index}
                        />)}
                        </div>
                    </div>
                    <div className="gallery-mobile">
                      {photos.map(picture => picture.category === "bw" && <Photo
                          src = {picture.src}
                          title = {picture.title}
                          key = {picture.index}
                          imgId = {picture.index}
                        />)}
                    </div>
                    </Fade>  
                    <ModalImage />      
                </div>
                } />
        
              <Route path = {`${match.path}/images_portraits`} render={() =>  
                <div className="images-container portraits-container">
                    <h2>{cn ? chinese.galleryGenre3 : english.galleryGenre3}</h2>
                    <Fade>
                    <div className="gallery">
                        <div className ="gallery-column">
                        {photos.map(picture => picture.position === "portraits column 1" && <Photo
                            src = {picture.src}
                            title = {picture.title}
                            key = {picture.index}
                            imgId = {picture.index}
                        />)}
                        </div>
                        <div className ="gallery-column">
                        {photos.map(picture => picture.position === "portraits column 2" && <Photo
                            src = {picture.src}
                            title = {picture.title}
                            key = {picture.index}
                            imgId = {picture.index}
                        />)}
                        </div>
                        <div className ="gallery-column">
                        {photos.map(picture => picture.position === "portraits column 3" && <Photo
                            src = {picture.src}
                            title = {picture.title}
                            key = {picture.index}
                            imgId = {picture.index}
                        />)}
                        </div>
                    </div>
                    <div className="gallery-mobile">
                      {photos.map(picture => picture.category === "portraits" && <Photo
                          src = {picture.src}
                          title = {picture.title}
                          key = {picture.index}
                          imgId = {picture.index}
                        />)}
                    </div>
                    </Fade> 
                    <ModalImage />       
                </div>
                } />
                
              </div>  
            </div>
          )
        }}
      </ContextConsumer>
      
    )
  }
}




