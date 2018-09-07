import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../styles/styles';

const Home = ({ getPublicDoc, userId, createDoc, logout }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 32 }}>+</Text>
    <Button title="Create a New Doc" onPress={() => createDoc(userId)} />
    <Button
      title="Check out the Public Doc"
      onPress={() => getPublicDoc()}
    />
    <Button title="Logout" onPress={() => logout()} />
  </View>
);

export default Home;
