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



    checkLetter() {
        const keyboard = document.querySelectorAll('.key');
        const hiddenLetters = document.getElementsByClassName('letter');
        //event listener for each key on the keyboard
        keyboard.forEach(key => {
            key.addEventListener('click', (e) => {
                const key = e.target;
                const keyValue = key.textContent;
                //looping through all hidden letters
                for (let i=0; i<hiddenLetters.length; i++) {
                    const hiddenLetter = hiddenLetters[i];
                    //if a hidden letter contains CSS class name that matches the selected letter
                    if (hiddenLetter.classList.contains(`${keyValue}`)) {
                        hiddenLetter.classList.remove('hide');
                        hiddenLetter.classList.add('show');
                    }
                }
            });
        });
    } 
  

    
    showMatchedLetter() {


    }
}