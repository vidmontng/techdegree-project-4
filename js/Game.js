/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            new Phrase("Life is beautiful"),
            new Phrase("Friends are the family we choose"),
            new Phrase("Nothing is impossible"),
            new Phrase("Live life to the fullest"),
            new Phrase("Even miracles take a little time")
        ]
            
        this.activePhrase = null; //gets set up in the end of getRandomPhrase() method
    }


/**
* Starts a game by selecting a random phrase and displaying it 
*/
    startGame() {
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * selects random phrase from the phrase property
     * @returns {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {        
        const index = Math.floor(Math.random() * 5);
        return this.phrases[index];
    }

    handleInteraction(button, buttonValue) {
        button.disabled = true;
        const phrase = this.activePhrase;
           if (phrase.checkLetter(buttonValue)) {
                phrase.showMatchedLetter(buttonValue);
                button.classList.add('chosen');
           } else {
                button.classList.add('wrong');
                this.removeLife();
            }
            this.checkForWin();
    } 
    

    removeLife() {
        const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
            liveHeart.src = "images/lostHeart.png";
            this.missed++;
    }


    /**
    * Checks for winning 
    * @returns {boolean} True if a player won the game, false if didn't.
    */
    checkForWin() {
        if (hiddenLetters.length === 0) {
            this.gameOver('win', 'Congratulations!');
        }  else if (this.missed === 5) {
            this.gameOver('lose', 'Better luck next time!');
        }      
    }


    gameOver(winOrLoss, message) {        
        overlay.style.display = 'block';
        overlay.classList.remove('start');
        overlay.classList.add(winOrLoss);
        gameOverMessage.textContent = message;
    }


}