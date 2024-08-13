const instructionsButton = document.querySelector('.instructions_button')
const instructions = document.querySelector('.modal_container')
const closeButton = document.querySelector('.close_button')
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







