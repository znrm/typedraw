import React from 'react';
import { WebView } from 'react-native';

const ImageLayer = () => (
  <WebView
    javaScriptEnabled
    scrollEnabled={false}
    style={{ backgroundColor: 'transparent' }}
    source={{
      uri: 'https://typedraw.herokuapp.com/canvas'
    }}
  />
);

export default ImageLayer;
