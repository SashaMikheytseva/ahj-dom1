/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/field.js
class Field {
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
;// CONCATENATED MODULE: ./src/js/goblin.js
function createGoblin() {
  const positions = Array.from(document.querySelectorAll(".cell"));
  const random = Math.floor(Math.random() * positions.length);
  positions[random].classList.add("goblin");
  setInterval(changePosition, 2000);
}
function changePosition() {
  const positions = Array.from(document.querySelectorAll(".cell"));
  const random = Math.floor(Math.random() * positions.length);
  const goblin = document.querySelector(".goblin");
  const posGoblin = positions.indexOf(goblin);
  if (posGoblin !== random) {
    positions[posGoblin].classList.remove("goblin");
    positions[random].classList.add("goblin");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here


const board = new Field();
board.draw();
createGoblin();
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;