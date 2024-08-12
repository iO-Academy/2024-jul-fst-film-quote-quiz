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

        shuffleArray(films)
        console.log(films)

        const currentQuote = films.pop()
        console.log(currentQuote.quote)

        const quoteContainer = document.querySelector('.quoteContainer')

        const quoteElem = document.createElement('p')
        quoteElem.textContent = "Quote: " + currentQuote.quote
        quoteContainer.appendChild(quoteElem)
    })




