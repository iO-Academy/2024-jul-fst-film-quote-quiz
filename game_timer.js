// Task 1 - Create Timer

// HTML Selectors
const timerDisplay = document.querySelector(".timerDisplay") // select the Div to display value
const timerProgress = document.querySelector(".timerProgress")  // select meter tag
const playBtn = document.querySelector(".playButton") // select play button
const pauseBtn = document.querySelector(".pauseBtn")
const gameOVerBtn = document.querySelector('.gameOverBtn') // select gameOver button


let countDownValue = 10
let countDownInterval
// Visual Countdown Function and Timer
// Listener Handlers
const countDownTimer = ()=>{
    countDownInterval=setInterval(countDown,1000)}
// countDownStop = () => {clearInterval(countDownTimer)}

// Timeout Handlers
const countDown = () => {
    if(countDownValue > 0){
    countDownValue--
    timerDisplay.textContent = countDownValue.toString()
    timerProgress.value = countDownValue
        console.log(countDownTimer)
    }
    else {
        clearInterval(countDownInterval)
        console.log(countDownTimer)
        gameOver()
        countDownValue = 10
        timerDisplay.textContent = countDownValue.toString()
    }

}

const gameOver = () => {
    // scoreSpan.textContent = randomScore.toString() // Random score for demo
    modal.showModal()
    modal.setAttribute('display','flex')
    // modal.classList.remove('hidden')
    // overlay.classList.remove('hidden')
}

// Event Listener - Attached to play button (tick-timer down by 1 second at a time)
playBtn.addEventListener('click',countDownTimer)
// playBtn.addEventListener('click',gameOverTimer)
// pauseBtn.addEventListener('click',countDownStop)

// Constant visual - Display timer at 30 showing expectation
timerDisplay.textContent = countDownValue.toString()

// Task 2 - Disable Functionality - Testing - Remove Later as Story 3
const optionButton1 = document.querySelector('.optionButton1')
const optionButton2 = document.querySelector('.optionButton2')
const optionButton3 = document.querySelector('.optionButton3')
const gameDisplay = document.querySelector('.gameDisplay')

let scoreCounter = 0
const fakeSubmission = (button) => {
    button.addEventListener('click', ()=>{
        scoreCounter++
        gameDisplay.textContent = scoreCounter.toString() })}

fakeSubmission(optionButton1)
fakeSubmission(optionButton2)
fakeSubmission(optionButton3)
gameDisplay.textContent = scoreCounter.toString()


// End Game Modal
const resetBtn = document.querySelector('.reset')

const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.gameOverModal')
const closeBtn = document.querySelector('.close')
const scoreSpan = document.querySelector('.score')
// const modalWrapper = document.querySelector('.modalWrapper')
// const showModal = (show) => show ? modal.showModal() : modal.close()
const randomScore = Math.floor(Math.random() * 100)
scoreSpan.textContent = randomScore.toString()

// Button Event Listeners
closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    modal.close()})

    gameOVerBtn.addEventListener('click', () => {
    scoreSpan.textContent = randomScore.toString() // Random score for demo
    modal.showModal()
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})



// Task 3 - Reset the Game
const playGame = () => {}
const resetGame = () => {
    scoreCounter = 0
    // clearInterval(countDownTimer)
    countDownValue = 10
    playGame()
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

resetBtn.addEventListener('click',resetGame)
// resetBtn.addEventListener('click',countDownTimer)
// resetBtn.addEventListener('click',gameOverTimer)
