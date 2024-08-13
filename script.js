const instructionsButton = document.querySelector('.instructionsButton')
const instructions = document.querySelector('.modalContainer')
const closeButton = document.querySelector('.closeButton')
const modal = () => {
    if (instructions.style.display === 'none') {
        instructions.style.display = 'flex';
    }
    else {
        instructions.style.display = 'none';
    }
}

instructionsButton.addEventListener('click', modal)
closeButton.addEventListener('click', modal)