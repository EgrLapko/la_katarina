import React, { Component } from 'react';
import { ContextConsumer } from '../../../context/context';
import { english, chinese } from '../../../language';


export default class ModalImage extends Component {
    render() {
        return (
            <ContextConsumer>
                {value => {
                    const { modalOpen, imageSource, handleModal, imageId, cn } = value;
                    return (
                        <div className={"modal-container " + (modalOpen ? "visible" : '')}>
                            <div className="overlay" onClick={handleModal} />
                            <div className="modal-image-container">
                                <img src={imageSource} id={imageId} alt=""/>
                            </div>   
                            <div className="overlay" onClick={handleModal} />
                            <button className="btn modal-close-btn" onClick={handleModal}>{cn ? chinese.closeBtn : english.closeBtn}</button> 
                        </div>
                    )
                }}
            </ContextConsumer>
        )
    }
}
