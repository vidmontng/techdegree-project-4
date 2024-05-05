/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const placeholder = document.querySelector('#phrase ul');
const startGameButton = document.querySelector('#btn__reset');
const overlay = document.querySelector('#overlay');
const keyboard = document.querySelector('#qwerty');
const liveHearts = document.querySelectorAll('img[src="images/liveHeart.png"]');
const gameOverMessage = document.querySelector('#game-over-message');

/**Event listener for the "Start Game button"
 * Initializes new game object
 * Calls startGame() method of the game object
 */

// startGameButton.addEventListener('click', () =>  {
//     const game = new Game();  
//     game.startGame();
// });

const game = new Game();
game.startGame();
console.log(`Current phrase - ${game.activePhrase.phrase}`);


 
// keyboard.addEventListener('click', (e) => {
//             const key = e.target;
//             const keyValue = key.textContent;

//         if (key.tagName === 'BUTTON') {
// }        phrase.addPhraseToDisplay(this.currentPhrase);
// });
   




