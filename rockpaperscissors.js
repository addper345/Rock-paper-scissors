function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    switch(num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    if(humanChoice=='rock' && computerChoice=='paper')
    {
      computerScore +=1;
      console.log("Computer wins!");
    }
    if(humanChoice=='rock' && computerChoice=='scissors')
    {
        humanScore +=1;
        console.log("Human wins!");
    }
    if(humanChoice=='rock' && computerChoice=='rock')
    {
        console.log("tie");
    }
    if(humanChoice=='paper' && computerChoice=='paper')
    {
        console.log("tie");
    }
    if(humanChoice=='paper' && computerChoice=='scissors')
    {
        computerScore +=1;
        console.log("Computer wins!");
    }
    if(humanChoice=='paper' && computerChoice=='rock')
    {
        humanScore +=1;
        console.log("Human wins!");
    }
    if(humanChoice=='scissors' && computerChoice=='scissors')
        {
            console.log("tie");
        }
        if(humanChoice=='scissors' && computerChoice=='rock')
            {
                    computerScore +=1;
                    console.log("Computer wins!");
            }
            if(humanChoice=='scissors' && computerChoice=='paper')
                {
                        humanScore +=1;
                        console.log("Human wins!");
                }
        
    

}

function playGame() {
    for(let i = 1; i<=5; i++)
        {
            playRound(getHumanChoice(), getComputerChoice());
        }
    if(humanScore>computerScore) {
        console.log("You win overall!");
    }
    else if (humanScore === computerScore) {
        console.log("Tie game :|");
    } else {
        console.log("You lose :(");
    }
    humanScore = 0;
    computerScore = 0;
}