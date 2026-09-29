const prompt = require("readline-sync");
const consoleClear = require("console-clear");

consoleClear();
//get player info
let playerNameInput = prompt.question("Please enter your name: ");
let difficultyInput = "";
let questionN = 0;
let totalQuestions = 0;

do{
     difficultyInput = prompt.question("please choose a difficulty between easy, medium and hard: ");
     difficultyInput = difficultyInput.toLowerCase();
}while(difficultyInput != ("easy") && difficultyInput != ("medium") && difficultyInput != ("hard"));
consoleClear();
//set how many questions there are and an intro message
if(difficultyInput == "easy"){
totalQuestions = 5;
console.log("\nSTARRING MR.(ANT)TENNA, DON'T TOUCH THAT DIAL! IT'S TV TIME!\n");
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

//main quiz section
//stores how many questions the player has got right and wrong
let scoreStatus = 
{
   correctAnswers: 0,
   wrongAnswers: 0
}; 

function initQuestion(startText, correctAnswer){ //in the name of the function
    let question = {
        startText: startText,
        correctAnswer: correctAnswer //correct answer string
    }
    return question;
}

function askQuestion(){
    
    console.log(`Question ${questionN + 1}:\n${questions[questionN].startText}\n`);

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
    consoleClear();
    if(answer === questions[questionN].correctAnswer){
        console.log("Correct!")
        //adds 1 to correct answers
        scoreStatus.correctAnswers += 1;
    }else{
        switch(playerInfo.difficulty){
            case("easy"):
                console.log(`Mike!! Bring out the tissues!! ${playerInfo.playerName} got a question wrong.`);
            break;
            case("medium"):
                console.log(`More of that, that would be great, Battered and bruised that is your fate [incorrect]`);
            break;
            case("hard"):
                console.log(`Woah there that ain't right (looks like the boss is about to add to his collection)`);
            break;
            default:
                console.log(`incorrect`);
            break;
            
        }
        
        //adds 1 to wrong answers
        scoreStatus.wrongAnswers += 1;

    }
    console.log("")
    questionN++;
}
function printAfterPause(string, time){
    setTimeout(() => {
        console.log(string)        
    }, time);
    return time + 500;
}
function displayResults(wrong){
    consoleClear();
    let time = 500
    if(wrong == 3){
        //code
        switch(playerInfo.difficulty){
            case("easy"):
                time = printAfterPause("Aw, you lost! Though, you know what that means", time);
                time = printAfterPause("Another round!", time);
                time = printAfterPause("It's",time);
                time += 100;
                time = printAfterPause("TV",time);
                time += 200;
                time = printAfterPause("T-",time);

            break;
            case("medium"):
                time = printAfterPause("You lost my quiz, it's clear to see, with 3 wrong answers you can't defeat me", time)
            break;
            case("hard"):
                time = printAfterPause(`Well, well, well you lost... sorry ${playerInfo.playerName} seems that soul don't belong to you anymore`,time)
            break;
        }
        return 0;
    }
    let addSpace = ""
    for (var i = 0; i<playerInfo.playerName.length; i++){ //adds a space to ascii based on player name length to help alignment
        addSpace += " "
    }
    switch(playerInfo.difficulty){

        case("easy"): //tenna
            time = printAfterPause(` ${addSpace}                             _____           ____    _____  ____    _____
${addSpace}              \\            / |     |  |\\   | |    \\  |      |    |  |      |     | |
${addSpace}               \\    /\\    /  |     |  | \\  | |     | |_____ |____|  |_____ |     | |
${addSpace}                \\  /  \\  /   |     |  |  \\ | |     | |      |    \\  |      |     | |
WOW, ${playerInfo.playerName.toLocaleUpperCase()}! What a    \\/    \\/    |_____|  |   \\| |____/  |_____ |     \\ |      |_____| |_____ performance!`, time);
            time = printAfterPause(`It's (TV) time to look at those scores...`,time);
            time = printAfterPause(`${playerInfo.playerName.toLocaleUpperCase()} answered ${scoreStatus.correctAnswers} questions correctly!!!!!!`, time);
            if(wrong > 0){
                time += 100;
                let plural = ""
                if(wrong == 1){
                    plural = "s"
                }
                time = printAfterPause(`And ${playerInfo.playerName.toLocaleUpperCase()} left audiences on the edge of their seats when they answered a total of ${wrong} question${plural} incorrectly [looks performatively glooby]`,time);

            }else{
                time += 100;
                time = printAfterPause(`                 _____ 
                |       |      |  |\\   |
                |_____  |      |  | \\  |
                |       |      |  |  \\ |
OH! look at the |       |______|  |   \\| meter!!!`,time);
                time = printAfterPause(`${playerInfo.playerName.toUpperCase()} GOT NO QUESTIONS WRONG!!!`,time);
                time = printAfterPause(`MARVELOUS!`, time);

            }
            //console.log(`With a final score of...`);
            time += 200;
            time = printAfterPause(`AND WITH THAT folks, we have come to the end of this round.`,time);
            time = printAfterPause(`BUT DON'T TOUCH THAT DIAL, ${playerInfo.playerName.toLowerCase()}! You know what? We might just have time for one more round!`,time);
            time = printAfterPause("How exciting!!!",time);
            time = printAfterPause("Aren't you excited!!",time);
            time = printAfterPause("You'll play again,right?!",time)
            time = printAfterPause("Say it with me!",time);
            time += 100;
            time = printAfterPause("It's",time);
            time += 100;
            time = printAfterPause("TV",time);
            time += 200;
            time = printAfterPause("T-",time);
        break;
        case("medium"):
            time = printAfterPause("Drat the dreaded player won but I wasn't done having my fun",time);
            if(wrong < 1){
                time = printAfterPause("All questions right?! This cannot be. I must take flight, loss doesnt suit me.",time);
            }else{
                let plural = ""
                if(wrong == 1){
                    plural = "s"
                }
                time = printAfterPause(`I preferred the ${wrong} time${plural} you failed, after that you should have bailed`,time);
            }
        break;
        case("hard"):
            time = printAfterPause("You won... The boss won't be happy about this",time);
            if(wrong < 1){
                time = printAfterPause("Well, you rolled the dice and won, I'll betcha the boss has an offer you won't be able to resist\n[you got all questions correct!]",time);
            }else{
                let plural = ""
                if(wrong == 1){
                    plural = "s"
                }
                time = printAfterPause(`And they only got ${wrong} question${plural} wrong`,time);
            }
        break;
        default:
            console.log("ERROR: either player entered a difficulty that does not exits, or there is a problem with the switch cases");
        break;
    }
}

let questions = [
    initQuestion("Name that red plumber\nA)Mario   B)Luigi\nC)Wario   D)Michael","a"), //placeholder
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
    //questions stored in an array
]
//win condition checks should include this function below to continue gameplay

for(let i=0; i<totalQuestions; i++){
    askQuestion();

 if(scoreStatus.wrongAnswers == 3){
    break;
 }
}

displayResults(scoreStatus.wrongAnswers)
