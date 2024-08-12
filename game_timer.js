// Task 1 - Create Timer
let countDownValue = 30

// HTML Selectors
const timerDisplay = document.querySelector(".timerDisplay") // select the Div to display value
const playGame = document.querySelector(".playButton"); // select play button
const timerProgress = document.querySelector(".timerProgress"); // select meter tag

// Visual Countdown Function and Timer

// Listener Handler
const countDownTimer = ()=>{setInterval(countDown,1000)}
const gameOverTimer = ()=>{setInterval(gameOver,30000)}

// Timeout Handler
const countDown = () => {
    if(countDownValue > 0){
    countDownValue--
    timerDisplay.textContent = countDownValue.toString()
    timerProgress.value = countDownValue}
}

const gameOver = () => {
    optionButtons.disabled = true
    alert('GAME OVER!')
}

// Event Listener - Attached to play button (tick-timer down by 1 second at a time)
playGame.addEventListener('click',countDownTimer)
playGame.addEventListener('click',gameOverTimer)

// Constant visual - Display timer at 30 showing expectation
timerDisplay.textContent = countDownValue.toString()



// Task 2 - Disable Functionality
const optionButtons = document.querySelectorAll('.optionButton');
const gameDisplay = document.querySelector('.gameDisplay');
let submissionCount = 0
const fakeSubmission = () => {
    submissionCount++
    gameDisplay.textContent = submissionCount.toString()}

gameDisplay.textContent = submissionCount.toString()

optionButtons.addEventListener('click',fakeSubmission)





// Task 3 - Reset the Game

// const resetButton = document.querySelector('.resetButton');
//
// resetButton.addEventListener('click',resetGame)
//
// const resetGame = () => {
//     scoreCounter = 0
// }