/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const placeholder = document.querySelector('#phrase ul');
const startGameButton = document.querySelector('#btn__reset');
const overlay = document.getElementById('overlay');
const keys = document.querySelectorAll('.key');
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


/***
 * Event handler that lets users chose a letter by clicking
 * on a virtual keyboard AND use their physical keybord
 * Two event implemented in one event listener
 */
['keydown', 'click'].forEach(event => {
        document.addEventListener(event, (e) => {
            if (event === 'click' && e.target.className === 'key') {
                game.handleInteraction(e.target, e.target.textContent);
            } 
            
            else if (event === 'keydown') {
                keys.forEach(button => {
                const letter = button.textContent;
                    if (letter === e.key) {
                        game.handleInteraction(button, letter);
                    }
                })
            }
        })
})










