import React from 'react';
import { TextInput } from 'react-native';

const Document = ({ textLayer, updateText, }) => (
  <TextInput
    onKeyPress={(keyPress) => updateText(0, keyPress.nativeEvent.key)}
    placeholder="enter text here"
    placeholderTextColor="red"
    value={textLayer}
  />
);

export default Document;
