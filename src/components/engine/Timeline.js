// src/engine/Timeline.js

export default class Timeline {
  constructor() {
    this.events = [];
    this.currentTime = 0;
    this.running = false;

    this.lastTimestamp = null;

    this.tick = this.tick.bind(this);
  }

  /**
   * Add a timed event
   * @param {number} time - time in milliseconds
   * @param {Function} callback
   */
  add(time, callback) {
    this.events.push({
      time,
      callback,
      fired: false,
    });
  }

  /**
   * Start timeline loop
   */
  start() {
    this.running = true;
    this.lastTimestamp = performance.now();
    requestAnimationFrame(this.tick);
  }

  /**
   * Internal animation loop
   */
  tick(timestamp) {
    if (!this.running) return;

    const delta = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    this.currentTime += delta;

    this.update();

    requestAnimationFrame(this.tick);
  }

  /**
   * Check and fire events
   */
  update() {
    for (let event of this.events) {
      if (!event.fired && this.currentTime >= event.time) {
        event.callback();
        event.fired = true;
      }
    }
  }

  /**
   * Reset timeline
   */
  reset() {
    this.currentTime = 0;
    this.events.forEach((e) => (e.fired = false));
  }

  /**
   * Stop timeline
   */
  stop() {
    this.running = false;
  }

  /**
   * Clean up completely
   */
  destroy() {
    this.stop();
    this.events = [];
  }
}