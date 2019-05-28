import React, { Component } from 'react';
import './styles.css';

import Navbar from './components/Navbar/Navbar';
import Main from './Main';
import ScrollTop from 'react-scrolltop-button';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <section>
        <Navbar/>
        <Main/>
        <ScrollTop
          text="on top"
          className="scroll-to-top"
          style={{ 
              backgroundColor: "rgba(37, 36, 37, .8)",
              border: "none",
              borderRadius: "0px"
             }}
         />
        <Footer/>
      </section>
    );
  }
}

export default App;
