let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

const smallUserword = "U".fontsize(3).sup();
const smallCompword = "C".fontsize(3).sup();


function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

function getImg(C) {
    switch (C) {
        case "Rock":
           return '<img src="https://www.rpsgame.org/assets/img/rock.svg" alt="" height="80" width="80" >'
        case "Paper":
           return '<img src="https://www.rpsgame.org/assets/img/paper.svg" alt="" height="80" width="80" >'
        case "Scissors":
           return '<img src="https://www.rpsgame.org/assets/img/scissors.svg" alt="" height="80" width="80" >'
    }
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    uimg = getImg(userChoice);
    cimg = getImg(computerChoice);
    result_div.innerHTML = `${uimg} - ${cimg} <br> WIN ➕`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    uimg = getImg(userChoice);
    cimg = getImg(computerChoice);
    result_div.innerHTML = `${cimg} - ${uimg} <br> LOSE ➖`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    uimg = getImg(userChoice);
    cimg = getImg(computerChoice);
    result_div.innerHTML = `${cimg} -  ${cimg} <br> DRAW 🚫`;
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
