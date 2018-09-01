import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../styles';

const Home = ({ navigation, userId, createDoc }) => (
  <View style={styles.container}>
    <Text style={{ fontSize: 32 }}>+</Text>
    <Button title="Create A New Doc" onPress={() => createDoc(userId)} />
  </View>
);

export default Home;
