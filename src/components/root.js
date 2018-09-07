import React from 'react';
import { connect } from 'react-redux';
import { AppStack, RootStack } from './navigation';

const mapState = ({ session }) => ({ loggedIn: session.loggedIn });

const Root = connect(mapState)(
  ({ loggedIn }) => (loggedIn ? <AppStack /> : <RootStack />)
);

export default Root;
