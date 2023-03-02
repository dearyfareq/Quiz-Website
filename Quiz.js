const question = document.getElementById("question");
const choice = Array.from(document.getElementsByClassName("choice-text"));
const reset = document.getElementById("reset");
const score_tracker = document.getElementById("score_tracker");
const question_tracker = document.getElementById("question_tracker");

let currentQ = {};
let acceptingA = false;
let score = 0;
let qCounter = 0;
let availableQuestions = [];

let questions = [ {
    question: 'Inside which HTML element do we put the JavaScript??',
    choice1: '<script>',
    choice2: '<javascript>',
    choice3: '<js>',
    choice4: '<scripting>',
    answer: 1,
},
{
    question:
        "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3,
},
{
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
},]

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
    question_tracker.innerText = `${qCounter}/${maxQuestions}`
    
    const qIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQ = availableQuestions[qIndex];
    question.innerText = currentQ.question;

    choice.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQ['choice' + number]
    });

    availableQuestions.splice(qIndex, 1);
    acceptingA = false;
};

choice.forEach((choice) => {
    choice.addEventListener('click',(e) => {
        console.log("hi!")
        if (acceptingA) return;
        console.log("hi!!")
        acceptingA = false;
        const selectedChoice = e.target;
        const selectedAnwser = selectedChoice.dataset['number'];
        let classToApply = "incorrect"
        if(selectedAnwser == currentQ.answer){ 
            classToApply = "correct"
            score += currectAnwser;
            score_tracker.innerText = `Score = ${score}`;
        }
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000);
        
    });
});

reset.addEventListener('click', startGame())

startGame();
