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
            
        this.activePhrase = null;
    }

    startGame() {
        document.querySelector('#overlay').style.display = 'none';
        this.getRandomPhrase();
        phrase.addPhraseToDisplay();
    }

    getRandomPhrase() {        
        const index = Math.floor(Math.random() * 5);
        this.activePhrase = this.phrases[index];
        return this.activePhrase;
    }

    handleInteraction() {


    }

    removeLife() {


    }

    checkForWin() {


    }

    gameOver() {


    }


}