import React, { Component } from 'react';
import './styles.css';

import Navbar from './components/Navbar/Navbar';
import Main from './Main';
import ScrollTop from 'react-scrolltop-button';
import Footer from './components/Footer/Footer';
import { ContextConsumer } from './context/context';
import { english, chinese } from './language';

class App extends Component {
  render() {
    return (
      <ContextConsumer>
      {value => {
        const { cn } = value;
        return (
          <section>
            <Navbar/>
            <Main/>
            <ScrollTop
              text={cn ? chinese.onTopBtn : english.onTopBtn}
              className="scroll-to-top"
              style={{ 
                  backgroundColor: "rgba(37, 36, 37, .8)",
                  border: "none",
                  borderRadius: "0px"
                }}
            />
            <Footer/>
          </section>
        )
      }}
      </ContextConsumer>
    );
  }
}

export default App;
