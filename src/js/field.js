export default class Field {
  constructor() {
    this.size = 4;
  }

  draw() {
    const field = document.querySelector(".field");
    for (let i = 0; i < this.size * 4; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      field.appendChild(cell);
    }
  }
}
