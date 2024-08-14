const timerDisplay = document.querySelector(".timerDisplay")
const timerProgress = document.querySelector(".timerProgress")
const playButton = document.querySelector(".playButton") // Play button (replace on merge if required)
const resetBtn = document.querySelector('.reset')
const modal = document.querySelector('.gameOverModal')
const homeButton = document.querySelector('.home')
const scoreSpan = document.querySelector('.score')

let countDownValue = 30
let countDownInterval
let score = 10 // (remove on merge)

const countDownTimer = ()=>{countDownInterval=setInterval(countDown,1000)}

const countDown = () => {
    if(countDownValue > 0){
    countDownValue--
    timerDisplay.textContent = countDownValue.toString()
    timerProgress.value = countDownValue
    }
    else {
        clearInterval(countDownInterval)
        modal.showModal()
        countDownValue = 30
        timerDisplay.textContent = countDownValue.toString()
    }}

playButton.addEventListener('click',countDownTimer) //(remove/replace on merge with existing play button)

timerDisplay.textContent = countDownValue.toString()
scoreSpan.textContent = score.toString() // Display current score - Hookup to existing score variable

// Button Event Listeners
homeButton.addEventListener('click', () => {
    modal.close()
    window.location.reload()})

const resetGame = () => {
    score = 0
    countDownValue = 30
    resetGameArray() // function to rest array - story 4
    playGame() // hook up to function
}

resetBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',countDownTimer)