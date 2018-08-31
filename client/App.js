import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import Splash from './mobile/components/splash/splash';
import Welcome from './mobile/components/splash/welcome';
import HomeContainer from './mobile/components/home/home_container';
import configureStore from './shared/store/store';

const RootStack = createStackNavigator(
  {
    Welcome,
    Splash
  },
  {
    initialRouteName: 'Welcome'
  }
);

const store = configureStore();

const Root = connect(({ session }) => ({ loggedIn: session.loggedIn }))(
  ({ loggedIn }) => (loggedIn ? <HomeContainer /> : <RootStack />)
);

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
