import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../shared/store/store';
import RootContainer from '../mobile/root';
import { getAuthToken } from '../shared/util/mobile_auth_util';
import { fetchCurrentSession } from '../shared/actions/session_actions';

const store = configureStore();

const checkForCurrentUser = async () => {
  const token = await getAuthToken();
  if (token) {
    fetchCurrentSession({ Authorization: token })(store.dispatch);
  }
};

const App = () => {
  checkForCurrentUser();
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  );
};

export default App;
