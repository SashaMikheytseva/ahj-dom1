export default function createGoblin() {
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
