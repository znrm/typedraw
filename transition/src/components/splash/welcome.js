import React from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../styles';
import { login } from '../../actions/session_actions';

const mapDispatch = dispatch => ({
  demoLogin: () =>
    dispatch(login({ email: 'guest@guest.com', password: 'password' }))
});

const Welcome = ({ navigation, demoLogin }) => (
  <View style={styles.container}>
    <Text style={styles.titleText}>TypeDraw</Text>
    <Button
      title="sign up / log in"
      onPress={() => navigation.navigate('Splash')}
    />
    <Button
      title="take a look around"
      onPress={demoLogin}
    />
  </View>
);

const WelcomeContainer = connect(
  null,
  mapDispatch
)(Welcome);

export default WelcomeContainer;
