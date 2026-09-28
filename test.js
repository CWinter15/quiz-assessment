let word = "BLEHH";

console.log(word.toLowerCase())

const tenna = 0;
const bowser = 1;
const kingDice = 2;

const tennaHealth = 100; //placeholder
const bowserHealth = 200; //placeholder
const diceHealth = 300; //placeholder

let testArray = [[]];

//tenna dialogue testArray[tenna][lineNumber]

let player = {
    name: "",
    enemy: tenna, //character the playter chose. tenna is an example
    score: 0, 
    questionsAnswered: 0,
    questionsRight: 0,
    questionsWrong: 0,
    health: 100
}


//doesnt have proper syntax just for example \/
//explaining how the questions could work
/*
let question = {
    startText: "name that red plumber",
    answers: ["mario", "luigi"],
    correctAnswer: 0 //index of correct answer
}

function initQuestion(startText, answer, correctAnswer){ //in  the name of the function
    let question = {
        startText: startText,
        answers: answer,
        correctAnswer: correctAnswer //index of correct answer
    }
    return question;
}

let questions = [
    initQuestion("name that red plumber",["mario", "luigi"],0), //question objects
    initQuestion("name that red plumber",["mario", "luigi"],0),
]

console.log(question.startText) //printing start text
console.log(answers)
answer = prompt 
if answer = quetsion[0].answer[question[0].correctAnswer]

for i -5
{
    question[i]
}
    */