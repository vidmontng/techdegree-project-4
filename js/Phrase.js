/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();        
    }

    addPhraseToDisplay() {
        const placeholder = document.querySelector('#phrase ul');
        const splitPhrase = this.phrase.split('');
        let HTMLforSplitPhrase;
        
        splitPhrase.forEach(letter => {
            HTMLforSplitPhrase = document.createElement('li');
            if (letter !== " ") {
                HTMLforSplitPhrase.className = `hide letter ${letter}`;                
            } else {
                HTMLforSplitPhrase.className = `hide space`;
            }
            HTMLforSplitPhrase.innerHTML = `${letter}`;
            placeholder.appendChild(HTMLforSplitPhrase);
            });
    }

    checkLetter() {


    }

    showMatchedLetter() {


    }

}