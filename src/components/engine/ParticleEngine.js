// src/engine/ParticleEngine.js

import Particle from "./Particle";

export default class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.particles = [];
    this.imageData = null;

    this.animationId = null;

    this.init();
  }

  async init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());

    await this.loadImagePoints();

    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  async loadImagePoints() {
    const img = new Image();
    img.src = "/handshake.png";

    await img.decode();

    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    const scale = 0.4;

    tempCanvas.width = img.width * scale;
    tempCanvas.height = img.height * scale;

    tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);

    const data = tempCtx.getImageData(
      0,
      0,
      tempCanvas.width,
      tempCanvas.height
    ).data;

    const gap = 6;
    const points = [];

    for (let y = 0; y < tempCanvas.height; y += gap) {
      for (let x = 0; x < tempCanvas.width; x += gap) {
        const index = (y * tempCanvas.width + x) * 4;

        const alpha = data[index + 3];

        if (alpha > 128) {
          points.push({
            x: x + (this.canvas.width / 2 - tempCanvas.width / 2),
            y: y + (this.canvas.height / 2 - tempCanvas.height / 2),
          });
        }
      }
    }

    this.particles = points.map(
      (p) => new Particle(p.x, p.y, p.x, p.y)
    );
  }

  animate = () => {
    this.ctx.fillStyle = "rgba(2, 8, 18, 0.15)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach((p) => {
      p.update();
      p.draw(this.ctx);
    });

    this.animationId = requestAnimationFrame(this.animate);
  };

  destroy() {
    cancelAnimationFrame(this.animationId);
  }
}