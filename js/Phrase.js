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
        //event listener for each key on the keyboard
        const keys = document.querySelectorAll('button[class="key"]');
        const hiddenLetters = document.getElementsByClassName('hide letter');
        keys.forEach(key => {
            key.addEventListener('click', (e) => {
                const chosenLetter = e.target.textContent;
                const currentPhrase = this.phrase.split('');
                currentPhrase.forEach(letter => {
                if (letter === chosenLetter) {
                    console.log(hiddenLetters);
                    //THIS IS WRONG
                    // hiddenLetters.forEach(hiddenLetter => {
                    //     if (hiddenLetter.className === `hide letter ${letter}`) {
                    //         hiddenLetter. = `show letter ${letter}`;
                    //     }

                    // });



                    }
                });
        });
        
    })
}

    
    showMatchedLetter() {


    }
}