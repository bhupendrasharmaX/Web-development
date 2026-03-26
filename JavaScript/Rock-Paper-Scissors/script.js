let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#message");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ramdomIndex = Math.floor(Math.random() * 3);
    return options[ramdomIndex];
};

const drawGame = () =>{
    message.innerText = "Game was draw Play again";
    message.style.backgroundColor = "black";
};

const showWiner = (userWin,userChoice,computerChoice) =>{
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        message.innerText = `You lose! ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin= computerChoice === paper ? false : true;
        }else if (userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false: true;
        }else{
            userWin = computerChoice === "rock" ? false: true;
        }
        showWiner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});