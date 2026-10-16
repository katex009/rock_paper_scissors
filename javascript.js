let humanScore = 0;
let ComputerScore = 0;

function playGame(n){
    
    const max = 3;
    

    for(let i=1; i <= n;i++ ){

        let choice = prompt("say your move: ")

        let humanChoice = getHumanChoice(choice)
        let computerChoice = getComputerChoice(max)

        playRound(humanChoice,computerChoice)

        console.log(humanScore);
        console.log(ComputerScore);
        
        
    }
}

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

console.log(playGame(5))