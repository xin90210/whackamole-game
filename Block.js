class Block {
  constructor(controller, timestamp) {
    this.size = 40;
    this.offset = rnd(0, controller.canvas.width - this.size);
    this.color = "hsl(" + rnd(0, 360) + ", 60%, 50%";
    this.distance = 0;
    this.controller = controller;
    this.start = timestamp;
    this.time = rnd(1500, 3100);
    this.end = timestamp + this.time;
  }
}

