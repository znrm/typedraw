document.addEventListener('DOMContentLoaded', () => {
  const svg = document.querySelector('svg');
  // const width = window.innerWidth;
  // const height = window.innerHeight;

  const paths = [];
  let currentPath = '<path d="M';

  const pointer = { x: 0, y: 0 };
  let pressing = false;

  svg.addEventListener(
    'mousedown',
    e => {
      Object.assign(pointer, { x: e.clientX, y: e.clientY });
      pressing = true;
      currentPath = `${pointer.x} ${pointer.y} `;
    },
    false
  );

  svg.addEventListener(
    'mousemove',
    e => {
      Object.assign(pointer, { x: e.clientX, y: e.clientY });
      if (pressing) {
        currentPath += `${pointer.x} ${pointer.y} `;
      }
    },
    false
  );

  svg.addEventListener(
    'mouseup',
    e => {
      Object.assign(pointer, { x: e.clientX, y: e.clientY });
      currentPath += `${pointer.x} ${
        pointer.y
      }" stroke="black" stroke-width="2" fill="none" />`;
      paths.push(currentPath);
    },
    true
  );
  window.svg = svg;
  window.paths = paths;
});
