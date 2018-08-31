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
    borderRadius: 100,
    height: 30
  },
  buttonSection: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'

  }
});

const Home = ({ navigation, createDoc }) => (
  <View style={styles.container}>
    <Text>
      Create A new Doc
    </Text>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.buttonSection}
        title="+"
        onPress={() => createDoc()}
      />
    </View>
  </View>
);

export default Home;
