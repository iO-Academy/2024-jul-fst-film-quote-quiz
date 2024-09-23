
const playButton = document.querySelector('.play')
const playMenu = document.querySelector('.gameButtons')
const button1 = document.querySelector('.btn1')
const button2 = document.querySelector('.btn2')
const button3 = document.querySelector('.btn3')
const hintButton = document.querySelector('.hintButton')
const scoreBoxElem = document.querySelector('.scoreBox')
const quoteElem = document.querySelector('.quote')
const instructionsButton = document.querySelector('.instructionsButton')
const instructions = document.querySelector('.modalContainer')
const closeButton = document.querySelector('.closeButton')
const timerDisplay = document.querySelector(".timerDisplay")
const timerProgress = document.querySelector(".timerProgress")
const resetBtn = document.querySelector('.reset')
const gameOverModal = document.querySelector('.gameOverModal')
const scoreSpan = document.querySelector('.score')
const gameButtons = document.querySelector('.gameButtons')
const gameScreen = document.querySelector('.gameScreen')
const scoreTimer = document.querySelector('.scoreTimer')
const topContainer = document.querySelector('.topContainer')
const title = document.querySelector('.appTitle')

let filmTitles = []
let films = []
let score = 0
let countDownValue = 30
let countDownInterval

const fetchFilms = async () => {
    const response = await fetch('./films.json')
    const data = await response.json()
    return data.films
}

const setupGame = async () => {
    filmTitles = await fetchFilms()
    films = await fetchFilms()
    playButton.addEventListener('click', () => playGame(filmTitles, films))
}

const modal = () => {
    if (instructions.style.display === 'none') {
        instructions.style.display = 'flex';
        instructions.style.zIndex = '1';
    } else {
        instructions.style.display = 'none';
    }
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const checkAnswer = (button) => {
    button.addEventListener('click', () => {
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = '#04ac04'
            score++
            scoreBoxElem.textContent = score
        }
        else if (button.textContent === wrongAnswer1 || button.textContent === wrongAnswer2) {
            button.style.backgroundColor = 'red'
        }
        const interval = setInterval(() => {
            button.style.backgroundColor = '#efefef'
            clearInterval(interval)
            if (films.length >= 3) {
                playGame(filmTitles, films)
            } else {
                endGame()
            }
        }, 200)
        shuffleArray(filmTitles)
    })
}

const playGame = (filmTitles, films) => {
    playMenu.style.pointerEvents = 'none'
    gameButtons.style.opacity = '0.5'
    topContainer.classList.add('hidden')
    title.classList.add('hidden')
    quoteElem.classList.remove('hidden')
    scoreTimer.classList.remove('hidden')
    button1.classList.remove('hidden')
    button2.classList.remove('hidden')
    button3.classList.remove('hidden')
    hintButton.classList.remove('hidden')
    shuffleArray(films)
    const currentQuote = films.pop()
    quoteElem.textContent = "\"" + currentQuote.quote + "\""
    wrongAnswer1 = filmTitles[0].title
    wrongAnswer2 = filmTitles[1].title
    correctAnswer = currentQuote.title

    if (correctAnswer === wrongAnswer1) {
        wrongAnswer1 = filmTitles[2].title
    } else if (correctAnswer === wrongAnswer2) {
        wrongAnswer2 = filmTitles[2].title
    }

    const answers = [wrongAnswer1, wrongAnswer2, correctAnswer]
    shuffleArray(answers)
    button1.textContent = answers[0]
    button2.textContent = answers[1]
    button3.textContent = answers[2]
    hintButton.textContent = 'Hint?'
    hintButton.addEventListener('click', () => {
        hintButton.textContent = currentQuote.year
    })
}

const endGame = () => {
    clearInterval(countDownInterval)
    scoreSpan.textContent = score.toString()
    gameOverModal.showModal()
    countDownValue = 30
    timerDisplay.textContent = countDownValue.toString()
    gameScreen.classList.add('hidden')
    scoreTimer.classList.add('hidden')
    leaderboardFunction()
    showLeaderboard()
}

const countDownTimer = () => {
    countDownInterval = setInterval(countDown, 1000)
}

const countDown = () => {
    if (countDownValue > 0) {
        countDownValue--
        timerDisplay.textContent = countDownValue.toString()
        timerProgress.value = countDownValue
    } else {
        endGame()
    }
}

const resetGame = () => {
    gameOverModal.close()
    score = 0
    countDownValue = 30
    scoreBoxElem.textContent = score
    setupGame()
    playGame(filmTitles, films)
    gameScreen.classList.remove('hidden')
    scoreTimer.classList.remove('hidden')
}

instructionsButton.addEventListener('click', modal)
closeButton.addEventListener('click', modal)
playButton.addEventListener('click', countDownTimer)
timerDisplay.textContent = countDownValue.toString()
resetBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', countDownTimer)

setupGame()
checkAnswer(button1)
checkAnswer(button2)
checkAnswer(button3)

const nameInput = document.querySelector('.name')
const addScoreButton = document.querySelector('.addScore')
const table = document.querySelector('table')

const addScores = () => {
    const player = {
        game: 'MovieQuoteSprint',
        name: nameInput.value,
        score: score
    }
    fetch('https://leaderboard.dev.io-academy.uk/score', {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            showLeaderboard()
        })
}

const showLeaderboard = () => {
    fetch('https://leaderboard.dev.io-academy.uk/scores?game=MovieQuoteSprint')
        .then((response) => response.json())
        .then((leaderBoardObject) => {
            const listNamesElem = document.querySelector('.names')
            const listScoresElem = document.querySelector('.scores')
            listNamesElem.textContent = ''
            listScoresElem.textContent = ''
            leaderBoardObject.data.sort((a, b) => b.score - a.score)
            leaderBoardObject.data.slice(0, 10).forEach((player) => {
                const nameElem = document.createElement('p')
                const scoreElem = document.createElement('p')
                nameElem.textContent = player.name
                scoreElem.textContent = player.score
                listNamesElem.appendChild(nameElem)
                listScoresElem.appendChild(scoreElem)
            })
        })
}

const leaderboardFunction = () => {
    addScoreButton.removeEventListener('click', addScores)
    addScoreButton.addEventListener('click', addScores)
}










