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
                                    <Link to={`${match.url}/shamans`}><img src="http://pic.yupoo.com/yehorlapko/3ba79344/482e2cef.jpg" alt=""/></Link>
                                    <Link to={`${match.url}/shamans`}><p className="project-title">{cn ? chinese.project1 : english.project1}</p></Link>
                                </div>
                                <div className="project-item">
                                    <Link to={`${match.url}/ukrainian_beauty`}><img src="http://pic.yupoo.com/yehorlapko/3975ff2c/26c3e11a.jpg" alt=""/></Link>
                                    <Link to={`${match.url}/ukrainian_beauty`}><p className="project-title">{cn ? chinese.project2 : english.project2}</p></Link>
                                </div>
                                <div className="project-item">
                                    <Link to={`${match.url}/steampunk`}><img src="http://pic.yupoo.com/yehorlapko/b7345f43/18453dec.jpg" alt=""/></Link>
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
