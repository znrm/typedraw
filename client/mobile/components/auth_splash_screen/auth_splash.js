import React from 'react';
import { Text, View } from 'react-native';
import AuthContainer from '../auth/auth_container';
import styles from '../../styles';


const Splash = () => (
  <View style={styles.container}>
    <Text>this is the splash page</Text>
    <AuthContainer />
  </View>
);

export default Splash;
