import React from 'react';
import { WebView } from 'react-native';

const ImageLayer = () => (
  <WebView
    javaScriptEnabled={true}
    source={{
      uri:
        '/Users/mason/Desktop/App_Academy/Projects/flex/typedraw/client/canvas_testing/canvas.html'
    }}
  />
);

export default ImageLayer;
