import React from 'react';

import { english, chinese } from '../../language';
import { NavLink } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';

const InnerNav = ({ children, sticky=false, className, ...rest }) => {
    const {createRef, useState, useEffect} = React;

    const [isSticky, setIsSticky] = useState(false)
    const ref = createRef()
  
  // mount 
    useEffect(()=>{
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {threshold: [1]}
            )

        observer.observe(cachedRef)
        
        // unmount
        return function(){
        observer.unobserve(cachedRef)
        }
    })
    
    return (
        <ContextConsumer>    
        {
            value => {
                const { toggleBackCompart, toggleBackBw, toggleBackPortraits, cn } = value;
                return (
                    <React.Fragment>
                        <h2 className="gallery-title">{cn ? chinese.galleryTitle : english.galleryTitle}</h2>
                        <div className={"gallery-categories" + (isSticky ? " isSticky" : "")} ref={ref} {...rest}>
                            <NavLink to="/gallery/images_compart" className="category-name" activeClassName="active-submenu" onClick={() => {toggleBackCompart(); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                                {cn ? chinese.galleryGenre1 : english.galleryGenre1}
                            </NavLink>
                            <NavLink to="/gallery/images_bw" className="category-name" activeClassName="active-submenu" onClick={() => {toggleBackBw(); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                                {cn ? chinese.galleryGenre2 : english.galleryGenre2}
                            </NavLink>
                            <NavLink to="/gallery/images_portraits" className="category-name" activeClassName="active-submenu" onClick={() => {toggleBackPortraits(); window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}}>
                                {cn ? chinese.galleryGenre3 : english.galleryGenre3}
                            </NavLink>                    
                        </div>
                    </React.Fragment>
                    

                )
            }
        }
        </ContextConsumer>
    )
}

export default InnerNav;

