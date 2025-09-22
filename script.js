let gold = 0;
let wood = 0;

let heroPos = { x: 2, y: 2 }; // старт в центре 5x5

function updateResources() {
  document.getElementById("gold").textContent = gold;
  document.getElementById("wood").textContent = wood;
}

function drawMap() {
  const map = document.getElementById("map");
  map.innerHTML = ""; // очистить карту

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (heroPos.x === x && heroPos.y === y) {
        cell.classList.add("hero");
        cell.textContent = "🧙";
      }

      map.appendChild(cell);
    }
  }
}

function moveLeft() {
  if (heroPos.x > 0) heroPos.x--;
  drawMap();
}

function moveRight() {
  if (heroPos.x < 4) heroPos.x++;
  drawMap();
}

function farm() {
  const rand = Math.random();
  if (rand < 0.5) {
    const gain = Math.floor(Math.random() * 10) + 5;
    gold += gain;
    alert(`Вы нашли золото: +${gain}`);
  } else {
    const gain = Math.floor(Math.random() * 5) + 3;
    wood += gain;
    alert(`Вы срубили дерево: +${gain}`);
  }
  updateResources();
}

window.onload = () => {
  updateResources();
  drawMap();
};
