import React, { Component } from 'react';
import { ContextConsumer } from '../../../context/context';

export default class SingleImage extends Component {
    render() {
        const { src, imgID } = this.props;
        return (
            <ContextConsumer>
                {value => {
                    const { handleModal } = value;
                    return (
                        <div className="project-image-container">
                            <img src={src} onClick={() => handleModal(imgID, src)} alt="project" />
                        </div>
                    )
                }}
            </ContextConsumer>
            
        )
    }
}
