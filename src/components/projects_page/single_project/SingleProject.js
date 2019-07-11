import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import ProjectTitle from './ProjectTitle';
import SingleDescription from './SingleDescription';
import projects_images from '../projects_images';
import SingleImage from './SingleImage';

export default class SingleProject extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        const {match} = this.props;
        return (
            <div className="single-project-page">
                <Route path = {`${match.path}/shamans`} render={() =>  
                    <div className="single-project">
                        <Link to="/projects/overview"><button className="btn dark-btn">Back to Projects</button></Link>
                        <ProjectTitle title = "Shamans" />
                        <SingleDescription desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                        <div className="projects-gallery">
                            <div className="project-column">
                                {projects_images.map(image => image.position === "shamans column 1" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                            <div className="project-column">
                                {projects_images.map(image => image.position === "shamans column 2" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                            <div className="project-column">
                                {projects_images.map(image => image.position === "shamans column 3" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                        </div>
                    </div>       
                } />

                <Route path = {`${match.path}/ukrainian_beauty`} render={() =>  
                    <div className="single-project">
                        <Link to="/projects/overview"><button className="btn dark-btn">Back to Projects</button></Link>
                        <ProjectTitle title = "Ukrainian Beauty" />
                        <SingleDescription desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                        <div className="projects-gallery ukr-gallery">
                            <div className="project-column ukr-image">
                                {projects_images.map(image => image.position === "ukrainian column 1" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                            <div className="project-column ukr-image">
                                {projects_images.map(image => image.position === "ukrainian column 2" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                            <div className="project-column ukr-image">
                                {projects_images.map(image => image.position === "ukrainian column 3" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                        </div>
                    </div>             
                } />

                <Route path = {`${match.path}/steampunk`} render={() =>  
                    <div className="single-project">
                        <Link to="/projects/overview"><button className="btn dark-btn">Back to Projects</button></Link>
                        <ProjectTitle title = "Steampunk Project" />
                        <SingleDescription desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                        <div className="projects-gallery ukr-gallery">
                            <div className="project-column ukr-image">
                                {projects_images.map(image => image.position === "steampunk column 1" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                            <div className="project-column ukr-image">
                                {projects_images.map(image => image.position === "steampunk column 2" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                            <div className="project-column ukr-image">
                                {projects_images.map(image => image.position === "steampunk column 3" && 
                                    <SingleImage
                                        key = {image.id}
                                        src = {image.src}
                                    />
                                )}
                            </div>
                        </div>
                    </div>             
                } />
                
            </div>       
        )
    }
}
