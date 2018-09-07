import React from 'react';

const ImageLayer = () => (
  <iframe
    title="canvas"
    scrollEnabled={false}
    style={{ backgroundColor: 'transparent' }}
    source={{
      uri: 'https://typedraw.herokuapp.com/canvas'
    }}
  />
);

export default ImageLayer;
