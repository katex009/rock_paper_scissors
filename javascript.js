let humanScore = 0;
let ComputerScore = 0;
let max = 3;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(max){

    let n = getRandomInt(max)

    if (n === 1){
        return ("rock");
    }
    else if (n === 2){
        return ("paper");
    }
    else {
        return ("scissors");
    }
}

function getHumanChoice(choice){

    if (choice.toLowerCase() === "rock"){
        return ("rock");
    }
    else if (choice.toLowerCase() === "paper"){
        return ("paper");
    }
    else if (choice.toLowerCase() === "scissors"){
        return ("scissors");
    }
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === "rock" && computerChoice === "scissors"){

        humanScore++;
    }
    else if ( humanChoice === "paper" && computerChoice === "rock"){

        humanScore++;
    }
    else if ( humanChoice === "scissors" && computerChoice === "paper"){

        humanScore++;
    }
    else if ( humanChoice === "scissors" && computerChoice === "rock"){

        ComputerScore++;
    }
    else if ( humanChoice === "rock" && computerChoice === "paper"){

        ComputerScore++;
    }
    else if ( humanChoice === "paper" && computerChoice === "scissors"){

        ComputerScore++;
    }
}



const btn = document.querySelector("button");
let container = document.querySelector("div");


let round = 0;
let maxRound = 5;

btn.addEventListener("click", function play(e){
    
    let input = document.getElementById("choice");
    let choice = "";
    choice = input.value;

    let humanChoice = getHumanChoice(choice);
    let computerChoice = getComputerChoice(max);

    playRound(humanChoice, computerChoice);

    round++
        
    let score = document.createElement("p");
    let displayHuman = document.createElement("p")
    let displayComputer = document.createElement("p")
    
    displayHuman.textContent = `You: ${humanChoice}`
    displayComputer.textContent = `Computer: ${computerChoice}`
    score.textContent = `You: ${humanScore} |  computer: ${ComputerScore}`;

    container.appendChild(displayHuman);
    container.appendChild(displayComputer);
    container.appendChild(score);

    if (round === maxRound) {
        let finalMessage = document.createElement("h3");
        
        if (humanScore > ComputerScore) {
            finalMessage.textContent = "YOU WIN!!!";
        } else if (humanScore < ComputerScore) {
            finalMessage.textContent = "you lost try again";
        } else {
            finalMessage.textContent = "tie :]";
        }
    
        container.appendChild(finalMessage);
    }

    input = document.querySelector("input");
    input.focus();
    input.value = "";
    
    
})