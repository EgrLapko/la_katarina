import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Photo from './Photo';
import photos from '../../photos';

export default class GalleryPortraits extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
  render() {
    return (
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
            </Fade>        
        </div>
    )
  }
}
