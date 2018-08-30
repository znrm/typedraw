import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from '../shared/stupid_fix';
import Document from './components/documents';
import configureStore from '../shared/store/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>TypeDraw!!!</Text>
      <Document />
    </View>
  </Provider>
);


export default App;
