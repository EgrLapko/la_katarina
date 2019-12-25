import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProjectItem extends Component {
    render() {

        const { image, title, link } = this.props;

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
