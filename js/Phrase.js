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
     * Evokes showMatchedLetter() method
     */
    checkLetter(keyValue) {
        const match = this.phrase.includes(keyValue);
        if (match) {
            return true;
        }
    } 
  

    /**Selects and reveals all hidden letters that have a class equal to
     * the letter chosen by the player
     */
    showMatchedLetter(keyValue) {
        const hiddenLetters = document.getElementsByClassName(`${keyValue}`);
        for (let i=0; i<hiddenLetters.length; i++) {
            hiddenLetters[i].classList.remove('hide');
            hiddenLetters[i].classList.add('show');
        }
    } 
    




}
