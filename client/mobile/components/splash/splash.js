import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import AuthContainer from './auth_container';
import styles from '../../styles';

const Splash = ({ navigation, loggedIn }) =>
  (loggedIn ? (
    navigation.navigate('Home')
  ) : (
    <View style={styles.container}>
      <AuthContainer />
    </View>
  ));

export default connect(({ session }) => ({ loggedIn: session.loggedIn }))(
  Splash
);
