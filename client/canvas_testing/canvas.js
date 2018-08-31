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

  function calculateDiff(imageBefore, imageAfter) {
    const { length } = imageBefore;
    const diff = Uint8ClampedArray.from(imageAfter);

    for (let i = 0; i < length; i += 1) {
      diff[i] -= imageBefore[i];
    }

    console.log(diff);
  }

  function draw(from, to) {
    const imageBefore = ctx.getImageData(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    ).data;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    const imageAfter = ctx.getImageData(
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    ).data;
    calculateDiff(imageBefore, imageAfter);
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
