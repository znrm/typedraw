const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
let initDiff = null;

const getData = () => {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const imgRows = {};

  for (let i = 0; i < canvas.height; i++) {
    const start = i * canvas.width * 4;
    imgRows[i] = imgData.data.slice(start, start + canvas.width * 4);
  }
  return imgRows;
};

let data = null;
let drawing = false;

const diff = (data1, data2) => {
  const diffData = {};
  const keys = Object.keys(data2).filter(
    key => data1[key].toString() !== data2[key].toString()
  );

  keys.forEach(key => {
    diffData[key] = data2[key];
  });
  data = data2;
  // doSomethingWith(diffData);
};

const startDraw = e => {
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const y = e.touches ? e.touches[0].clientY : e.clientY;
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(x - 1, y - 1);
  ctx.lineTo(x, y);
  ctx.stroke();
  initDiff = setInterval(() => diff(data, getData()), 1000);
};

const draw = e => {
  if (drawing) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const endDraw = () => {
  clearInterval(initDiff);
  const data2 = getData();
  diff(data, data2);
  drawing = false;
  ctx.closePath();
};

document.addEventListener('mousedown', startDraw);

document.addEventListener('mousemove', draw);

document.addEventListener('mouseup', endDraw);

document.addEventListener('touchstart', startDraw);

document.addEventListener('touchmove', draw);

document.addEventListener('touchend', endDraw);

document.addEventListener('DOMContentLoaded', () => {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  data = getData();
});
