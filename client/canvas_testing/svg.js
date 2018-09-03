document.addEventListener('DOMContentLoaded', () => {
  const svg = document.querySelector('svg');
  // const width = window.innerWidth;
  // const height = window.innerHeight;

  const paths = [];
  let currentPath = '<path d="M';

  let pressing = false;

  svg.addEventListener(
    'mousedown',
    e => {
      pressing = true;
      currentPath += `${e.clientX},${e.clientY} s`;
    },
    false
  );

  svg.addEventListener(
    'mousemove',
    e => {
      if (pressing) {
        currentPath += `${e.clientX},${e.clientY} `;
        console.log(e.clientX, e.clientY);
      }
    },
    false
  );

  svg.addEventListener(
    'mouseup',
    e => {
      pressing = false;
      currentPath += `${e.clientX},${
        e.clientY
      }" stroke="black" stroke-width="2" fill="none" />`;
      paths.push(currentPath);
      svg.innerHTML = currentPath;
      currentPath = '<path d="M';
    },
    true
  );
  window.svg = svg;
  window.paths = paths;
});
