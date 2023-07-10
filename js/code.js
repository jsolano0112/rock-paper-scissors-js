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
const message = document.getElementById("message")
const attempsC = document.getElementById("tryC")
const attempsU = document.getElementById("tryU")
const btnReset = document.getElementById("btn-reset")

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

btnReset.addEventListener('click', resetGame);


function play(userOption) {
    const computerOption = Math.floor(Math.random() * 3);
    const result = calcResult(userOption, computerOption);


    emojis(userOption, userEmoji);

    emojis(computerOption, computerEmoji);

    switch (result) {
        case TIE:
            resultText.innerHTML = "TIE!";
            resultText.style.background = '#FAB696';
            break;
        case WIN:
            resultText.innerHTML = "U WIN! :D";
            resultText.style.background = '#69C181';
            break;
        case LOST:
            resultText.innerHTML = "U LOST :(";
            resultText.style.background = '#F16767';
            break;
    }


}


function emojis(play, emoj) {
    if (play === ROCK) {
        emoj.innerHTML = "🥌";
    } else if (play === PAPER) {
        emoj.innerHTML = "📋";
    } else if (play === SCISSORS) {
        emoj.innerHTML = "✂";
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

// while (attempsC < 3 && attempsU < 3) {

//     if (resultText === "U WIN! :D") {
//         attempsC = attempsC + 1;
//     } else if (resultText === "U LOST :(") {
//         attempsU = attempsU + 1;
//     }
// }

attempsC = 0;
attempsU = 0;

if (attempsU === 0 || attempsC === 0) {
    message.innerHTML = "acabó";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

}


function resetGame() {
    location.reload()
}
