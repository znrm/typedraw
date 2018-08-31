import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from '../../styles';

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
