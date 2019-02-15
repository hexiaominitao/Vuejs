let randomNumber = Math.floor(Math.random() *100) +1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessFiled = document.querySelector('.guessFiled');

let guessCount = 1;
let resetButton;

guessFiled.focus();

function checkGuess(){
    let userGuess = Number(guessFiled.value);
    if (guessCount === 1){
        guesses.textContent = '上次猜的数：';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber){
        lastResult.textContent = "答对了";
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = ' ';
        setGameOver();
    }else if (guessCount === 10){
        lastResult.textContent = "!!! GAME OVER";
        setGameOver();
    }else{
        lastResult.textContent = "你猜错了";
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randomNumber){
            lowOrHi.textContent = "低了";
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = '高了'
        }
    }
guessCount++;
guessFiled.value = '';
guessFiled.focus();
}
guessSubmit.addEventListener('click',checkGuess)


function setGameOver() {
    guessFiled.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '开始新游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }

// function setGameOver(){
//     guessFiled.disabled = ture;
//     guessSubmit.disabled = ture;
//     resetButton = document.createElement('button');
//     resetButton.textContent = '开始新游戏';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click',resetGame)
// }
function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i =0;i <resetParas.length;i++){
        resetParas[i].textContent = ' ';
    }
    resetButton.parentNode.removeChild(resetButton);
    // resetButton.parentNode.removeChild(resetButton);

    guessFiled.disabled = false;
    guessSubmit.disabled = false;
    guessFiled.value = '';
    guessFiled.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() *100) +1;
}
