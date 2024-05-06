/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const placeholder = document.querySelector('#phrase ul');
const startGameButton = document.querySelector('#btn__reset');
const overlay = document.getElementById('overlay');
const keys = document.getElementsByTagName('button');
const keyboard = document.querySelector('#qwerty');
const hearts = document.getElementsByTagName('img');
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
    placeholder.textContent = '';
    overlay.classList.remove('win', 'lose');
    
    for (let i=0; i<keys.length; i++) {
        let key = keys[i];
        key.disabled = false;
        key.classList.remove('chosen', 'wrong');
        key.classList.add('key');
    };

    for (let i=0; i < hearts.length; i++) {
        let heart = hearts[i];
        heart.src = "images/liveHeart.png";
    }

    game = new Game();
    game.startGame();
    console.log(game.activePhrase.phrase);
});


 

keyboard.addEventListener('click', (e) => {
    let key = e.target;

    if (key.tagName === 'BUTTON') {
        const keyValue = key.textContent;
        game.handleInteraction(key, keyValue);
    }
});





    

   


