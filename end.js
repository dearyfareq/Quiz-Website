const score = localStorage.getItem("score");
const home = document.getElementById("home");
const playAgain = document.getElementById("play")

document.querySelector("h1").innerText = score

home.addEventListener("click", ()=>{return window.location.assign("./Quiz.html");})
playAgain.addEventListener("click", ()=>{return window.location.assign("./play.html");})




