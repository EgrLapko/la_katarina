import React, { Component } from 'react';
// import { ContextConsumer } from '../../../context/context';

export default class SingleImage extends Component {
    render() {
        const { srcBig } = this.props;
        return (
            <div className="project-image-container">
                <img src={srcBig} alt="project" />
            </div>
        )
    }
}
