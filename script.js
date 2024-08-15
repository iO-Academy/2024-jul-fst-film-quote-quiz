const playButton = document.querySelector('.play')
const playMenu = document.querySelector('.gameButtons')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')


const hideButton = () => {
    button1.classList.add('hidden')
    button2.classList.add('hidden')
    button3.classList.add('hidden')
    // quoteElem.classList.add('hidden')
}

const displayButton = () => {
    button1.classList.remove('hidden')
    button2.classList.remove('hidden')
    button3.classList.remove('hidden')
    // quoteElem.classList.remove('hidden')
}



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
        console.log(filmTitles)
        playButton.addEventListener('click', () => playGame(filmTitles, films), {once: true})
    })


 const playGame = (filmTitles, films) => {
    console.log(films)
    displayButton()
    playMenu.remove()
    shuffleArray(films)
    const currentQuote = films.pop()
    // const quoteContainer = document.querySelector('.quoteContainer')
     const quoteElem = document.querySelector('.quoteElem')
     // const quoteElem = document.createElement('p')
     quoteElem.textContent = "\"" + currentQuote.quote + "\""
    // quoteContainer.appendChild(quoteElem)

    const wrongAnswer1 = filmTitles[0].title
    const wrongAnswer2 = filmTitles[1].title
    const correctAnswer = currentQuote.title

    const answers = [wrongAnswer1, wrongAnswer2, correctAnswer]
    shuffleArray(answers)

    // const titleContainer = document.querySelector('.titleContainer')
    // const button1 = document.createElement('button')
    // const button2 = document.createElement('button')
    // const button3 = document.createElement('button')
    // const button1 = document.querySelector('.button1')
    // const button2 = document.querySelector('.button2')
    // const button3 = document.querySelector('.button3')

    button1.textContent = answers[0]
    button2.textContent = answers[1]
    button3.textContent = answers[2]


    // titleContainer.appendChild(button1)
    // titleContainer.appendChild(button2)
    // titleContainer.appendChild(button3)

    const onClick = () => {

    }
    const checkAnswer = (button) => {


        button.addEventListener('click',
             (e) => {
                if (button.textContent === correctAnswer) {
                button.style.background = '#04ac04'
            } else if (button.textContent === wrongAnswer1 || button.textContent === wrongAnswer2 ) {
                button.style.background = 'red'
            }
                let interval = setInterval(
                () => {

                // quoteElem.remove()
                // button1.remove()
                // button2.remove()
                // button3.remove()
                    button.style.background = ''
                    hideButton()
                    clearInterval(interval)
                    // button1.classList.add('hidden')
                    // button2.classList.add('hidden')
                    // button3.classList.add('hidden')
                if(films.length > 2) {
                    playGame(filmTitles, films)
                }
                else {
                    quoteElem.textContent = 'Game over!'
                    button.addEventListener().disabled() = true
                    // quoteContainer.appendChild(quoteElem)
                }
            }
            , 300)

        }, {once: true});


    }


     checkAnswer(button1)
    checkAnswer(button2)
    checkAnswer(button3)

}


// playGame()
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
