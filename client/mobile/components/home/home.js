import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from '../../styles';

const Home = ({ navigation, createDoc }) => (
  <View style={styles.container}>
    <Button title="+" onPress={() => createDoc()} />
    <Text>Create A new Doc</Text>
    <Button
      title="adddocframetest"
      onPress={() => navigation.navigate('DocumentFrameContainer')}
    />
  </View>
);

export default Home;
