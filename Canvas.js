class Canvas {
  constructor() {
    this.link = document.getElementById('canvas');
    this.width = this.link.width = innerWidth -10;
    this.height = this.link.height = innerHeight - 100;
    this.context = this.link.getContext('2d');
  }
  clear() {
    this.context.clearRect(0, 0, this.width, this.height);
  }
}