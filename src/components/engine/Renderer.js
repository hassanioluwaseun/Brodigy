  // src/engine/Renderer.js

export default class Renderer {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  clear(color = "rgba(0, 0, 0, 0.25)") {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCircle(x, y, r, color, alpha = 1) {
    this.ctx.save();
    this.ctx.globalAlpha = alpha;

    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2);

    this.ctx.fillStyle = color;
    this.ctx.fill();

    this.ctx.restore();
  }
}