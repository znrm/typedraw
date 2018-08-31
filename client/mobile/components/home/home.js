import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from '../../../shared/store/store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const store = configureStore();

const HomeScreen = ({ navigation, loggedIn }) => (

  loggedIn ? (
    navigation.navigate('Splash')
  ) : (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>TypeDraw!!!</Text>
        <Button
          title="goto splash"
          onPress={() => navigation.navigate('Splash')}
        />
      </View>
    </Provider>
  )
);

export default HomeScreen;
