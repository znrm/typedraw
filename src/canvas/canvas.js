import io from 'socket.io-client';
import Pointer from './pointer';

class Drawing {
  constructor() {
    const [, , documentId, selection] = window.location.pathname.split('/');

    this.documentId = documentId;
    this.selection = selection;

    this.pointer = new Pointer();

    this.width = 310;
    this.height = 596;

    const canvas = document.querySelector('canvas');
    canvas.width = this.width;
    canvas.height = this.height;

    this.ctx = canvas.getContext('2d');

    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineCap = 'round';

    this.uiButton = document.querySelector('.ui-btn');

    this.initialData = this.data();

    this.startSockets();
    this.addListeners();
  }

  data() {
    return this.ctx.getImageData(0, 0, this.width, this.height).data;
  }

  startSockets() {
    this.socket = io('https://www.typedraw.app');
    this.socket.on('connect', () => {
      this.socket.emit('document', this.documentId);
    });

    this.socket.on('image', diff => this.receiveImageDiff(diff));

    this.socket.on('loadImage', savedImageDataURI => {
      const img = new Image();
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0);
      };
      img.src = savedImageDataURI;
    });

    this.socket.on('saveImage', () => {
      this.socket.emit('imageDataURI', this.ctx.canvas.toDataURL());
    });
  }

  addListeners() {
    this.ctx.canvas.addEventListener('mousedown', this.mouseDown());
    this.ctx.canvas.addEventListener('touchstart', this.mouseDown());

    document.addEventListener('mousemove', this.mouseMove());
    document.addEventListener('touchmove', this.mouseMove());

    this.ctx.canvas.addEventListener('mouseup', this.mouseUp());
    this.ctx.canvas.addEventListener('touchend', this.mouseUp());

    this.uiButton.addEventListener('click', this.toggleEraser());
  }

  mouseDown() {
    return e => {
      this.pointer.update(e);
      this.pointer.down();
      this.ctx.beginPath();
    };
  }

  mouseMove() {
    return e => {
      if (this.pointer.pressing) {
        this.pointer.update(e);
        const { previousPos, currentPos } = this.pointer;

        this.ctx.lineTo(previousPos.x, previousPos.y);
        this.ctx.lineTo(currentPos.x, currentPos.y);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();

        this.sendImageDiff();
      }
    };
  }

  mouseUp() {
    return e => {
      this.pointer.update(e);
      this.pointer.up();

      const { x, y } = this.pointer.previousPos;

      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      this.ctx.closePath();
      this.sendImageDiff();
    };
  }

  indexRange() {
    const { currentPos, previousPos } = this.pointer;
    const xMin = Math.min(currentPos.x, previousPos.x) - this.ctx.lineWidth;
    const yMin = Math.min(currentPos.y, previousPos.y) - this.ctx.lineWidth;
    const xMax = Math.max(currentPos.x, previousPos.x) + this.ctx.lineWidth;
    const yMax = Math.max(currentPos.y, previousPos.y) + this.ctx.lineWidth;

    return {
      startIndex: 4 * (yMin * this.width + (xMin % this.width)),
      endIndex: 4 * (yMax * this.width + (xMax % this.width))
    };
  }

  sendImageDiff() {
    const { startIndex, endIndex } = this.indexRange();

    const newData = this.data();
    const newPixelIndexes = [];
    const newPixels = [];

    for (let i = startIndex; i <= endIndex; i += 1) {
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
    const data = this.data();
    const { length } = diffData;
    const diffImage = new ImageData(data, this.width, this.height);

    for (let i = 0; i < length; i += 1) data[diffIndex[i]] = diffData[i];
    this.ctx.putImageData(diffImage, 0, 0);
  }

  toggleEraser() {
    return () => {
      if (this.pointer.eraser) {
        this.ctx.globalCompositeOperation = 'source-over';
        this.pointer.eraser = false;
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 2;
        this.uiButton.id = 'eraser';
      } else {
        this.ctx.globalCompositeOperation = 'destination-out';
        this.pointer.eraser = true;
        this.ctx.strokeStyle = 'rgba(0,0,0,1)';
        this.ctx.lineWidth = 20;
        this.uiButton.id = 'pencil';
      }
    };
  }
}

Object.assign(window, { drawing: new Drawing() });
