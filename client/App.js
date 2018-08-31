import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './shared/store/store';
import RootContainer from './mobile/root';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
);

export default App;
