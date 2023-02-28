const question = document.getElementById("question")
const choice = Array.from(document.getElementsByClassName("choice-text"))

let currentQ = {};
let acceptingA = false;
let score = 0;
let qCounter = 0;
let availableQuestions = [];

let questions = []

const currectAnwser = 5;
const maxQuestions = 10;

startGame = () => {
    qCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions === 0 || maxQuestions < qCounter) {
        return window.location.assign('/end.html');
    };

    qCounter += 1;
    const qIndex = Math.floor(Math.random() = availableQuestions.length);
    currentQ = availableQuestions[qIndex];
    question.innerHTML = currentQ.question;

    choice.forEach(choice => {
        const number = choice.dataset("number");
        choice.innerHTML = currentQ["choice" + number]
    });

    availableQuestions.splice(qIndex, 1);
    acceptingA = true;
};

choice.forEach(choice => {
    choice.addEventListener('click', e => {
        if (acceptingA) return;
        acceptingA = false;
        const selectedChoice = e.target;
        const selectedAnwser = selectedChoice.dataset('number');
        console.log(selectedAnwser);
        getNewQuestion();
    });
});

startGame();
