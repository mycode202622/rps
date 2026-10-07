const buttons = document.querySelectorAll("button");
// console.log(buttons);
buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener("click", (event) => {
    // console.log(event.currentTarget);
    // console.log(event.target);
    // console.dir(event.currentTarget.children[0].alt);
    let userChoice = event.currentTarget.children[0].alt;
    console.log(userChoice);
    const computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    switch (userChoice) {
      case "rock":
        userChoice = 0;
        break;
      case "paper":
        userChoice = 1;
        break;
      case "scissors":
        userChoice = 2;
        break;

      default:
        break;
    }
    console.log(userChoice);
    // window.location.href=`http://127.0.0.1:5500/x-js-pr/pr2-rps/winner.html?u=${userChoice}&c=${computerChoice}&n=${myName}`
    window.location.href=`./winner.html?u=${userChoice}&c=${computerChoice}`
  });
});









// console.log(Math);
// console.log(Math.random()*3);
// console.log(Math.floor(Math.random()*3));