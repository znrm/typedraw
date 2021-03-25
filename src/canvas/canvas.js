import Pointer from './pointer';

class Drawing {
  constructor() {
    const [, , documentId, selection] = window.location.pathname.split('/');

    this.documentId = documentId;
    this.selection = selection;

    this.pointer = new Pointer();

    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    this.ctx = canvas.getContext('2d');

    this.ctx.lineWidth = 2;
    this.ctx.strokeStyle = 'black';
    this.ctx.lineCap = 'round';

    this.uiButton = document.querySelector('.ui-btn');

    this.addListeners();
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
    };
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
        this.ctx.lineWidth = 40;
        this.uiButton.id = 'pencil';
      }
    };
  }
}

Object.assign(window, { drawing: new Drawing() });
