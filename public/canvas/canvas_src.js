import io from 'socket.io-client';

class Drawing {
  constructor() {
    [, , this.documentId] = window.location.pathname.split('/');
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    const canvas = document.querySelector('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d');

    this.drawing = false;
    this.initialData = this.ctx.getImageData(
      0,
      0,
      this.width,
      this.height
    ).data;

    this.startDraw = this.startDraw.bind(this);
    this.draw = this.draw.bind(this);
    this.endDraw = this.endDraw.bind(this);

    this.startSockets();
    this.addListeners();
  }

  startSockets() {
    this.socket = io('https://typedraw.herokuapp.com');
    this.socket.on('connect', () => {
      this.socket.emit('document', this.documentId);
    });

    this.socket.on('image', diff => this.receiveImageDiff(diff));
  }

  addListeners() {
    document.addEventListener('mousedown', this.startDraw);
    document.addEventListener('touchstart', this.startDraw);

    document.addEventListener('mousemove', this.draw);
    document.addEventListener('touchmove', this.draw);

    document.addEventListener('mouseup', this.endDraw);
    document.addEventListener('touchend', this.endDraw);
  }

  startDraw(e) {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    this.drawing = true;
    this.ctx.beginPath();
    this.ctx.moveTo(x - 1, y - 1);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  draw(e) {
    if (this.drawing) {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }

  endDraw() {
    this.drawing = false;
    this.ctx.closePath();

    this.sendImageDiff();
  }

  sendImageDiff() {
    const newData = this.ctx.getImageData(0, 0, this.width, this.height).data;
    const diffData = {};

    const { length } = newData;

    for (let i = 0; i < length; i += 1) {
      if (newData[i] !== this.initialData[i]) diffData[i] = newData[i];
    }
    this.socket.emit('drawing', {
      newPixels: diffData,
      width: this.width,
      height: this.height
    });

    this.initialData = newData;
  }

  receiveImageDiff({ newPixels, width, height }) {
    const imageSize = 4 * width * height;
    const data = new Uint8ClampedArray(imageSize);
    const pixelIndex = Object.keys(newPixels);

    for (let i = 0; i < pixelIndex.length; i += 1) {
      data[pixelIndex[i]] = newPixels[pixelIndex[i]];
    }

    const imageDiff = new ImageData(data, width, height);

    this.ctx.putImageData(imageDiff, 0, 0, 0, 0, width, height);
  }
}

window.drawing = new Drawing();
