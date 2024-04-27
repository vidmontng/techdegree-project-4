/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase("Life is beautiful");

//event listener for the "Start Game button"
const startGameButton = document.querySelector('#btn__reset');
startGameButton.addEventListener('click', () =>  {
    const game = new Game();
    game.startGame();
});


phrase.checkLetter();

