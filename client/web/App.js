import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../shared/store/store';
// import RootContainer from './root.web';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    {/* <RootContainer /> */}
    <div>Hello!</div>
  </Provider>
);

export default App;
