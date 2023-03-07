//target the buttons and score
const score = localStorage.getItem("score");
const home = document.getElementById("home");
const playAgain = document.getElementById("play");
const player = document.getElementById("player");
const save = document.getElementById("save");

//fetch the json from local storage
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const max_memory = 5;

//update the score at the start
document.querySelector("h1").innerText = score;

save.addEventListener("click", () =>{

  //if value is empty then dont play the function
    if(player.value == ''){return;}
    const addScore ={
        score: score,
        name: player.value
    }
    //sort the items
    highScores.push(addScore);
    highScores.sort((a, b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    return window.location.assign("./Quiz.html")
})

//home and replay button functions
home.addEventListener("click", () => {
  return window.location.assign("./Quiz.html");
});
playAgain.addEventListener("click", () => {
  return window.location.assign("./play.html");
});
