import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import { english, chinese } from '../../language';
import ProjectItem from './ProjectItem';

import shamansCover from '../../images/covers/shamans_cover.jpg'
import ukraineCover from '../../images/covers/uabeauty_cover.jpg'
import steampunkCover from '../../images/covers/steampunk_cover.jpg'

export const Projects = ({match}) => {

    useEffect(() => window.scrollTo(0, 0), []); 

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
                                    image={shamansCover}
                                />
                            </Link>
                            
                            <Link className="projects-link" to={`${match.url}/ukrainian_beauty`}>
                                <ProjectItem 
                                    title={cn ? chinese.project2 : english.project2}
                                    image={ukraineCover}
                                />
                            </Link>
                            
                            <Link className="projects-link" to={`${match.url}/steampunk`}>
                                <ProjectItem 
                                    title={cn ? chinese.project3 : english.project3}
                                    image={steampunkCover}
                                />
                            </Link>
                            
                        </div>  
                    </div>
                )
            }}
        </ContextConsumer>
    )
}

export default Projects;

