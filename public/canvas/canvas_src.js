import io from 'socket.io-client';

class Drawing {
  constructor() {
    [, , this.documentId, this.selection] = window.location.pathname.split('/');
    this.width = 310;
    this.height = 596;

    const canvas = document.querySelector('canvas');
    canvas.width = this.width;
    canvas.height = this.height;
    this.ctx = canvas.getContext('2d');
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';

    this.drawing = false;
    this.initialData = this.getData();

    this.startDraw = this.startDraw.bind(this);
    this.draw = this.draw.bind(this);
    this.endDraw = this.endDraw.bind(this);
    this.sendImageDiff = this.sendImageDiff.bind(this);

    this.startSockets();
    this.addListeners();
  }

  getData() {
    return this.ctx.getImageData(0, 0, this.width, this.height).data;
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
    this.previousX = x;
    this.previousY = y;
  }

  draw(e) {
    if (this.drawing) {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      this.ctx.lineTo(this.previousX, this.previousY);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.closePath();
      this.sendImageDiff();

      this.ctx.beginPath();

      this.previousX = x;
      this.previousY = y;
    }
  }

  endDraw() {
    this.ctx.lineTo(this.previousX, this.previousY);
    this.ctx.stroke();
    this.ctx.closePath();
    this.sendImageDiff();
    this.drawing = false;
  }

  sendImageDiff() {
    const newData = this.getData();
    const newPixelIndexes = [];
    const newPixels = [];

    const { length } = newData;

    for (let i = 0; i < length; i += 1) {
      if (newData[i] !== this.initialData[i]) {
        newPixelIndexes.push(i);
        newPixels.push(newData[i]);
      }
    }

    this.socket.emit('drawing', {
      diffIndex: newPixelIndexes,
      diffData: newPixels
    });

    this.initialData = newData;
  }

  receiveImageDiff({ diffIndex, diffData }) {
    const data = this.getData();

    for (let i = 0; i < diffData.length; i += 1) {
      data[diffIndex[i]] = diffData[i];
    }

    const imageDiff = new ImageData(data, this.width, this.height);

    this.ctx.putImageData(imageDiff, 0, 0);
  }
}

window.drawing = new Drawing();
