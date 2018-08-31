import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const Home = ({ createDoc }) => (
  <View style={styles.container}>
    <Button title="+" onPress={() => createDoc()} />
    <Text>Create A new Doc</Text>
  </View>
);

export default Home;
