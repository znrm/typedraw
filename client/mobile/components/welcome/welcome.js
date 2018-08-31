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

const Welcome = ({ navigation, loggedIn }) => (

  loggedIn ? (
    navigation.navigate('Splash')
  ) : (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Welcome to TypeDraw</Text>
        <Button
          title="Click here to Login/Signup"
          onPress={() => navigation.navigate('Splash')}
        />
      </View>
    </Provider>
  )
);

export default Welcome;
