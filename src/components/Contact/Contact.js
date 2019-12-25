import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContextConsumer } from '../../context/context';
import { english, chinese } from '../../language';

export default class Contact extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        return (
            <ContextConsumer>
                {value => {
                    const { cn } = value;
                    return (
                        <div className="contact-page-wrapper">
                            <div className="contact-page">
                                <h2 className="title">{cn ? chinese.contactPageTitle : english.contactPageTitle}</h2>
                                <div className="image-section">   
                                    <img className="contact-image" src="http://pic.yupoo.com/yehorlapko/e2c89cea/8f94b8a2.jpg" alt=""/>
                                </div>
                                <Link to="/about"><button className="btn dark-btn">{cn ? chinese.aboutPageTitle : english.aboutPageTitle}</button></Link>
                                <div className="contact-cont">
                                    <p className="cont-text"><span className="uppercase">Katarina Blazhievskaya</span></p>
                                    {cn &&
                                        <p className="cont-text">卡塔琳娜</p>
                                    }
                                    <p className="cont-text">| La Katarina Photography |</p>
                                    <p className="cont-text">{cn ? chinese.contactLocation : english.contactLocation}</p>
                                    <p className="cont-text"><span className="bold-text">+8618401762408</span></p>
                                    <p className="cont-text"><span className="bold-text">blazhievskaya.art@gmail.com</span></p>
                                    <div className="contact-socials">
                                        <i className="fab fa-facebook"><p>: Katarinaphoto</p></i>
                                        {
                                            cn && <i className="fab fa-weixin"><p>: Katarinaart</p></i>
                                        }
                                    </div>
                                </div>
                            </div>      
                        </div>
                    )
                }}
            </ContextConsumer>
            
        )
    }
}
