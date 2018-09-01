import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../styles';

const Home = ({ getPublicDoc, userId, createDoc }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 32 }}>+</Text>
    <Button title="Create a New Doc" onPress={() => createDoc(userId)} />
    <Button
      title="Check out the Public Doc"
      onPress={() => getPublicDoc()}
    />
  </View>
);

export default Home;
