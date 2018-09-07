import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from './home/home_container';
import Welcome from './splash/welcome';
import Splash from './splash/splash';
import FrameContainer from './documents/frame_container';
import CollaboratorsContainer from './home/collaborators_container';

export const RootStack = () => (
  <HashRouter>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route exact path="/" component={Splash} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);

export const AppStack = () => (
  <HashRouter>
    <Switch>
      <Route path="/document" component={FrameContainer} />
      <Route path="/share" component={CollaboratorsContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);
