import { Route } from 'react-router-dom';
import React from 'react';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Home from './home/home_container';

const App = () => (
  <div>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    <Route path="/home" component={Home} />
  </div>
);

export default App;
