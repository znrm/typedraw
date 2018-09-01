import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../styles';

const Home = ({ navigation, createDoc }) => (
  <View style={styles.container}>
    <Button style={{ height: 200 }} title="+" onPress={() => createDoc()} />
    <Text>Create A New Doc</Text>
  </View>
);

export default Home;
