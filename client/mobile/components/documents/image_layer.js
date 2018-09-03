import React from 'react';
import { WebView } from 'react-native';

const ImageLayer = () => (
  <WebView
    javaScriptEnabled
    scrollEnabled={false}
    source={{
      uri:
        'https://typedraw.herokuapp.com/canvas'
    }}
  />
);

export default ImageLayer;
