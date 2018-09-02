import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../styles';

const Home = ({ getPublicDoc, userId, createDoc, logout }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 32 }}>+</Text>
    <Button title="Logout" onPress={() => logout()} />
    <Button title="Create a New Doc" onPress={() => createDoc(userId)} />
    <Button
      title="Check out the Public Doc"
      onPress={() => getPublicDoc()}
    />
  </View>
);

export default Home;
