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

const playGame = (filmTitles, films) => {
    playMenu.remove()

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
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')

    button1.textContent = answers[0]
    button2.textContent = answers[1]
    button3.textContent = answers[2]

    titleContainer.appendChild(button1)
    titleContainer.appendChild(button2)
    titleContainer.appendChild(button3)

    const checkAnswer = (button) => {
        button.addEventListener('click', () => {
            if (button.textContent === correctAnswer) {
                button.style.background = '#04ac04'
            } else if (button.textContent === wrongAnswer1 || button.textContent === wrongAnswer2 ) {
                button.style.background = 'red'
            }
            const interval = setInterval(() => {
                quoteElem.remove()
                button1.remove()
                button2.remove()
                button3.remove()
                clearInterval(interval)
                console.log(films)
                if(films.length > 2) {
                    return playGame(filmTitles, films)
                } else {
                    quoteElem.textContent = 'Game over!'
                    quoteContainer.appendChild(quoteElem)
                }
            }, 300)
        })
    }

    checkAnswer(button1)
    checkAnswer(button2)
    checkAnswer(button3)
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
