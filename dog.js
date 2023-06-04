const dog = document.getElementById("dog");
const tree = document.getElementById("tree");
let score = document.getElementById("score");

let playerScore = 0;
let interval = null;

let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Cчет: <b>${playerScore}</b>`;
}

function jump() {
  if (dog.classList != "jump") {
    dog.classList.add("jump");

    setTimeout(function () {
      dog.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  let dogTop = parseInt(window.getComputedStyle(dog).getPropertyValue("top"));
  let treeLeft = parseInt(window.getComputedStyle(tree).getPropertyValue("left"));

  if (treeLeft < 60 && treeLeft > 0 && dogTop >= 140) {
    alert("Игра окончена! Ваш счет: " + playerScore);
    playerScore = 0;
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
  let playerScore = 0;
  interval = setInterval(scoreCounter, 200);
});

