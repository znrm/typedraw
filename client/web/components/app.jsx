import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Home from './home/home_container';

const App = () => (
  <div>
    <AuthRoute exact path='/splash' component={ Splash } />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/home" component={Home} />
  </div>
);

export default App;
