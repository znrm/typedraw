import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from './mobile/components/welcome/welcome';
import AuthSplash from './mobile/components/auth_splash_screen/auth_splash';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Splash: AuthSplash,
  },
  {
    initialRouteName: 'Welcome'
  }
);

const App = () => (
  <RootStack />
);

export default App;
