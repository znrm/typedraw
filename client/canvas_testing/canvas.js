document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d', { alpha: true });
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.strokeStyle = 'rgba(0,0,0,1)';
  window.ctx = ctx;

  const pointer = { x: 0, y: 0 };
  let pressing = false;

  let previousImage = ctx.getImageData(0, 0, width, height).data;
  let currentImage;

  function calculateDiffs() {
    let thereWasAtLeastOneDiff;

    currentImage = ctx.getImageData(0, 0, width, height).data;
    const diffs = {};
    const { length } = currentImage;

    for (let i = 0; i < length; i += 1) {
      const diff = currentImage[i] - previousImage[i];

      if (diff !== 0) {
        thereWasAtLeastOneDiff = true;
        diffs[i] = diff;
      }
    }
    if (thereWasAtLeastOneDiff) console.log(diffs);

    previousImage = currentImage;
  }

  canvas.addEventListener(
    'mousedown',
    e => {
      window.setInterval(calculateDiffs, 100);
      Object.assign(pointer, { x: e.clientX, y: e.clientY });
      pressing = true;
    },
    false
  );

  canvas.addEventListener(
    'mousemove',
    e => {
      const currentPointer = { x: e.clientX, y: e.clientY };
      if (pressing) {
        ctx.beginPath();
        ctx.moveTo(pointer.x, pointer.y);
        ctx.lineTo(currentPointer.x, currentPointer.y);
        ctx.stroke();
      }
      Object.assign(pointer, currentPointer);
    },
    false
  );

  canvas.addEventListener(
    'mouseup',
    () => {
      window.clearInterval(calculateDiffs, 500);
      pressing = false;
    },
    true
  );
});
