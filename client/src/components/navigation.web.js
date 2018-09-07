import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from './home/home_container';
import Welcome from './splash/welcome';
import Splash from './splash/splash';
import DocumentFrameContainer from './documents/document_frame_container';
import AddCollaboratorsContainer from './documents/add_collaborators_container';

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
      <Route path="/document" component={DocumentFrameContainer} />
      <Route path="/share" component={AddCollaboratorsContainer} />
      <Route exact path="/" component={HomeContainer} />
      <Redirect to="/" />
    </Switch>
  </HashRouter>
);
