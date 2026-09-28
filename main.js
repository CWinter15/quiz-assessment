

//something to ask the player what enemy they want

//main quiz section

function initQuestion(startText, correctAnswer){ //in  the name of the function
    let question = {
        startText: startText,
        correctAnswer: correctAnswer //correct answer string
    }
    return question;
}
let questionN = 0; //REMOVE THIS WHEN MERGING
function askQuestion(){
    console.log(questions[questionN].startText + "\n")

    let answer;
    let valid = false;
    while (!valid){
        answer = prompt.question("");
        answer = answer.toLowerCase();
        if(answer === "a" || answer === "b" || answer === "c" || answer === "d"){
                valid = true;
            
        }else{
            console.log("Invalid answer");
        }
    }
    

}

let questions = [
    initQuestion("Name that red plumber\nA)Mario   B)Luigi\nC)Wario   D)Michael","a"), //placeholder
    initQuestion("Question 2\nA)1   B)2\nC)3   D)4","c"),
    //enter real questions here
]