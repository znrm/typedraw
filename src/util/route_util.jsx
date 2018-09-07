import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, exact, loggedIn }) => {
  const render = props =>
    (loggedIn ? <Redirect to="/home" /> : <Component {...props} />);

  return <Route exact={exact} path={path} render={render} />;
};

const Protected = ({ component: Component, path, exact, loggedIn }) => {
  const render = props =>
    (loggedIn ? <Component {...props} /> : <Redirect to="/login" />);

  return <Route exact={exact} path={path} render={render} />;
};

const mapStateToProps = ({ session }) => ({
  loggedIn: session.loggedIn
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
