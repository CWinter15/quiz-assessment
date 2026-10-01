const prompt = require("readline-sync");
const consoleClear = require("console-clear");
const tenna = 0;
const gruntilda = 1;
const kingDice = 2;


consoleClear(); //clears the terminal

//get player info
let playerNameInput = prompt.question("Please enter your name: ");
let difficultyInput = "";
let questionN = 0;
let totalQuestions = 0;

//validating difficulty input
do{
     difficultyInput = prompt.question("please choose a difficulty between easy, medium and hard: ");
     difficultyInput = difficultyInput.toLowerCase();
}while(difficultyInput != ("easy") && difficultyInput != ("medium") && difficultyInput != ("hard"));

consoleClear();

//set how many questions there are and an intro message
if(difficultyInput == "easy"){
    totalQuestions = 5;
    console.log("STARRING MR.(ANT)TENNA, DON'T TOUCH THAT DIAL! IT'S TV TIME!");
}else if(difficultyInput == "medium"){
    totalQuestions = 10;
    console.log("\nWelcome all to Gruntilda's lair, now be warned i'm no nice witch, player\n");
}else if(difficultyInput == "hard"){
    totalQuestions = 15;
    console.log("\nWelcome " + playerNameInput + " are you ready to roll the dice with the king himself?\n")
}

console.log("")

//player information stored in object
let playerInfo =
{
    playerName: playerNameInput, difficulty: difficultyInput
};

//stores how many questions the player has got right and wrong
let scoreStatus = 
{
   correctAnswers: 0,
   wrongAnswers: 0
}; 

/*
initialises question objects
    inputs =
    startText -> <string> this is the actual question INCLUDE ANSWERS
    correctAnswer -> <int> index of the correct answer
  outputs =
    question <object> {same as input}
*/
function initQuestion(startText, correctAnswer){
    let question = {
        startText: startText,
        correctAnswer: correctAnswer
    }
    return question;
}

/*
presents the questions to the player, validates their inputs, and updates score and relevant values
  inputs = 
    wrong -> <int> number of wrong answers
  no outputs
*/
function askQuestion(){
    
    console.log(`Question ${questionN + 1}:\n${questions[questionN].startText}\n`);

    let answer;
    let valid = false;

    //asks user for answer and checks validation
    while (!valid){
        answer = prompt.question("");
        answer = answer.toLowerCase();
        if(answer === "a" || answer === "b" || answer === "c" || answer === "d"){
                valid = true;
        }else{
            console.log("Invalid answer");
        }
    }

    consoleClear();

    //if answer is correct
    if(answer === questions[questionN].correctAnswer){
        console.log("Correct!")
        scoreStatus.correctAnswers += 1;
    }else{
        switch(playerInfo.difficulty){
            case("easy"): //tenna
                console.log(responses[tenna][16]);
            break;
            case("medium"): //Gruntilda
                console.log(responses[gruntilda][0]);
            break;
            case("hard"): //king dice
                console.log(responses[kingDice][0]);
            break;
            
        }
        scoreStatus.wrongAnswers += 1;

    }
    console.log("")
    questionN++;
}

/*
prints after a pause, does not stop code so all prints after should go through this function
    inputs =
        string -> <string> the text to print
        time -> how long to wait for
    outputs =
        time + 500 (this should be stored in a variable and then passed back in to this function the next time it is used to keep pause dialogue in order)
*/
function printAfterPause(string, time){
    setTimeout(() => {
        console.log(string)        
    }, time);
    return time + 500;
}

/*
displays final results
    inputs =
        wrong -> <int> number of wrong answers
    no outputs
*/
function displayResults(wrong){

    consoleClear();
    let time = 500

    //if the player failed the quiz
    if(wrong == 3){ 
        switch(playerInfo.difficulty){
            case("easy"): //tenna
                time = printAfterPause(responses[tenna][14], time);
                time = printAfterPause(responses[tenna][15], time);
                time = printAfterPause(responses[tenna][8],time);
                time += 100;
                time = printAfterPause(responses[tenna][9],time);
                time += 200;
                time = printAfterPause(responses[tenna][10],time);
            break;
            case("medium"): //Gruntilda
                time = printAfterPause(responses[gruntilda][1], time)
            break;
            case("hard"): //king dice
                time = printAfterPause(responses[kingDice][1],time)
            break;
        }
        return null; //output value not intended to be used.
    }

    //adds a space to ascii based on player name length to help alignment
    let addSpace = ""
    for (var i = 0; i<playerInfo.playerName.length; i++){
        addSpace += " "
    }

    //adds "s" for strings that are not always plural
    let plural = ""
    if(wrong > 1){
        plural = "s"
    }

    //actual results
    switch(playerInfo.difficulty){

        case("easy"): //tenna
            time = printAfterPause(responses[tenna][0], time);
            time = printAfterPause(responses[tenna][1],time);
            time = printAfterPause(`${playerInfo.playerName.toLocaleUpperCase()} answered ${scoreStatus.correctAnswers} questions correctly!!!!!!`, time); //couldn't be part of the main array as correct answers would not be known when it was initialised
            
            //if the player got all questions right
            if(wrong === 0){
                time += 100;
                time = printAfterPause(responses[tenna][11],time);
                time = printAfterPause(responses[tenna][12],time);
                time = printAfterPause(responses[tenna][13], time);
            }else{
                time += 100;
                time = printAfterPause(`And ${playerInfo.playerName.toLocaleUpperCase()} left audiences on the edge of their seats when they answered a total of ${wrong} question${plural} incorrectly [looks performatively glooby]`,time);
            }
            time += 200;
            for(let i = 2; i < 8; i++){
            time = printAfterPause(responses[tenna][i],time);
            }
            time += 100;
            time = printAfterPause(responses[tenna][8],time);
            time += 100;
            time = printAfterPause(responses[tenna][9],time);
            time += 200;
            time = printAfterPause(responses[tenna][10],time);
            //program ends and cuts him off
        break;
        case("medium"): //Gruntilda
            time = printAfterPause(responses[gruntilda][2],time);

            //if the player got all questions right
            if(wrong < 1){
                time = printAfterPause(responses[gruntilda][3],time);
            }else{
                time = printAfterPause(`I preferred the ${wrong} time${plural} you failed, after that you should have bailed`,time);
            }
        break;
        case("hard"): //king dice
            time = printAfterPause(responses[kingDice][2],time);

            //if the player got all questions right
            if(wrong < 1){
                time = printAfterPause(responses[kingDice][3],time);
            }else{
                time = printAfterPause(`And they only got ${wrong} question${plural} wrong`,time);
            }
        break;
    }
}

//the array which stores the questions
let questions = [
    initQuestion("Name that red plumber\nA)Mario   B)Luigi\nC)Wario   D)Michael","a"),
    initQuestion("what does pac-man face\nA)Berries   B)Cats\nC)Vampires   D)Ghosts","d"),
    initQuestion("what is the exploding minecraft enemy\nA)Stalker   B)Creeper\nC)Bob-omb   D)Splody man","b"),
    initQuestion("what iconic wii game has you play bowling\nA)Bowl-o-rama   B)Wii sports\nC)Wii bowling   D)Bowling simulator","b"),
    initQuestion("name that yellow electric mouse\nA)Pikachu   B)Shocky Rat\nC)Dedene   D)Picachu","a"),
    initQuestion("How many chaos emeralds are there\nA)2   B)6\nC)5   D)7","d"),
    initQuestion("What theme plays when you fight sans in undertale\nA)The world revolving   B)Megalovania\nC)Bonetrousle   D)A fight against sans","b"),
    initQuestion("what device goes on the players wrist in fallout 4\nA)pip-girl   B)pip-man\nC)pip-boy   D)bunker-watch","c"),
    initQuestion("what is the name of playstations robot character\nA)Astro   B)Bot\nC)G.L.A.D.O.S   D)Data","a"),
    initQuestion("what is the blade of evil's bane\nA)Excalibur   B)Keyblade\nC)Glamdring   D)Master Sword","d"),
    initQuestion("What character will scold you for changing the 3ds time in the yo-kai watch series\nA)Gargaros   B)Gregg\nC)Ogralos   D)Orcanos","a"),
    initQuestion("what is Alegander Jamfoot's favourite bugsnak\nA)Bunger   B)Cappucceettle\nC)Scoopy Banoopy   D)Pizza","b"),
    initQuestion("Who is the protagonist of blue prince\nA)Alvin   B)Simon\nC)Theodore   D)Arthur","b"),
    initQuestion("What is the serial number of queen from deltarune\nA)Q5U4EX7YY2E9N   B)RGN533F08\nC)D31T9RUN3   D)AFD6J5HBFY67T","a"),
    initQuestion("What game has been run on nearly everything\nA)Minecraft   B)Doom\nC)GTA6   D)Sonic The hedgehog 06","b")
]
//adds a space to ascii based on player name length to help alignment
let addSpace = ""
for (var i = 0; i<playerInfo.playerName.length; i++){
    addSpace += " "
}
//the 2D array of responses
let responses = [
    [ //tenna
    ` ${addSpace}                             _____           ____    _____  ____    _____
${addSpace}              \\            / |     |  |\\   | |    \\  |      |    |  |      |     | |
${addSpace}               \\    /\\    /  |     |  | \\  | |     | |_____ |____|  |_____ |     | |
${addSpace}                \\  /  \\  /   |     |  |  \\ | |     | |      |    \\  |      |     | |
WOW, ${playerInfo.playerName.toLocaleUpperCase()}! What a    \\/    \\/    |_____|  |   \\| |____/  |_____ |     \\ |      |_____| |_____ performance!`,
    `It's (TV) time to look at those scores...`,
    `AND WITH THAT folks, we have come to the end of this round.`,
    `BUT DON'T TOUCH THAT DIAL, ${playerInfo.playerName.toLowerCase()}! You know what? We might just have time for one more round!`,
    "How exciting!!!",
    "Aren't you excited!!",
    "You'll play again,right?!",
    "Say it with me!",      
    "It's",
    "TV",
    "T-",
    `                 _____ 
                |       |      |  |\\   |
                |_____  |      |  | \\  |
                |       |      |  |  \\ |
OH! look at the |       |______|  |   \\| meter!!!`,
    `${playerInfo.playerName.toUpperCase()} GOT NO QUESTIONS WRONG!!!`,
    `MARVELOUS!`,
    "Aw, you lost! Though, you know what that means",
    "Another round!",
    `Mike!! Bring out the tissues!! ${playerInfo.playerName} got a question wrong.`
    ],
    [ //gruntilda
        `More of that, that would be great, Battered and bruised that is your fate [incorrect]`,
        "You lost my quiz, it's clear to see, with 3 wrong answers you can't defeat me",
        "Drat the dreaded player won but I wasn't done having my fun",
        "All questions right?! This cannot be. I must take flight, loss doesnt suit me."
    ],
    [
        `Woah there that ain't right (looks like the boss is about to add to his collection)`,
        `Well, well, well you lost... sorry ${playerInfo.playerName} seems that soul don't belong to you anymore`,
        "You won... The boss won't be happy about this",
        "Well, you rolled the dice and won, I'll betcha the boss has an offer you won't be able to resist\n[you got all questions correct!]"
    ]
]

//main gameplay loop
for(let i=0; i<totalQuestions; i++){
    askQuestion();

 if(scoreStatus.wrongAnswers == 3){
    break;
 }
}
//final results
displayResults(scoreStatus.wrongAnswers);