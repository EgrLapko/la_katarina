import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import { english, chinese } from '../../language';

export default class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        const {match} = this.props;
        return (
            <ContextConsumer>
                {value => {
                    const { cn } = value
                    return (
                        <div className="projects-page">
                            <h3 className="projects-title">{cn ? chinese.projectsTitle : english.projectsTitle}</h3>
                            <div className="projects-container">
                                <div className="project-item">
                                    <Link to={`${match.url}/shamans`}><img src="../images/Projects/Covers/shamans_cover.jpg" alt=""/></Link>
                                    <Link to={`${match.url}/shamans`}><p className="project-title">{cn ? chinese.project1 : english.project1}</p></Link>
                                </div>
                                <div className="project-item">
                                    <Link to={`${match.url}/ukrainian_beauty`}><img src="../images/Projects/Covers/uabeauty_cover.jpg" alt=""/></Link>
                                    <Link to={`${match.url}/ukrainian_beauty`}><p className="project-title">{cn ? chinese.project2 : english.project2}</p></Link>
                                </div>
                                <div className="project-item">
                                    <Link to={`${match.url}/steampunk`}><img src="../images/Projects/Covers/steampunk_cover.jpg" alt=""/></Link>
                                    <Link to={`${match.url}/steampunk`}><p className="project-title">{cn ? chinese.project3 : english.project3}</p></Link>
                                </div>
                            </div>  
                        </div>
                    )
                }}
            </ContextConsumer>
        )
    }
}
