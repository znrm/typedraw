import React from 'react';

const Document = ({ updateText }) => (
  <div>
    <canvas />
    <input type="text" onKeyDown={updateText()} />
  </div>
);

export default Document;
