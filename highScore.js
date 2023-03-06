const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const scores = Array.from(document.querySelectorAll('.score'));
const player = Array.from(document.querySelectorAll('.player'));
let counter = 0;
console.table(scores);
console.table(highScores);

scores.forEach((e) =>{
    e.innerHTML = highScores[counter].score;
    counter++;
})

counter = 0;

player.forEach((e) =>{
    e.innerHTML = highScores[counter].name;
    counter++;
})

