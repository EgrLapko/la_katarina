import React, { Component } from 'react';

import { english, chinese } from '../../language';
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';

export default class InnerNav extends Component {
    render() {
        return (
            <ContextConsumer>
                {
                    value => {
                        const { toggleBackCompart, toggleBackBw, toggleBackPortraits, cn } = value;
                        return (
                            <Fade>
                                <div className="gallery-main-textbox">
                                    <h2 className="gallery-title">{cn ? chinese.galleryTitle : english.galleryTitle}</h2>
                                    <div className="gallery-categories">
                                        <NavLink to="/gallery/images_compart" className="category-name" activeClassName="active-submenu" onClick={toggleBackCompart}>
                                            {cn ? chinese.galleryGenre1 : english.galleryGenre1}
                                        </NavLink>
                                        <NavLink to="/gallery/images_bw" className="category-name" activeClassName="active-submenu" onClick={toggleBackBw}>
                                            {cn ? chinese.galleryGenre2 : english.galleryGenre2}
                                        </NavLink>
                                        <NavLink to="/gallery/images_portraits" className="category-name" activeClassName="active-submenu" onClick={toggleBackPortraits}>
                                            {cn ? chinese.galleryGenre3 : english.galleryGenre3}
                                        </NavLink>                    
                                    </div>
                                </div>    
                            </Fade>    
                        )
                    }
                }
            </ContextConsumer>
        )
    }
}
