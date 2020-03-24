import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import ProjectTitle from './ProjectTitle';
import SingleDescription from './SingleDescription';
import projects_images from '../projects_images';
import SingleImage from './SingleImage';
// import ModalImage from './ModalImage';
import { ContextConsumer } from '../../../context/context';
import { english, chinese } from '../../../language';

export default class SingleProject extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        const {match} = this.props;

        const options = {
            showCaption: false,
            showThumbnails: false,
            transitionSpeed: 600,
            transitionTimingFunction: "linear",
            enablePanzoom: false
          };
        return (
            <ContextConsumer>
                {value => {
                    const { cn } = value;
                    return (
                        <React.Fragment>
                            <div className="single-project-page">

                                <Route path = {`${match.path}/shamans`} render={() => 
                                    <React.Fragment>
                                        <SimpleReactLightbox>
                                            <SRLWrapper options={options}>
                                                <div className="single-project shamans-back">
                                                    <Link to="/projects/overview"><button className="btn dark-btn"><i className="fas fa-chevron-left"></i>{cn ? chinese.backToProjectsBtn : english.backToProjectsBtn}</button></Link>
                                                    <ProjectTitle title = {cn ? chinese.singleProjectTitle1 : english.singleProjectTitle1} />
                                                    <SingleDescription desc = {cn ? chinese.singleProjectDesc1 : english.singleProjectDesc1} />
                                                    <div className="projects-gallery">
                                                        <div className="images-container">
                                                            {projects_images.map(image => image.project === "shamans" && 
                                                                <SingleImage
                                                                    key = {image.id}
                                                                    src = {image.src}
                                                                    srcBig = {image.srcBig}
                                                                    imgID = {image.id}
                                                                />
                                                            )}
                                                        </div>  
                                                    </div>
                                                </div>
                                            </SRLWrapper>
                                        </SimpleReactLightbox>
                                        {/* <ModalImage />        */}
                                    </React.Fragment> 
                                    
                                } />

                                <Route path = {`${match.path}/ukrainian_beauty`} render={() =>  
                                    <React.Fragment>
                                        <SimpleReactLightbox>
                                            <SRLWrapper options={options}>
                                                <div className="single-project ukr-back">
                                                    <Link to="/projects/overview"><button className="btn dark-btn"><i className="fas fa-chevron-left"></i>{cn ? chinese.backToProjectsBtn : english.backToProjectsBtn}</button></Link>
                                                    <ProjectTitle title = {cn ? chinese.singleProjectTitle2 : english.singleProjectTitle2}  />
                                                    <SingleDescription desc = {cn ? chinese.singleProjectDesc2 : english.singleProjectDesc2} />
                                                    <div className="projects-gallery">
                                                        <div className="images-container">
                                                            {projects_images.map(image => image.project === "ukrainian" && 
                                                                <SingleImage
                                                                    key = {image.id}
                                                                    src = {image.src}
                                                                    srcBig = {image.srcBig}
                                                                    imgID = {image.id}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div> 
                                            </SRLWrapper>
                                        </SimpleReactLightbox>        
                                        {/* <ModalImage /> */}
                                    </React.Fragment>             
                                } />

                                <Route path = {`${match.path}/steampunk`} render={() =>  
                                    <React.Fragment>
                                        <SimpleReactLightbox>
                                            <SRLWrapper options={options}>
                                                <div className="single-project steampunk-back">
                                                    <Link to="/projects/overview"><button className="btn dark-btn"><i className="fas fa-chevron-left"></i>{cn ? chinese.backToProjectsBtn : english.backToProjectsBtn}</button></Link>
                                                    <ProjectTitle title = {cn ? chinese.singleProjectTitle3 : english.singleProjectTitle3} />
                                                    <SingleDescription desc = {cn ? chinese.singleProjectDesc3 : english.singleProjectDesc3} />
                                                    <div className="projects-gallery">
                                                        <div className="images-container">
                                                            {projects_images.map(image => image.project === "steampunk" && 
                                                                <SingleImage
                                                                    key = {image.id}
                                                                    src = {image.src}
                                                                    srcBig = {image.srcBig}
                                                                    imgID = {image.id}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div> 
                                            </SRLWrapper>
                                        </SimpleReactLightbox>
                                        {/* <ModalImage />           */}
                                    </React.Fragment>       
                                } />
                            </div> 
                        </React.Fragment>      
                    )
                }}
            </ContextConsumer>
            
        )
    }
}
