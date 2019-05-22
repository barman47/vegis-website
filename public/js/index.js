class TypeWriter {
    constructor (txtElement, words, wait = 5000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.IsDeleting = false;
    }

    type () {
        // Current Index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current words
        const fullTxt = this.words[current];

        // Check if thisIsDeleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into txtElement
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        let cursor = document.querySelector('.txt');

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 4;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = 4000;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to the next words
            this.wordIndex ++;
            // Pause before start typing
            cursor.style.borderRight = 'none';
            typeSpeed = 3000;
        }
        setTimeout(() => this.type(), typeSpeed);
    }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(init, 3000);
});

// Init App
function init () {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}
