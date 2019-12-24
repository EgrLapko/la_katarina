import React, { Link } from 'react';
import { english, chinese } from '../../language';
import { ContextConsumer } from '../../context/context';

export default function Footer() {
  return (
    <ContextConsumer>
      {value => {
        const { cn } = value;
        return (
          <div className="footer">
            <div className="footer-block">
              <h2>{cn ? chinese.footerTitle1 : english.footerTitle1}</h2>
              <p className="website">blazhievskaya.art@gmail.com</p>
              <div className="socials">
                  <div className="social-container">
                      <i className="fab fa-facebook-square"/>
                      <p> : Katarinaphoto </p>
                  </div>
                  {
                    cn &&
                    <div className="social-container">
                      <i className="fab fa-weixin"></i>
                      <p> : Katarinaart </p>
                    </div>
                  }
              </div>
              <p className="copyright"> {cn ? chinese.footerCopyright : english.footerCopyright} </p>
            </div>
          </div>
        )
      }}
    </ContextConsumer>
    
  )
}
