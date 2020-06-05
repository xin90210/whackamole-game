class Controller {
  constructor(canvas, score) {
    this.canvas = canvas;
    this.ctx = this.canvas.context;
    this.blocks = [];
    this.next = 0;
    this.score = score;
    this.points = 0;
  }

  createBlock(timestamp) {
    this.blocks.push(new Block(this, timestamp));
  }

  start() {
    this.score.innerText = this.points = 0;
    requestAnimationFrame(this.animate.bind(this));

    this.canvas.link.onmousedown = ({ x, y }) => {
      const i = this.blocks.findIndex(block =>
        x >= block.offset && x <= block.offset + block.size && y >= block.distance && y <= block.distance + block.size);
      if (i >= 0) {
        this.blocks.splice(i, 1);
        this.canvas.link.style.cursor = "grabbing";
        this.canvas.link.onmouseup = () => this.canvas.link.style.cursor = "default";
        this.score.innerText = ++this.points
      }
    }
  }

  stop() {
    cancelAnimationFrame(this.frame);
    this.blocks.length = 0;
    this.canvas.clear();
  }

  animate(timestamp) {
    if (timestamp > this.next) {
      this.createBlock(timestamp);
      this.next = timestamp + rnd(300, 1800);
    }
    this.canvas.clear();
    this.blocks.forEach(block => {
      this.ctx.fillStyle = block.color;
      block.distance = (timestamp - block.start) * this.canvas.height / block.time;
      if (block.distance < this.canvas.height) this.ctx.fillRect(block.offset, block.distance, block.size, block.size);

    })
    this.blocks = this.blocks.filter(block => block.end > timestamp)
    this.frame = requestAnimationFrame(this.animate.bind(this));
  }
}

