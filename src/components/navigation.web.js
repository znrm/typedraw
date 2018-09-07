import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from './home/home_container';
import Welcome from './splash/welcome';
import Splash from './splash/splash';
import DocumentFrame from './documents/document_frame';
import CollaboratorsContainer from './home/collaborators_container';

export const RootStack = () => (
  <HashRouter>
    <Switch>
      <Route path="/splash" component={Splash} />
      <Route exact path="/" component={Welcome} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);

export const AppStack = () => (
  <HashRouter>
    <Switch>
      <Route path="/document" component={DocumentFrame} />
      <Route path="/share" component={CollaboratorsContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);
