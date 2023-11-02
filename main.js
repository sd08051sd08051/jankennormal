// ジャンケンのエリア////////////////////////////

const hands = ["rock", "paper", "scissors"];

function onHandClick(btn) {
  const playerHand = btn.id;

  // ランダム関数の乱数には1を含まない
  const i = Math.floor(Math.random() * hands.length);

  const computerHand = hands[i];
  console.log(computerHand);
  const computerElement = document.querySelector("#computerHand");
  computerElement.innerText = computerHand;
  computerElement.classList.add("determined");
  console.log(computerElement);

  const result = judge(playerHand, computerHand);

  document.querySelector("#outcome").innerText = result;
}

function judge(playerHand, computerHand) {
  let result = undefined;

  if (playerHand === computerHand) {
    result = "全員";
  } else if (
    (playerHand === "rock" && computerHand === "scissors") ||
    (playerHand === "paper" && computerHand === "rock") ||
    (playerHand === "scissors" && computerHand === "paper")
  ) {
    result = "はる・ことみがお手伝い";
  } else {
    result = "めい・こゆきがお手伝い";
  }

  return result;
}

// 家事表示のエリア////////////////////////////

const form = document.getElementById("form");
const input = document.getElementById("input");
const taskSection = document.getElementById("task");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const task = input.value;
  addWithRandomSection();
});

input.value = "";
taskSection.innerText = "お手伝い内容：" + task;

// 家事表示のエリア////////////////////////////
