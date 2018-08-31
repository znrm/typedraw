import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const Welcome = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Welcome to TypeDraw</Text>
    <Button
      title="Click here to Login/Signup"
      onPress={() => navigation.navigate('Splash')}
    />
  </View>
);

export default Welcome;
