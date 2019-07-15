import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-page-wrapper">
                <div className="contact-page">
                    <h2 className="title">Contact me</h2>
                    <div className="image-section">   
                        <img className="contact-image" src="../images/katarina.jpg" alt=""/>
                    </div>
                    <Link to="/about"><button className="btn dark-btn">About Me</button></Link>
                    <div className="contact-cont">
                        <p className="cont-text"><span className="uppercase">Katarina Blazhievskaya</span></p>
                        <p className="cont-text">| La Katarina Photography |</p>
                        <p className="cont-text">Beijing, China</p>
                        <p className="cont-text"><span className="bold-text">+8618401762408</span></p>
                        <p className="cont-text"><span className="bold-text">blazhievskaya.art@gmail.com</span></p>
                    </div>
                    <div className="contact-cont">
                        <p className="cont-text">Social Networks:</p>
                        <div className="contact-socials">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-weixin"></i>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }
}
