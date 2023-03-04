//target the buttons and score
const score = localStorage.getItem("score");
const home = document.getElementById("home");
const playAgain = document.getElementById("play");

//update the score at the start
document.querySelector("h1").innerText = score;

//home and replay button functions
home.addEventListener("click", () => {
  return window.location.assign("./Quiz.html");
});
playAgain.addEventListener("click", () => {
  return window.location.assign("./play.html");
});
