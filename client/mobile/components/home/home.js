import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../styles';

const Home = ({ createDoc }) => (
  <View style={styles.container}>
    <Button title="+" onPress={() => createDoc()} />
    <Text>Create A new Doc</Text>
  </View>
);

export default Home;
