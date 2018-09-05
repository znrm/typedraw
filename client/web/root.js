import React from 'react';
import { connect } from 'react-redux';
import { RootStack } from './navigation';

const mapState = ({ session }) => ({ loggedIn: session.loggedIn });

const Root = connect(mapState)(
  ({ loggedIn }) => (loggedIn ? null : <RootStack />)
);

export default Root;
