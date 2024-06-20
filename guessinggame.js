// guessgame.js

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game');
    const submitButton = document.getElementById('submit-guess');
    const maxNumberInput = document.getElementById('max-number');
    const guessInput = document.getElementById('guess');
    const gameDiv = document.getElementById('game');
    const playDiv = document.getElementById('play');
    const resultP = document.getElementById('result');
    const maxNumSpan = document.getElementById('max-num');
    const rewardModal = document.getElementById('reward-modal');
    const closeModal = document.getElementsByClassName('close')[0];
    const playAgainButton = document.getElementById('play-again');
    const attemptsCountP = document.getElementById('attempts-count');
    let targetNum;
    let attempts = 0;

    startButton.addEventListener('click', () => {
        const maxNumber = parseInt(maxNumberInput.value);
        if (!maxNumber) {
            alert('Enter a valid number!');
            return;
        }
        targetNum = Math.floor(Math.random() * maxNumber) + 1;
        maxNumSpan.textContent = maxNumber;
        gameDiv.style.display = 'none';
        playDiv.style.display = 'block';
        attempts = 0;
        resultP.textContent = ''; // Reset result text
        guessInput.value = ''; // Clear guess input
    });

    submitButton.addEventListener('click', () => {
        const guess = parseInt(guessInput.value);
        attempts++;
        if (guess === targetNum) {
            attemptsCountP.textContent = `You got it! It took you ${attempts} guesses!`;
            rewardModal.style.display = 'block';
        } else if (guess > targetNum) {
            resultP.textContent = '🔺 Too high! Try again.';
        } else if (guess < targetNum) {
            resultP.textContent = '🔻 Too low! Try again.';
        } else {
            resultP.textContent = '❌ Invalid guess. Please enter a number or \'q\' to quit';
        }
    });

    closeModal.onclick = function() {
        rewardModal.style.display = 'none';
    }

    playAgainButton.addEventListener('click', () => {
        rewardModal.style.display = 'none';
        gameDiv.style.display = 'block';
        playDiv.style.display = 'none';
        maxNumberInput.value = '';
    });

    window.onclick = function(event) {
        if (event.target === rewardModal) {
            rewardModal.style.display = 'none';
        }
    }
});
