const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("result")
const computerEmoji = document.getElementById("computer");
const userEmoji = document.getElementById("user")

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOption) {
    const computerOption = Math.floor(Math.random() * 3);
    const result = calcResult(userOption, computerOption);

    if(userOption === ROCK){
        userEmoji.innerHTML = "🥌";
    }else if(userOption === PAPER){
        userEmoji.innerHTML = "📋";
    }else if(userOption === SCISSORS){
        userEmoji.innerHTML = "✂";
    }

    if(computerOption === ROCK){
        computerEmoji.innerHTML = "🥌";
    }else if(computerOption === PAPER){
        computerEmoji.innerHTML = "📋";
    }else if(computerOption === SCISSORS){
        computerEmoji.innerHTML = "✂";
    }
    
    switch (result) {
        case TIE:
            resultText.innerHTML = "TIE!";
            break;
        case WIN:
            resultText.innerHTML = "U WIN! :D";
            break;
        case LOST:
            resultText.innerHTML = "U LOST :(";
            break;
    }

}

function calcResult(userOption, computerOption) {
    if (userOption === computerOption) {
        return TIE;
    } else if (userOption === ROCK) {
        if (computerOption === PAPER) return LOST;
        if (computerOption === SCISSORS) return WIN;
    } else if (userOption === PAPER) {
        if (computerOption === SCISSORS) return LOST;
        if (computerOption === ROCK) return WIN;
    } else if (userOption === SCISSORS) {
        if (computerOption === ROCK) return LOST;
        if (computerOption === PAPER) return WIN;
    }
}