/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const phrase = new Phrase("Life is beautiful");
const keyboard = document.querySelectorAll('.key');


/**Event listener for the "Start Game button"
 * Initializes new game object
 * Calls startGame() method of the game object
 */
const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', () =>  {
    const game = new Game();
    game.startGame();
});


/**Event listener for the keyboard
 * Gets the letter chosen by player 
 * Calls checkLetter() method of the phrase class, which in it's turn will call 
 * showMatchedLetter() method to reveal letters that matched player's selection
 */
keyboard.forEach(key => {
    key.addEventListener('click', (e) => {
        const key = e.target;
        const keyValue = key.textContent;
        phrase.checkLetter(keyValue);    
    });
});



