let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");

let userScorePara = document.querySelector("#userScore");
let computerScorePara = document.querySelector("#computerScore");

choices.forEach( (choice) => {

    choice.addEventListener("click" , () => {

        let userchoice = choice.getAttribute("id");
        playGame(userchoice);
    
    })

})

const playGame = (userchoice) => {

    console.log("User Choice =" , userchoice);

    // Computer Generated Choice

    let computerChoice =  generateComputerChoice();
    console.log("Computer Choice =" , computerChoice);

    if (userchoice == computerChoice) {

        console.log("It is a Draw");
        message.innerText = "Game was Draw. Play again"
        message.style.backgroundColor = "#081b31";

    }

    else {

        let userWin = true;

        if (userchoice === "Rock") {

           userWin = computerChoice === "Paper" ? false : true;
            
        }

        else if (userchoice === "Paper") {

            userWin = computerChoice === "Rock" ? true : false;
            
        }

        else {

            userWin = computerChoice === "Paper" ? true : false;
            
        }

        showWinner(userWin , userchoice , computerChoice);

    }

}

const generateComputerChoice = () => {

    let options = ["Rock" , "Paper" , "Scissors"];

    // Math.random() - It generate random numbers between 0 & 1

    const randomIdx = Math.floor(Math.random() * 3); // In math.randon fxn if we multipy it by any number it will generate number 1 less than it

    return options[randomIdx];
} 

const showWinner = (userWin, userchoice , computerChoice) => {

    if (userWin) {

        userScore ++;
        userScorePara.innerText = userScore;

        console.log("You Win"); 
        message.innerText = `You Win! Your ${userchoice} beats ${computerChoice}`;

        message.style.backgroundColor = "Green";

    } else {

        computerScore ++;
        computerScorePara.innerText = computerScore;

        console.log("You Lose");
        message.innerText = `You Lost ${computerChoice} beats your ${userchoice}`;

        message.style.backgroundColor = "Red";

    }

}