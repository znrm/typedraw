import io from 'socket.io-client';

class Drawing {
  constructor() {
    [, , this.documentId] = window.location.pathname.split('/');
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;

    const canvas = document.querySelector('canvas');
    this.width = this.width;
    this.height = this.height;
    this.ctx = canvas.getContext('2d');

    this.drawing = false;
    this.initialData = this.getData();

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

  getData() {
    const imgData = this.ctx.getImageData(0, 0, this.width, this.height);
    const imgRows = {};

    for (let i = 0; i < this.height; i += 1) {
      const start = i * this.width * 4;
      imgRows[i] = imgData.data.slice(start, start + this.width * 4);
    }
    return imgRows;
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
    clearInterval(this.initDiff);
    this.diff();
    this.drawing = false;
    this.ctx.closePath();

    this.sendImageDiff();
  }

  sendImageDiff() {
    const newData = this.getData();
    const diffData = {};

    const keys = Object.keys(newData).filter(
      key => this.data[key].toString() !== newData[key].toString()
    );

    keys.forEach(key => {
      diffData[key] = newData[key];
    });

    // this.socket.emit('drawing', diffData);
    console.log(diffData);

    this.initialData = newData;
  }

  receiveImageDiff(diff) {
    const { textLayer, receiveDocument, documentId } = this.props;
    const patch = this.dmp.patch_make(textLayer, diff);
    const patchedText = this.dmp.patch_apply(patch, textLayer)[0];

    receiveDocument({ id: documentId, textLayer: patchedText });
  }
}

window.drawing = new Drawing();
