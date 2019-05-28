import React, { Component } from 'react';

export default class Photo extends Component {
  render() {

    const {src, index} = this.props;

    return (
      <div className="img-container">
        <img src = {src} alt="" key={index}/>
      </div>
    )
  }
}
