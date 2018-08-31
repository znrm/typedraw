import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    backgroundColor: 'powderblue',
    borderWidth: 1,
    borderColor: 'red',
    height: 30,
    width: 30,
    borderRadius: 30 / 2,

  },
});

const Home = ({ navigation, createDoc }) => (
  <View style={styles.container}>
    <Text>
      Create A new Doc
    </Text>
    <View style={styles.buttonContainer}>
      <Button
        color="black"
        title="+"
        onPress={() => createDoc()}
      />
    </View>
  </View>
);

export default Home;
