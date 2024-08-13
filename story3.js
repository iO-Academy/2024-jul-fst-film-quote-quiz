fetch('./films.json')
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        let  films = json.films
        function shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
//shuffling film object
        shuffleArray(films)
        console.log(films)
//Getting quote
        const currentQuote = films.pop()
        console.log(currentQuote.quote)

        const quoteContainer = document.querySelector('.quoteContainer')

        const quoteElem = document.createElement('p')
        quoteElem.textContent = "Quote: " + currentQuote.quote
        quoteContainer.appendChild(quoteElem)


        //Getting titles

        //Creating two wrong answer variables and assigning them the first two titles in the films object.
        //Intention is to shuffle after each guess so these will hopefully not be the same each guess
        const wrongAnswer1 = films[0].title
        const wrongAnswer2 = films[1].title
        const correctAnswer = currentQuote.title

        //putting the potential answers in an array then shuffling them so that the order they show on the page
        //isn't always the same
        const answers = [wrongAnswer1, wrongAnswer2, correctAnswer]
        shuffleArray(answers)


        const titleContainer = document.querySelector('.titleContainer')
        const button1 = document.createElement('button')
        const button2 = document.createElement('button')
        const button3 = document.createElement('button')

        //using the shuffled answers array to choose which order the buttons display
        button1.textContent = answers[0]
        button2.textContent = answers[1]
        button3.textContent = answers[2]

        console.log(answers)

        titleContainer.appendChild(button1)
        titleContainer.appendChild(button2)
        titleContainer.appendChild(button3)


        //This function checks to see if button has been clicked, then runs if statement
        const checkAnswer = (button) => {
            button.addEventListener('click', () => {
                if (button.textContent === correctAnswer) {
                    button.style.background = '#04ac04'
                    //trigger next question
                    //score++

                } else if (button.textContent === wrongAnswer1 || button.textContent === wrongAnswer2){
                    button.style.background = 'red'
                    //trigger next question
                }
            })


        }

        //calling function against each button so that any of them can be pressed
        checkAnswer(button1)
        checkAnswer(button2)
        checkAnswer(button3)


    })




