const playButton = document.querySelector('.play')
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const playGame = (filmTitles, films) => {
    playButton.remove()
    const checkAnswer = (button) => {
        button.addEventListener('click', () => {
            if (button.textContent === correctAnswer) {
                button.style.background = '#04ac04'
                //score++
                //trigger next question

            } else if (button.textContent === wrongAnswer1 || button.textContent === wrongAnswer2) {
                button.style.background = 'red'
                //trigger next question
            }
        })
    }
    //can we create a new function here to contain all the code below, for each extra round?
//shuffling film object

    shuffleArray(films)
//Getting quote
    const currentQuote = films.pop()
    const quoteContainer = document.querySelector('.quoteContainer')
    const quoteElem = document.createElement('p')
    quoteElem.textContent = "\"" + currentQuote.quote + "\""
    quoteContainer.appendChild(quoteElem)

    //Getting titles
    //Creating two wrong answer variables and assigning them the first two titles in the films object.
    //Intention is to shuffle after each guess so these will hopefully not be the same each guess
    const wrongAnswer1 = filmTitles[0].title
    const wrongAnswer2 = filmTitles[1].title
    const correctAnswer = currentQuote.title


    //putting the potential answers in an array then shuffling them so that the order they show on the page
    //isn't always the same
    const answers = [wrongAnswer1, wrongAnswer2, correctAnswer]
    shuffleArray(answers)

    const titleContainer = document.querySelector('.titleContainer')
    const hintContainer = document.querySelector('.hintContainer')

    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')
    const hintButton = document.createElement('button')

    //using the shuffled answers array to choose which order the buttons display
    button1.textContent = answers[0]
    button2.textContent = answers[1]
    button3.textContent = answers[2]
    hintButton.textContent = 'Hint?'

    titleContainer.appendChild(button1)
    titleContainer.appendChild(button2)
    titleContainer.appendChild(button3)
    hintContainer.appendChild(hintButton)
    
    //calling function against each button so that any of them can be pressed
    checkAnswer(button1)
    checkAnswer(button2)
    checkAnswer(button3)

    // hint
    hintButton.addEventListener('click', () => {
        quoteElem.textContent =  "\"" + currentQuote.quote + "\"" + ' ~ ' + currentQuote.year
    })

    return films
}

fetch('./films.json')
    .then((response) => response.json())
    .then((json) => {
        const filmTitles = json.films
        const films = json.films
        playButton.addEventListener('click', () => playGame(filmTitles, films))
    })

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
