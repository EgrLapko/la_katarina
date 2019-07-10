import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import About from './components/About/About';
import ImageGallery from './components/Gallery/ImageGallery';
import Projects from './components/projects_page/Projects';

export default class Main extends Component {
  render() {
    return (
          <Switch>
            <Route exact path = '/' component={MainPage} />
            <Route path = '/gallery' component={ImageGallery} />
            <Route path = '/about' component = {About} />
            <Route path = '/projects/overview' component = {Projects} />
          </Switch>
      
    )
  }
}

