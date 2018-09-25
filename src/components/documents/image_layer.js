import React from 'react';
import { WebView } from 'react-native';

const ImageLayer = ({ documentId }) => (
  <WebView
    javaScriptEnabled
    scrollEnabled={false}
    style={{
      backgroundColor: 'transparent',
      width: 310,
      height: 596
    }}
    source={{
      uri: `http://www.typedraw.app/canvas/${documentId}`
    }}
  />
);

export default ImageLayer;
