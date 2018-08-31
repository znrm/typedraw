import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Splash from './mobile/components/splash/splash';
import WelcomeScreen from './mobile/components/splash/welcome';
import HomeScreen from './mobile/components/home/home_container';
import configureStore from './shared/store/store';


const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Splash,
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
