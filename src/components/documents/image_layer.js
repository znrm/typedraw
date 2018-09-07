import React from 'react';
import { WebView } from 'react-native';

const ImageLayer = ({ documentId }) => (
  <WebView
    javaScriptEnabled
    scrollEnabled={false}
    style={{ backgroundColor: 'transparent' }}
    source={{
      uri: `https://typedraw.herokuapp.com/canvas/${documentId}`
    }}
  />
);

export default ImageLayer;
