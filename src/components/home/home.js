import React from 'react';
import { View, Button } from 'react-native';
import styles from '../../styles/styles';

const Home = ({ getPublicDoc, userId, createDoc, logout }) => (
  <View style={styles.container}>
    <View style={styles.btn}>
      <Button title="Create a New Doc" onPress={() => createDoc(userId)} />
    </View>
    <View style={styles.btn}>
      <Button title="Check out the Public Doc" onPress={() => getPublicDoc()} />
    </View>
    <View style={styles.btn}>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  </View>
);

export default Home;
