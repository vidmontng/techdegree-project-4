/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const placeholder = document.querySelector('#phrase ul');
const startGameButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const keyboard = document.querySelectorAll('.key');
const liveHearts = document.querySelectorAll('img[src="images/liveHeart.png"]');
const gameOverMessage = document.querySelector('#game-over-message');
const hiddenLetters = document.getElementsByClassName('hide');
const revealedLetters = document.getElementsByClassName('show');
let game; 

/**Event listener for the "Start Game button"
 * Initializes new game object
 * Calls startGame() method of the game object
 */
startGameButton.addEventListener('click', () =>  {
    game = new Game();
    game.startGame();
    console.log(game.activePhrase.phrase);
});


 
keyboard.forEach(key => {
    key.addEventListener('click', (e) => {
            const key = e.target;
            const keyValue = key.textContent;
            game.handleInteraction(key, keyValue);
})
})


