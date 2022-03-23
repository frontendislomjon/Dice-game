 
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const dice = document.querySelector('.dice')
const scorePlayer1 = document.querySelector('#score--0')
const scorePlayer2 = document.querySelector('#score--1')
const currentPlayer1 = document.querySelector('#current--0')
const currentPlayer2 = document.querySelector('#current--1')

dice.style.display='none'
// changes
let currentScore=0 
let activePlayer=0
let score =[0,0]
let gameOver = false


btnHold.addEventListener('click', hold)
btnNew.addEventListener('click', refresh)
btnRoll.addEventListener('click', rollDice)

function rollDice() {
    const randomNumber = Math.floor(Math.random()*6+1)
    dice.src = `dice-${randomNumber}.png`
    dice.style.display='block'
    
    if (randomNumber!=1){
            currentScore+=randomNumber
            document.querySelector(`#current--${activePlayer}`).textContent=currentScore
        }  
        else{
             const randomNumber = Math.floor(Math.random()*6+1)
            change()
        }

}
function hold() {
    if(!gameOver){
        score[activePlayer]+=currentScore
        dice.style.display='none'
        document.querySelector(`#score--${activePlayer}`).textContent=score[activePlayer]
       if (score[activePlayer] >=100) {
        gameOver=true
        document.querySelector(`.player--0`).classList.remove('player--active')
        document.querySelector(`.player--1`).classList.remove('player--active')
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')  
       } else {
        change()
       }
    }
}
function change(){
    document.querySelector(`#current--${activePlayer}`).textContent='0'
    currentScore=0
    activePlayer=activePlayer===0? 1:0
    document.querySelector(`.player--0`).classList.toggle('player--active')
    document.querySelector(`.player--1`).classList.toggle('player--active')
  
}
function refresh(){
    dice.style.display='none'
    currentScore = 0 
    activePlayer = 0
    score = [0,0]
    gameOver = false
    document.querySelector(`.player--0`).classList.add('player--active')
    document.querySelector(`.player--1`).classList.remove('player--active')
    document.querySelector(`.player--0`).classList.remove('player--winner')
    document.querySelector(`.player--1`).classList.remove('player--winner')
    currentPlayer1.textContent='0'
    currentPlayer2.textContent='0'
    scorePlayer1.textContent='0'
    scorePlayer2.textContent='0'

}