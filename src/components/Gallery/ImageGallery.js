import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { NavLink, Route } from 'react-router-dom';
import GalleryCategories from './GalleryCategories';

import Photo from './Photo';
import photos from '../../photos';


export default class ImageGallery extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    const {match} = this.props;

    return (
      <div className='gallery-main-container'>
        <div className="gallery-inner-container">
          <div className="gallery-main-textbox">
            <Fade>
              <h2 className="gallery-title">Image Gallery</h2>
              <div className="gallery-categories">
                <NavLink to={`${match.url}/images_compart`} activeClassName="active-submenu"><p>Compart</p></NavLink>
                <NavLink to={`${match.url}/images_bw`} activeClassName="active-submenu"><p>Black and White</p></NavLink>
                <NavLink to={`${match.url}/images_portraits`} activeClassName="active-submenu"><p>Portraits</p></NavLink>
                <NavLink to={`${match.url}/images_shamans`} activeClassName="active-submenu"><p>Shamans</p></NavLink>
              </div>
            </Fade>    
          </div>
          <Route exact path={match.path} component={GalleryCategories}/>
          
          <Route path = {`${match.path}/images_compart`} render={() =>  
          <div className="images-container compart-container">
            <h2>Images. Compart</h2>
            <Fade right>
              <div className="gallery">
                <div className ="gallery-column">
                  {photos.map(picture => picture.position === "compart column 1" && <Photo
                    src = {picture.src}
                    title = {picture.title}
                    key = {picture.index}
                  />)}
                </div>
                <div className ="gallery-column">
                  {photos.map(picture => picture.position === "compart column 2" && <Photo
                    src = {picture.src}
                    title = {picture.title}
                    key = {picture.index}
                  />)}
                </div>
                <div className ="gallery-column">
                  {photos.map(picture => picture.position === "compart column 3" && <Photo
                    src = {picture.src}
                    title = {picture.title}
                      key = {picture.index}
                  />)}
                </div>
              </div>
              <div className="gallery-mobile">
                {photos.map(picture => picture.category === "compart" && <Photo
                    src = {picture.src}
                    title = {picture.title}
                    key = {picture.index}
                  />)}
              </div>
            </Fade>  
          </div>       
          } />
  
        <Route path = {`${match.path}/images_bw`} render={() =>  
          <div className="images-container bw-container">
              <h2>Images. Black and White</h2>
              <Fade right>
              <div className="gallery">
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "bw column 1" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "bw column 2" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "bw column 3" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
              </div>
              <div className="gallery-mobile">
                {photos.map(picture => picture.category === "bw" && <Photo
                    src = {picture.src}
                    title = {picture.title}
                    key = {picture.index}
                  />)}
              </div>
              </Fade>        
          </div>
          } />
  
        <Route path = {`${match.path}/images_portraits`} render={() =>  
          <div className="images-container portraits-container">
              <h2>Images. Portraits</h2>
              <Fade right>
              <div className="gallery">
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "portraits column 1" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "portraits column 2" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "portraits column 3" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
              </div>
              <div className="gallery-mobile">
                {photos.map(picture => picture.category === "portraits" && <Photo
                    src = {picture.src}
                    title = {picture.title}
                    key = {picture.index}
                  />)}
              </div>
              </Fade>        
          </div>
          } />
  
          <Route path = {`${match.path}/images_shamans`} render={() =>  
            <div className="images-container shamans-container">
              <h2>Images. Shamans project</h2>
              <Fade right>
              <div className="gallery">
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "shamans column 1" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "shamans column 2" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
                  <div className ="gallery-column">
                  {photos.map(picture => picture.position === "shamans column 3" && <Photo
                      src = {picture.src}
                      title = {picture.title}
                      key = {picture.index}
                  />)}
                  </div>
              </div>
              <div className="gallery-mobile">
                {photos.map(picture => picture.category === "shamans" && <Photo
                    src = {picture.src}
                    title = {picture.title}
                    key = {picture.index}
                  />)}
              </div>
              </Fade>        
            </div>
          } />
          
        </div>  
      </div>
    )
  }
}




