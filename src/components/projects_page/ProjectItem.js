import React, { Component } from 'react';

export default class ProjectItem extends Component {
    render() {

        const { image, title } = this.props;

        const backImage = {
            backgroundImage: `url(${image})`
        }

        return (
                <div className="project-item">
                        <h2 className="title-text"> {title} </h2>
                        <div className="item-container" style={backImage} />    
                </div>            
        )
    }
}
