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
\/example of what an instance of the object could look like
let question = {
    startText: "name that red plumber: ",
    correctAnswer: 0 //index of correct answer
}
-------------------------------------------
example psuedo code
function initQuestion(startText, correctAnswer){ //in  the name of the function
    let question = {
        startText: startText,
        correctAnswer: correctAnswer //correct answer string
    }
    return question;
}

let questions = [
    initQuestion("name that red plumber",["mario", "luigi"],0), //question objects
    initQuestion("name that red plumber",["mario", "luigi"],0),
]

console.log(question.startText) //printing start text
answer = prompt
if answer = quetsion[0].correct answer

for i -5
{
    question[i]
}
    */
