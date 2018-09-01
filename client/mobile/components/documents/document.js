import React from 'react';
import { View, TextInput } from 'react-native';

const Document = ({ action, id, update, textLayer }) => (
  <View>
    <TextInput
      zIndex={action === 'typing' ? 1 : 0}
      onChangeText={text => update({ id, textLayer: text })}
      placeholder="enter text here"
      value={textLayer}
    />
  </View>
);

export default Document;
