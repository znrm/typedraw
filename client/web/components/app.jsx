import { Route } from 'react-router-dom';
import React from 'react';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';

const App = () => (
  <div>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
