import React from 'react';
import { View } from 'react-native';
import AuthContainer from './auth_container';
import styles from '../../styles/styles';

const Splash = () => (
  <View style={styles.container}>
    <AuthContainer />
  </View>
);

export default Splash;
