import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import AuthSplash from './mobile/components/auth_splash_screen/auth_splash';
import WelcomeScreen from './mobile/components/welcome/welcome';
import HomeScreen from './mobile/components/home/home_container';
import configureStore from './shared/store/store';


const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Splash: AuthSplash,
    Home: HomeScreen
  },
  {
    initialRouteName: 'Welcome'
  }
);

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
