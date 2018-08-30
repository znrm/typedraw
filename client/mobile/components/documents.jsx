import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Document = () => (
  <TextInput 
    onKeyPress={(keyPress) => console.log(keyPress.nativeEvent.key)} 
    placeholder='enter text here'
    placeholderTextColor='red'
  />
);

export default Document;
