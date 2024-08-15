const playButton = document.querySelector('.play')
const playMenu = document.querySelector('.gameButtons')
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
fetch('./films.json')
    .then((response) => response.json())
    .then((json) => {
        const filmTitles = json.films
        const films = json.films
        playButton.addEventListener('click', () => playGame(filmTitles, films))
    })

let score = 0
const scoreBoxElem = document.querySelector('.scoreBox')

const playGame = (filmTitles, films) => {

    playMenu.style.visibility = 'hidden'

    shuffleArray(films)
    const currentQuote = films.pop()
    const quoteContainer = document.querySelector('.quoteContainer')
    const quoteElem = document.createElement('p')
    quoteElem.textContent = "\"" + currentQuote.quote + "\""
    quoteContainer.appendChild(quoteElem)

    const wrongAnswer1 = filmTitles[0].title
    const wrongAnswer2 = filmTitles[1].title
    const correctAnswer = currentQuote.title

    const answers = [wrongAnswer1, wrongAnswer2, correctAnswer]
    shuffleArray(answers)

    const titleContainer = document.querySelector('.titleContainer')
    const hintContainer = document.querySelector('.hintContainer')

    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')
    const hintButton = document.createElement('button')

    button1.textContent = answers[0]
    button2.textContent = answers[1]
    button3.textContent = answers[2]
    hintButton.textContent = 'Hint?'

    titleContainer.appendChild(button1)
    titleContainer.appendChild(button2)
    titleContainer.appendChild(button3)


    const checkAnswer = (button) => {
        button.addEventListener('click', () => {
            if (button.textContent === correctAnswer) {
                button.style.background = '#04ac04'
                score++
                scoreBoxElem.textContent = score
                button.disabled = true

                if (score % 5 === 0) {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: {y: .6}
                    })
                }}
                else if (button.textContent === wrongAnswer1 || button.textContent === wrongAnswer2) {
                    button.style.background = 'red'
                button.disabled = true
                }
                const interval = setInterval(() => {
                    quoteElem.remove()
                    button1.remove()
                    button2.remove()
                    button3.remove()
                    hintButton.remove()
                    clearInterval(interval)
                    if (films.length > 2) {
                        return playGame(filmTitles, films)
                    } else {
                        endGame()
                    }
                }, 200)
            })
    }


    hintContainer.appendChild(hintButton)

    checkAnswer(button1)
    checkAnswer(button2)
    checkAnswer(button3)

    // hint
    hintButton.addEventListener('click', () => {
        hintButton.textContent = currentQuote.year
        hintButton.disabled = true
    })
    return films
}

const instructionsButton = document.querySelector('.instructionsButton')
const instructions = document.querySelector('.modalContainer')
const closeButton = document.querySelector('.closeButton')
const modal = () => {
    if (instructions.style.display === 'none') {
        instructions.style.display = 'flex';
        instructions.style.zIndex = '1';
    }
    else {
        instructions.style.display = 'none';
    }
}

instructionsButton.addEventListener('click', modal)
closeButton.addEventListener('click', modal)

const timerDisplay = document.querySelector(".timerDisplay")
const timerProgress = document.querySelector(".timerProgress")
const resetBtn = document.querySelector('.reset')
const gameOverModal = document.querySelector('.gameOverModal')
const scoreSpan = document.querySelector('.score')

let countDownValue = 30
let countDownInterval

const countDownTimer = ()=>{countDownInterval=setInterval(countDown,1000)}

const endGame = () =>{
    clearInterval(countDownInterval)
    scoreSpan.textContent = score.toString()
    gameOverModal.showModal()
    countDownValue = 30
    timerDisplay.textContent = countDownValue.toString()
}

const countDown = () => {
    if(countDownValue > 0){
        countDownValue--
        timerDisplay.textContent = countDownValue.toString()
        timerProgress.value = countDownValue
    }
    else {
       endGame()
    }
}

playButton.addEventListener('click',countDownTimer)

timerDisplay.textContent = countDownValue.toString()

const resetGame = () => {
    score = 0
    countDownValue = 30
    scoreBoxElem.textContent = score
    playGame()
}

resetBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',countDownTimer)