
let gold = 0;
let wood = 0;
let xp = 0;
let level = 1;
let heroPos = { x: 2, y: 2 };

function updateResources() {
  document.getElementById("gold").textContent = gold;
  document.getElementById("wood").textContent = wood;
  document.getElementById("xp").textContent = xp;
  document.getElementById("level").textContent = level;
}

function drawMap() {
  const map = document.getElementById("map");
  map.innerHTML = "";
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (heroPos.x === x && heroPos.y === y) {
        cell.classList.add("hero");
        cell.textContent = "🧙";
      } else if (Math.random() < 0.1) {
        cell.textContent = "👹"; // крип
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
  if (rand < 0.3) {
    fightCreep();
  } else if (rand < 0.6) {
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

function fightCreep() {
  const creepHP = 10 + Math.floor(Math.random() * 10);
  const damage = 5 + Math.floor(Math.random() * 10);
  alert(`Вы сражаетесь с крипом (HP: ${creepHP})`);
  alert(`Вы нанесли ${damage} урона`);
  if (damage >= creepHP) {
    const lootGold = Math.floor(Math.random() * 10) + 5;
    const lootXP = Math.floor(Math.random() * 5) + 3;
    gold += lootGold;
    xp += lootXP;
    alert(`Победа! +${lootGold} золота, +${lootXP} XP`);
    checkLevelUp();
  } else {
    alert("Крип выжил и убежал...");
  }
}

function checkLevelUp() {
  const xpToLevel = level * 20;
  if (xp >= xpToLevel) {
    xp -= xpToLevel;
    level++;
    alert(`🎉 Новый уровень! Теперь вы уровень ${level}`);
  }
}

window.onload = () => {
  updateResources();
  drawMap();
};
