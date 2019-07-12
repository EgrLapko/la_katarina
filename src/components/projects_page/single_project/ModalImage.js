import React, { Component } from 'react';
import { ContextConsumer } from '../../../context/context';

export default class ModalImage extends Component {

    render() {

        return (
            <ContextConsumer>
                {value => {
                    const { modalOpen, imageSource, handleModal, imageId } = value;
                    return (
                        <div className={"modal-container " + (modalOpen ? "visible" : '')}>
                            <div className="modal-image-container">
                                <img src={imageSource} id={imageId} alt=""/>
                            </div>   
                            <button className="btn modal-close-btn" onClick={handleModal}>Close</button> 
                        </div>
                    )
                }}
            </ContextConsumer>
        )
    }
}
