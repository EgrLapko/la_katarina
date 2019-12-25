import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import { english, chinese } from '../../language';
import ProjectItem from './ProjectItem';

export default class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        const {match} = this.props;
        const shamansImage = "https://pic.yupoo.com/yehorlapko/9c0a0ae3/30e0d4ad.jpg";
        const ukraineImage = "https://pic.yupoo.com/yehorlapko/fcece064/abef8635.jpg";
        const steampunkImage = "https://pic.yupoo.com/yehorlapko/a91054ba/57398423.jpg"

        return (
            <ContextConsumer>
                {value => {
                    const { cn } = value
                    return (
                        <div className="projects-page">
                            <h3 className="projects-title">{cn ? chinese.projectsTitle : english.projectsTitle}</h3>
                            <div className="projects-container">
                                <Link className="projects-link" to={`${match.url}/shamans`}>
                                    <ProjectItem 
                                        title={cn ? chinese.project1 : english.project1}
                                        image={shamansImage}
                                    />
                                </Link>
                                
                                <Link className="projects-link" to={`${match.url}/ukrainian_beauty`}>
                                    <ProjectItem 
                                        title={cn ? chinese.project2 : english.project2}
                                        image={ukraineImage}
                                    />
                                </Link>
                                
                                <Link className="projects-link" to={`${match.url}/steampunk`}>
                                    <ProjectItem 
                                        title={cn ? chinese.project3 : english.project3}
                                        image={steampunkImage}
                                    />
                                </Link>
                                
                            </div>  
                        </div>
                    )
                }}
            </ContextConsumer>
        )
    }
}
