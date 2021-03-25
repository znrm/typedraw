import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Welcome from './splash/welcome';
import DocumentFrame from './documents/document_frame';

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/document" component={DocumentFrame} />
      <Route component={Welcome} />
    </Switch>
  </HashRouter>
);
