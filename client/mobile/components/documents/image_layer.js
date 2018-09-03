import React from 'react';
import { WebView } from 'react-native';

const ImageLayer = () => (
  <WebView
    javaScriptEnabled
    scrollEnabled={false}
    source={{
      uri:
        'https://type-draw.herokuapp.com/canvas'
    }}
  />
);

export default ImageLayer;
