document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d', { alpha: true });
  const width = 100 || window.innerWidth;
  const height = 100 || window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.strokeStyle = 'rgba(0,0,0,1)';
  window.ctx = ctx;

  const pointer = { x: 0, y: 0 };
  let pressing = false;

  const boundingBox = (from, to) => {
    const minX = Math.min(from.x, to.x);
    const minY = Math.min(from.y, to.y);
    const maxX = Math.max(from.x, to.x);
    const maxY = Math.max(from.y, to.y);

    const startIndex = 4 * (minY * width + minX);
    const endIndex = 4 * (maxY * width + maxX);

    return [startIndex, endIndex];
  };

  function calculateDiff(imageBefore, imageAfter, range) {
    const { length } = imageBefore;
    const diffs = {};

    for (let i = 0; i < length; i += 1) {
      const diff = imageAfter[i] - imageBefore[i];

      if (diff !== 0) {
        diffs[i + range[0]] = diff;
      }
    }

    console.log(diffs);
  }

  function draw(from, to) {
    const range = boundingBox(from, to);
    console.log(from, to);
    console.log(range);

    const imageBefore = ctx
      .getImageData(0, 0, width, height)
      .data.slice(...range);

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();

    const imageAfter = ctx.getImageData(0, 0, width, height).data;
    calculateDiff(imageBefore, imageAfter, range);
  }

  document.querySelector('canvas').onmousedown = e => {
    Object.assign(pointer, { x: e.clientX, y: e.clientY });
    pressing = true;
  };

  document.onmousemove = e => {
    const currentPointer = { x: e.clientX, y: e.clientY };
    if (pressing) draw(pointer, currentPointer);
    Object.assign(pointer, currentPointer);
  };

  document.onmouseup = () => {
    pressing = false;
  };
});
