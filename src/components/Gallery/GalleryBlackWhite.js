import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Photo from './Photo';
import photos from '../../photos';

export default class GalleryBlackWhite extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
  render() {
    return (
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
            </Fade>        
        </div>
    )
  }
}

