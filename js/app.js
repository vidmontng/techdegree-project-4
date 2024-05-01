/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const overlay = document.querySelector('#overlay');
const phrase = new Phrase('Life is beautiful');
const keyboard = document.querySelectorAll('.key');
// const lostHearts = document.querySelectorAll('img[src="images/lostHeart.png"]');
const liveHearts = document.querySelectorAll('img[src="images/liveHeart.png"]');
const gameOverMessage = document.querySelector('#game-over-message');

/**Event listener for the "Start Game button"
 * Initializes new game object
 * Calls startGame() method of the game object
 */
const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', () =>  {
    const game = new Game();  
    game.startGame();
    game.handleInteraction();
});





