import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import RootStack from './components/navigation';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
