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


        const wrongAnswer1 = films[0].title
        const wrongAnswer2 = films[1].title
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
        console.log(answers)
        titleContainer.appendChild(button1)

        titleContainer.appendChild(button2)

        titleContainer.appendChild(button3)
    })




