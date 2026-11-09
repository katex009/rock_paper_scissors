let humanScore = 0;
let ComputerScore = 0;
let max = 3;


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(max){

    let n = getRandomInt(max)

    if (n === 1){
        console.log("Computer: Rock");
        return ("rock");
    }
    else if (n === 2){
        console.log("Computer: Paper");
        return ("paper");
    }
    else {
        console.log("Computer: Scissors");
        return ("scissors");
    }
}

function getHumanChoice(choice){

    if (choice.toLowerCase() === "rock"){
        console.log("You: rock");
        return ("rock");
    }
    else if (choice.toLowerCase() === "paper"){
        console.log("You: Paper");
        return ("paper");
    }
    else if (choice.toLowerCase() === "scissors"){
        console.log("You: scissors");
        return ("scissors");
    }
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === "rock" && computerChoice === "scissors"){

        console.log("You win, rock beats scissors!!");
        humanScore++;
    }
    else if ( humanChoice === "paper" && computerChoice === "rock"){

        console.log("You win, paper beats rock!!");
        humanScore++;
    }
    else if ( humanChoice === "scissors" && computerChoice === "paper"){

        console.log("You win, scissors beats paper!!");
        humanScore++;
    }
    else if ( humanChoice === "scissors" && computerChoice === "rock"){

        console.log("You lost, rock beats scissors!!");
        ComputerScore++;
    }
    else if ( humanChoice === "rock" && computerChoice === "paper"){

        console.log("You lost, paper beats rock!!");
        ComputerScore++;
    }
    else if ( humanChoice === "paper" && computerChoice === "scissors"){

        console.log("You lost, scissors beats paper!!");
        ComputerScore++;
    }
    else { console.log("tie") }
}



const btn = document.querySelector("button");

btn.addEventListener("click", function play(e){
    
    for(let i; i < 5; i++){

    let choice = document.getElementById("choice");

    let humanChoice = getHumanChoice(choice);
    let computerChoice = getComputerChoice(max);

    playRound(humanChoice, computerChoice);
        
    let human = document.createElement("p");
    let computer = document.createElement("p");

    let container = document.querySelector("div");

    human.textContent = humanScore;
    computer.textContent = ComputerScore;

    container.appendChild(human);
    container.appendChild(computer);
    
    
    }
    let result = document.createElement("p");
    
    if (humanScore > ComputerScore){
        result.textContent = "Ganaste!!!!";
    }
    else { result.textContent = "Perdiste :("; };

    container.appendChild(result);

    e.preventDefault();
})