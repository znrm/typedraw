import React from 'react';

const Canvas = ({ updateText }) => (
  <div>
    <canvas />
    <input type="text" onKeyDown={updateText()} />
  </div>
);

export default Canvas;
