import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import configureStore from './shared/store/store';
import styles from './mobile/styles';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>This is working.</Text>
    </View>
  </Provider>
);

export default App;
