'use strict';

const message = document.querySelector('.message')
const guessBox = document.querySelector('.guess')
const check = document.querySelector('.check')
const number = document.querySelector('.number')
const highscore = document.querySelector('.highscore')
const score = document.querySelector('.score')
const body = document.querySelector('body')
const again = document.querySelector('.again')

// number.textContent = 
let done = Math.trunc(Math.random() * 21)
check.addEventListener('click', function(e) {
    e.defaultPrevented
    if (done == guessBox.value) {
        if (highscore.textContent < score) {
            highscore.textContent = score.textContent
        }
        body.style.background = 'green'
        message.textContent = '🥳 Correct answer'
        number.textContent = done
    }else if (done > guessBox.value) {
        message.textContent = 'Too Low !'
        score.textContent -= 1
    }else if (done < guessBox.value) {
        message.textContent = 'Too High !'
        score.textContent -= 1
    }
    // else {
    //     score.textContent -= 1
    // }
})
again.addEventListener('click', function(e) {
    e.defaultPrevented
    body.style.background = '#222'
    number.textContent = '?'
    message.textContent = 'Start guessing...'
    guessBox.value = ''
    score.textContent = 20
    // done = Math.trunc(Math.random() * 21)
})