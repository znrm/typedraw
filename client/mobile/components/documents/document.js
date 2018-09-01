import React from 'react';
import { View, TextInput, WebView } from 'react-native';

const Document = ({ action, id, update, textLayer }) => (
  <View position="absolute" zIndex={action === 'typing' ? 1 : -1}>
    <TextInput
      onChangeText={text => update({ id, textLayer: text })}
      placeholder="enter text here"
      value={textLayer}
      multiline
      height="100%"
      width="100%"
    />
    <View zIndex={action === 'typing' ? -1 : 1} height="100%">
      <WebView source={{ url: 'https://google.com' }} />
    </View>
  </View>
);

export default Document;
