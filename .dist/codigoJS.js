let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("b");

function getComputerChoice(){
    const choices = ['r', 'p', 's', 'l', 'b'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissor";
    if(letter === "l") return "Lizard";
    if(letter === "b") return "Spock";
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
}

function lose(userChoice, computerChoice){
    compScore++;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML= convertToWord(computerChoice) + " beats " + convertToWord(userChoice) + ". Sheldon wins!";
}

function draw(userChoice, computerChoice){
    result_div.innerHTML= convertToWord(computerChoice) + " is equal " + convertToWord(userChoice) + ". It's a draw";
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "rl":
        case "pr":
        case "pb":
        case "sp":
        case "sl":
        case "lb":
        case "lp":
        case "bs":
        case "br":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "lr":
        case "rp":
        case "bp":
        case "ps":
        case "ls":
        case "bl":
        case "pl":
        case "sb":
        case "rb":
            lose(userChoice, computerChoice);
            break;
        case "ss":
        case "ll":
        case "rr":
        case "bb":
        case "pp":
            draw(userChoice, computerChoice);
            break;
    }


    ///console.log("Your choice is: " + userChoice);
    ///console.log("Sheldon's choice is: " + computerChoice);
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })
    paper_div.addEventListener('click', function(){
        game("p");
    })
    scissor_div.addEventListener('click', function(){
        game("s");
    })
    lizard_div.addEventListener('click', function(){
        game("l");    
    })
    spock_div.addEventListener('click', function(){
        game("b");
    })
}

main();