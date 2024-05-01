/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrases = [
            "Life is beautiful",
            "Friends are the family we choose",
            "Nothing is impossible",
            "Live life to the fullest",
            "Even miracles take a little time"
        ]
            
        this.activePhrase = null; //gets set up in the end of getRandomPhrase() method
    }

    startGame() {
        overlay.style.display = 'none';
        this.getRandomPhrase();
        phrase.addPhraseToDisplay();
    }

    getRandomPhrase() {        
        const index = Math.floor(Math.random() * 5);
        this.activePhrase = this.phrases[index];
        return this.activePhrase;
    }

    handleInteraction() {
        keyboard.forEach(key => {
            key.addEventListener('click', (e) => {
                const key = e.target;
                const keyValue = key.textContent;
                if (phrase.checkLetter(keyValue)) {
                    key.disabled = true;
                    key.classList.add('chosen');
                    phrase.showMatchedLetter(keyValue);
                } else {
                    key.classList.add('wrong');
                    this.removeLife();
                }
                this.checkForWin();
            });
        });
    }

    removeLife() {
        const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
        liveHeart.src = "images/lostHeart.png";
        this.missed++;
    }

    checkForWin() {
        const hiddenLetters = document.getElementsByClassName('hide');

        if (this.missed === 5 && hiddenLetters.length !== 0) {
            this.gameOver('lose', 'Better luck next time!');

        } else if (this.missed < 5 && hiddenLetters.length === 0) {
            this.gameOver('win', 'Congratulations!');

        }
        
        }
    

    gameOver(winOrLoss, message) {        
        overlay.style.display = 'block';
        overlay.classList.remove('start');
        overlay.classList.add(winOrLoss);
        gameOverMessage.textContent = message;
    }


}