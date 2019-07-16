import React from 'react';
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
                  <p className="social-btn"><i className="fab fa-facebook-square"/></p>
                  <p className="social-btn"><i className="fab fa-weixin"></i></p>
              </div>
              <p className="copyright"> {cn ? chinese.footerCopyright : english.footerCopyright} </p>
            </div>
          </div>
        )
      }}
    </ContextConsumer>
    
  )
}
