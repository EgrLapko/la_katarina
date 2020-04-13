import React from 'react';
import './styles.css';

import Navbar from './components/Navbar/Navbar';
import Main from './Main';
import ScrollTop from 'react-scrolltop-button';
import Footer from './components/Footer/Footer';
import { ContextConsumer } from './context/context';
import { english, chinese } from './language';

const App = () => {

  return (
    <ContextConsumer>
      {value => {
        const { cn } = value;
        return (
          <section  style={ cn ? {fontFamily: "'Source-Han-Ligh1aa8e7dc5620303'"} : {fontFamily: "'Montserrat', sans-serif"} }>
            <Navbar />
            <Main />
            <ScrollTop
              text={cn ? chinese.onTopBtn : english.onTopBtn}
              className="scroll-to-top"
              style={{ 
                  backgroundColor: "rgba(37, 36, 37, .8)",
                  border: "none",
                  borderRadius: "0px",
                  fontFamily: "'Montserrat', sans-serif"
                }}
            />
            <Footer/>
          </section>
        )
      }}
    </ContextConsumer>
  )
}

export default App;
