import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        const {match} = this.props;
        return (
            <div className="projects-page">
                <h3 className="projects-title">Art-projects</h3>
                <div className="projects-container">
                    <div className="project-item">
                        <Link to={`${match.url}/shamans`}><img src="../images/Projects/Covers/shamans_cover.jpg" alt=""/></Link>
                        <Link to={`${match.url}/shamans`}><p className="project-title">Shamans</p></Link>
                    </div>
                    <div className="project-item">
                        <Link to={`${match.url}/ukrainian_beauty`}><img src="../images/Projects/Covers/uabeauty_cover.jpg" alt=""/></Link>
                        <Link to={`${match.url}/ukrainian_beauty`}><p className="project-title">Ukrainian beauty</p></Link>
                    </div>
                    <div className="project-item">
                        <Link to={`${match.url}/steampunk`}><img src="../images/Projects/Covers/steampunk_cover.jpg" alt=""/></Link>
                        <Link to={`${match.url}/steampunk`}><p className="project-title">Steampunk Project</p></Link>
                    </div>
                </div>  
            </div>
        )
    }
}
