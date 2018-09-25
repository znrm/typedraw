import React from 'react';

const ImageLayer = ({ documentId }) => (
  <iframe
    title="canvas"
    style={{
      border: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent'
    }}
    src={`https://typedraw.herokuapp.com/canvas/${documentId}`}
  />
);

export default ImageLayer;
