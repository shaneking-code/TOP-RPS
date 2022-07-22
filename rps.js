const result = document.querySelector("#result");
const scorebug = document.querySelector("#scorebug");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choice = Math.floor(Math.random()*3) + 1;
    if (choice == 1) {
        console.log("computer chose rock");
        return "rock";
    }
    if (choice == 2) {
        console.log("computer chose paper");
        return "paper";
    }
    if (choice == 3) {
        console.log("computer chose scissors");
        return "scissors";
    }
}
function playRound(playerChoice,computerChoice) {
    console.log("you chose " + playerChoice);
    if (playerChoice==computerChoice) {
        result.textContent = "no winner";
    }
    if ((playerChoice=="rock") && (computerChoice=="paper")) {
        result.textContent = "computer wins";
        computerScore += 1;
    }
    if ((playerChoice=="paper") && (computerChoice=="scissors")) {
        result.textContent = "computer wins";
        computerScore += 1;
    }
    if ((playerChoice=="scissors") && (computerChoice=="rock")) {
        result.textContent = "computer wins";
        computerScore += 1;
    }
    if ((playerChoice=="rock") && (computerChoice=="scissors")) {
        result.textContent = "you win";
        playerScore += 1;
    }
    if ((playerChoice=="paper") && (computerChoice=="rock")) {
        result.textContent = "you win";
        playerScore += 1;
    }
    if ((playerChoice=="scissors") && (computerChoice=="paper")) {
        result.textContent = "you win";
        playerScore += 1;
    }
    scorebug.textContent = playerScore + " to " + computerScore;
    if ((playerScore > 4) || (computerScore > 4)) {
        result.textContent = "Game over."
        if (playerScore == 5) {
            result.textContent = "You win the game";
        }
        if (computerScore == 5) {
            result.textContent = "Computer wins the game";
        }
        playerScore = 0;
        computerScore = 0;
    }
}
/*function game() {

    let playerWins   = 0;
    let computerWins = 0;

    console.log("playerWins = 0, computerWins = 0")

    while ((playerWins != 5) && (computerWins != 5)) {

        alert("Score is " + playerWins + " to " + computerWins);

        let playerChoice   = playerPlay();
        let computerChoice = computerPlay();

        let result = playRound(playerChoice,computerChoice);

        if (result=="you win") {
            playerWins += 1;
            alert("You win!")
        }
        if (result=="computer wins") {
            computerWins += 1;
            alert("You lose!")
        }
        else {
            continue;
        }
    }
    alert("Game over!")
}
game()*/
const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click',() => {
        playRound(button.id,computerPlay());
    })
});
