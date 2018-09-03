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
let draw = false;

const diff = (data1, data2) => {
  const diffData = {};
  const keys = Object.keys(data2).filter(
    key => data1[key].toString() !== data2[key].toString()
  );

  keys.forEach(key => {
    diffData[key] = data2[key];
  });
  data = data2;
  // console.log(diffData);
};

document.addEventListener('mouseup', () => {
  clearInterval(initDiff);
  const data2 = getData();
  diff(data, data2);
  draw = false;
  ctx.closePath();
});

document.addEventListener('mousedown', e => {
  console.log('moused down');
  draw = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - 8, e.clientY - 8);
  ctx.lineTo(e.clientX - 7, e.clientY - 7);
  ctx.stroke();
  initDiff = setInterval(() => diff(data, getData()), 1000);
});

document.addEventListener('mousemove', e => {
  if (draw) {
    ctx.lineTo(e.clientX - 7, e.clientY - 7);
    ctx.stroke();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  data = getData();
  // below is just for testing
  setInterval(() => {
    let color = canvas.style.backgroundColor;
    canvas.style.backgroundColor = color === 'red' ? 'green' : 'red';
  }, 500);
});
