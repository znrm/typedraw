import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Document = () => (
  <TextInput onChangeText={(text) => console.log(text)} 
  />
);

export default Document;
