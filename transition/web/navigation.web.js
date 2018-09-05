import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomeContainer from '../mobile/components/home/home_container';
import Welcome from '../mobile/components/splash/welcome';
import Splash from '../mobile/components/splash/splash';
import DocumentFrameContainer from '../mobile/components/documents/document_frame_container';
import AddCollaboratorsContainer from '../mobile/components/documents/add_collaborators_container';

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
