import React from 'react';
import { View, TextInput, WebView } from 'react-native';

const Document = ({ action, documentId, updateText, textLayer }) => (
  <View
    style={{ height: '100%', width: '100%', position: 'absolute' }}
    zIndex={action === 'typing' ? 1 : -1}
  >
    <TextInput
      onChangeText={text => updateText(documentId, text)}
      placeholder="enter text here"
      value={textLayer}
      multiline
      height="100%"
      width="100%"
    />
    <View style={{ flex: 1 }} zIndex={action === 'typing' ? -1 : 1}>
      <WebView source={{ url: 'https://google.com' }} />
    </View>
  </View>
);

export default Document;
