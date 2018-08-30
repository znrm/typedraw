import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const Document = ({imageLayer, textLayer, updateText, updateImage}) => (
  <TextInput
    onKeyPress={(keyPress) => updateText(keyPress.nativeEvent.key)}
    placeholder="enter text here"
    placeholderTextColor="red"
    value={textLayer}
  />
);

export default Document;
