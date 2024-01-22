'use strict';

class HTMLGraphElement extends HTMLCanvasElement {
  #convertY = value => this.height - value;
  constructor (width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  adoptedCallback () { }
  attributeChangedCallback (attrName, oldVal, newVal) {
    if (oldVal !== newVal) this[attrName] = newVal;
  }
  connectedCallback () { }
  disconnectedCallback () { }
  static get observedAttributes () {
    return ['height', 'width'];
  }
  drawLine (startX, startY, endX, endY) {
    const ctx = this.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(startX, this.#convertY(startY));
    ctx.lineTo(endX, this.#convertY(endY));
    ctx.closePath();
    ctx.stroke();
  }
  drawLines (positions) {
    positions.forEach(({startX, startY, endX, endY}) =>  this.drawLine(startX, startY, endX, endY));
  }
  draw (positions, fill = false) {
    const ctx = this.getContext('2d');
    ctx.beginPath();
    const {x, y} = positions[0];
    ctx.moveTo(x, this.#convertY(y));
    positions.forEach((position, index) => {
      if (index) {
        const {x, y} = position;
        ctx.lineTo(x, this.#convertY(y));
      }
    });
    ctx.closePath();
    fill? ctx.fill(): ctx.stroke();
  }
  drawSquare (x, y, width, height, fill = false) {
    const ctx = this.getContext('2d');
    fill? ctx.fillRect(x, this.#convertY(y + height), width, height):
        ctx.strokeRect(x, this.#convertY(y + height), width, height);
  }
}
customElements.define('x-graph', HTMLGraphElement, {extends: 'canvas'});
