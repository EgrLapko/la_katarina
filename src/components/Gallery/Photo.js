import React, { Component } from 'react';
import { ContextConsumer } from '../../context/context';

export default class Photo extends Component {
  render() {

    const {src, index, imgId} = this.props;

    return (
      <ContextConsumer>
        {value => {
          const { handleModal } = value;
          return (
            <div className="img-container">
              <img src = {src} alt="" key={index} onClick={() => handleModal(imgId, src)} />
            </div>
          )
        }}
      </ContextConsumer>     
    )
  }
}
