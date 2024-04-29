/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const phrase = new Phrase('Life is beautiful');
const keyboard = document.querySelectorAll('.key');


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






