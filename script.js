/*DOM Cashing*/
//score elements
let userScore = document.getElementById("user-score");
let compScore = document.getElementById("comp-score");

//result message element
let resultMsg = document.querySelector("#result-msg > p")
let compResultMsg = document.getElementById("revealCompChoice")
//choices elements
const rockChoice = document.getElementById("choice-rock");
const paperChoice = document.getElementById("choice-paper");
const scissorsChoice = document.getElementById("choice-scissors");

//Init Scores variables
let initUserScore = 0;
let initCompScore = 0;

//generate computer choice
function randomChoice(){
    return (Math.floor(Math.random() * 3));
}

function computerChoice(){
    let num = randomChoice();
    switch(num){
        case 0: return "Rock"; 
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

//evaluate game scenarios

function win(userChoice, compChoice){
    initUserScore++;
    userScore.innerHTML = initUserScore;
    let msg = `${userChoice} beats ${compChoice}. You win! &#128165`
    resultMsg.innerHTML = msg;
}

function lose(userChoice, compChoice){
    initCompScore++;
    compScore.innerHTML = initCompScore;
    let msg = `${userChoice} loses to ${compChoice}. You lose! &#10060`
    resultMsg.innerHTML = msg;
}

function draw(userChoice, compChoice){
    let msg = `${compChoice} equals ${userChoice}. It's a draw! &#127775`
    resultMsg.innerHTML = msg;
}

function game(userChoice){
    let compChoice = computerChoice();
    compResultMsg.innerHTML = compChoice;
    switch(userChoice + compChoice){
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            win(userChoice, compChoice);
            break;
        case 'RockPaper':
        case 'ScissorsRock':
        case 'PaperScissors':
            lose(userChoice, compChoice);
            break;
        default:
            draw(userChoice, compChoice);
    }
}

function main(){
    rockChoice.addEventListener('click', () => game('Rock'))
    paperChoice.addEventListener('click', () => game('Paper'))
    scissorsChoice.addEventListener('click', () => game('Scissors'))

}

main();