import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-page">
                <h3 className="projects-title">Art-projects</h3>
                <div className="projects-container">
                    <div className="project-item">
                        <img src="../images/Projects/Covers/shamans_cover.jpg" alt=""/>
                        <p className="project-title">Shamans</p>
                    </div>
                    <div className="project-item">
                        <img src="../images/Projects/Covers/uabeauty_cover.jpg" alt=""/>
                        <p className="project-title">Ukrainian beauty</p>
                    </div>
                    <div className="project-item">
                        <img src="../images/Projects/Covers/steampunk_cover.jpg" alt=""/>
                        <p className="project-title">Steampunk Project</p>
                    </div>
                </div>
            </div>
        )
    }
}
