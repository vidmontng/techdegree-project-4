/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /***
     * Display phrase on game board
     */
    addPhraseToDisplay() {
        const splitPhrase = this.phrase.split('');
        let HTMLforSplitPhrase;
        
        splitPhrase.forEach(currentLetter => {
            HTMLforSplitPhrase = document.createElement('li');
            if (currentLetter !== " ") {
                HTMLforSplitPhrase.classList.add('hide','letter', `${currentLetter}`);   
            } else {
                HTMLforSplitPhrase.classList.add('space'); 
            }
            HTMLforSplitPhrase.innerHTML = `${currentLetter}`;
            placeholder.appendChild(HTMLforSplitPhrase);
        });
   }


    /**Checks if the letter selected by the player matches a letter in the phrase.
     * Calls showMatchedLetter() method
     */
    checkLetter(letter) {
        const match = this.phrase.includes(letter);
        if (match) {
            return true;   
        } else {          
            return false;  
        }
    } 
  

    /**Selects and reveals all hidden letters that have a class equal to
     * the letter chosen by the player
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const hiddenLetters = document.getElementsByClassName(`${letter}`);
        for (let i=0; i<hiddenLetters.length; i++) {
            hiddenLetters[i].classList.remove('hide');
            hiddenLetters[i].classList.add('show');
            console.log(this.phrase);
        }
    } 
}

