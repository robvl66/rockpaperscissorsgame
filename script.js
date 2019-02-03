let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "U".fontsize(3).sup();
    const smallCompword = "C".fontsize(3).sup();
    result_div.innerHTML = `${userChoice}${smallUserword} beats ${computerChoice}${smallCompword}. You win! ➕`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "U".fontsize(3).sup();
    const smallCompword = "C".fontsize(3).sup();
    result_div.innerHTML = `${computerChoice}${smallCompword} beats ${userChoice}${smallUserword}. You lose! ➖`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserword = "U".fontsize(3).sup();
    const smallCompword = "C".fontsize(3).sup();
    result_div.innerHTML = `${userChoice}${smallUserword} equals  ${computerChoice}${smallCompword}. It's a draw! 🚫`;
    document.getElementById(userChoice).classList.add('blue-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('blue-glow'), 300);
}

function game(userChoice)        {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(userChoice, computerChoice)
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(userChoice, computerChoice)
            break;
        default:
            draw(userChoice, computerChoice)
            break;
    }

}

function main(){
rock_div.addEventListener('click', () => game("Rock"));

paper_div.addEventListener('click', () => game("Paper"));

scissors_div.addEventListener('click', () =>  game("Scissors")); 
}

main();