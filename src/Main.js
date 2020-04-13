import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from './components/mainPage/MainPage';
import ImageGallery from './components/Gallery/ImageGallery';
import Projects from './components/projects_page/Projects';
import SingleProject from './components/projects_page/single_project/SingleProject';
import Info from './components/Info/Info';

const Main = () => {
  return (
    <Switch>
      <Route exact path = '/' component={MainPage} />
      <Route path = '/gallery' component={ImageGallery} />
      <Route path = '/about' component = {Info} />
      <Route path = '/contact' component = {Info} />
      <Route path = '/projects/overview' exact component = {Projects} />
      <Route path = '/projects/:project' component = {SingleProject} />
    </Switch>
  )
}

export default Main;
