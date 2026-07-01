// src/engine/Particle.js

export default class Particle {
  constructor(x, y, tx = x, ty = y) {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;

    // target position (image shape)
    this.tx = tx;
    this.ty = ty;

    this.size = 2;
    this.ease = 0.05;

    this.color = "#ffffff";
  }

  update() {
    // move toward target (THIS CREATES THE IMAGE)
    this.x += (this.tx - this.x) * this.ease;
    this.y += (this.ty - this.y) * this.ease;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}