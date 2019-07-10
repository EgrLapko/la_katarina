import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ProjectTitle from './ProjectTitle';
import SingleDescription from './SingleDescription';

export default class SingleProject extends Component {
    render() {
        const {match} = this.props;
        return (
            <div className="single-project-page">
                <Route path = {`${match.path}/shamans`} render={() =>  
                    <div className="single-project">
                        <ProjectTitle title = "Shamans" />
                        <SingleDescription desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </div>       
                } />
                <Route path = {`${match.path}/ukrainian_beauty`} render={() =>  
                    <div className="single-project">
                        <h2 className="project-name">Beauties</h2>
                    </div>       
                } />
            </div>       
        )
    }
}
