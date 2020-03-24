import React, { Component } from 'react';
// import { ContextConsumer } from '../../context/context';

export default class Photo extends Component {
  render() {

    const {index, srcBig} = this.props;

    // <div className="img-container">
    //   <img src = {src} srcbig={srcBig} alt="" key={index} onClick={() => handleModal(imgId, srcBig)} />
    // </div>

    return (
            <div className="img-container">
              <img src={srcBig} alt="gallery-element" key={index} />
            </div>
          )
  }
}
