import React from 'react';

const serverURI = process.env.NODE_ENV === 'production'
  ? 'https://www.typedraw.app/canvas/'
  : 'http://localhost:5000/canvas/';

const ImageLayer = ({ documentId }) => (
  <iframe
    title="canvas"
    style={{
      border: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent'
    }}
    src={`${serverURI}${documentId}`}
  />
);

export default ImageLayer;
