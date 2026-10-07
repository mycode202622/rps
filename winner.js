// // console.log(location.search);
// const params = new URLSearchParams(location.search);
// // console.log(params);
// console.log(params.get("u"));
// console.log(params.get("c"));
// // console.log(params.get("n"));
// const userImg = document.querySelector(".user");
// const computerImg = document.querySelector(".computer");
// // console.dir(userImg, computerImg);
// userImg.src = `./images/${params.get("u")}.png`
// computerImg.src = `./images/${params.get("c")}.png`

const params = new URLSearchParams(location.search);

const user = params.get("u");
const computer = params.get("c");

const userImg = document.querySelector(".user");
const computerImg = document.querySelector(".computer");

userImg.src = `./images/${user}.png`;
computerImg.src = `./images/${computer}.png`;

// user === "0" && computer === "1" winner = "computer";
// user === "0" && computer === "2" winner = "you";
// user === "1" && computer === "0" winner = "you";
// user === "1" && computer === "2" winner = "computer";
// user === "2" && computer === "0" winner = "computer";
// user === "2" && computer === "1" winner = "you";

let winner;
console.log(user, computer);

if (user === computer) {
  winner = "draw";
} else if (user === "0" && computer === "1") {
  winner = "computer";
} else if (user === "0" && computer === "2") {
  winner = "you";
} else if (user === "1" && computer === "0") {
  winner = "you";
} else if (user === "1" && computer === "2") {
  winner = "computer";
} else if (user === "2" && computer === "0") {
  winner = "computer";
} else if (user === "2" && computer === "1") {
  winner = "you";
}

console.log(winner);

switch (winner) {
  case "draw":
    document.querySelector(".user-pick h2").textContent = "нічия";
    document.querySelector(".comp-pick h2").textContent = "нічия";
    // document.body.style.backgroundColor = "yellow";
    break;

  case "you":
    document.querySelector(".user-pick h2").textContent = "ти переміг";
    document.body.style.backgroundImage = "url(./images/you-win.svg)";
    document.body.style.backgroundPosition = "left top";

    break;

  case "computer":
    document.querySelector(".comp-pick h2").textContent = "переміг комп'ютер";
    document.body.style.backgroundImage = "url(./images/computer-wins.svg)";
    document.body.style.backgroundPosition = "right top";

    break;

  default:
    break;
}

document.querySelector("button").addEventListener("click",()=>{
  console.log("okay");
  
  window.location.href="./index.html"
})

// flex winner github