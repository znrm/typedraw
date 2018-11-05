import React from 'react';
import HOST from '../../util/host';

const ImageLayer = ({ documentId }) => (
  <iframe
    title="canvas"
    style={{
      border: 'none',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent'
    }}
    src={`${HOST}/canvas/${documentId}`}
  />
);

export default ImageLayer;
