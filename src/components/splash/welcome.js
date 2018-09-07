import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles/styles';
import { login } from '../../actions/session_actions';
import navByPlatform from '../../util/platform_util';

const mapDispatch = (dispatch, ownProps) => ({
  demoLogin: () =>
    dispatch(login({ email: 'guest@guest.com', password: 'password' })),
  navigateToSplash: () => navByPlatform(ownProps, 'Splash', '/splash')
});

const Welcome = ({ navigateToSplash, demoLogin }) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>TypeDraw</Text>
    <Button title="sign up / log in" onPress={navigateToSplash} />
    <Button title="take a look around" onPress={demoLogin} />
  </View>
);

const WelcomeContainer = connect(
  null,
  mapDispatch
)(Welcome);

export default WelcomeContainer;
