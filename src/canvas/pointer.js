class Pointer {
  constructor(x = 0, y = 0) {
    this.currentPos = { x, y };
    this.previousPos = { x, y };
    this.pressing = false;
    this.eraser = false;
  }

  update(e) {
    this.previousPos = this.currentPos;
    this.currentPos = {
      x: e.touches ? e.touches[0].clientX : e.clientX,
      y: e.touches ? e.touches[0].clientY : e.clientY
    };
  }

  down() {
    this.pressing = true;
  }

  up() {
    this.pressing = false;
  }
}

export default Pointer;
