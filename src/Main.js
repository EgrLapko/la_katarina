import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import About from './components/About/About';
import ImageGallery from './components/Gallery/ImageGallery';
import Projects from './components/projects_page/Projects';
import SingleProject from './components/projects_page/single_project/SingleProject';

export default class Main extends Component {
  render() {
    return (
          <Switch>
            <Route exact path = '/' component={MainPage} />
            <Route path = '/gallery' component={ImageGallery} />
            <Route path = '/about' component = {About} />
            <Route path = '/projects/overview' exact component = {Projects} />
            <Route path = '/projects/:project' component = {SingleProject} />
          </Switch>
      
    )
  }
}

