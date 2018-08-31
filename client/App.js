import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './mobile/components/home/home';
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
    Home: HomeScreen,
    Splash: AuthSplash,
  },
  {
    initialRouteName: 'Home'
  }
);

const App = () => (
  <RootStack />
);

export default App;
