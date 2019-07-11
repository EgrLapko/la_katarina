import React, { Component } from 'react'

export default class SingleImage extends Component {
    render() {
        return (
            <div className="project-image-container">
                <img src={this.props.src} alt="project" />
            </div>
        )
    }
}
