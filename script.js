// 1. Create instructions button
// 2. User clicks button, opening model with instructions
    //2.1 Find button on html using querySelector
    //2.2 Create listener on button click
    //2.3 Function will display the modal
// 3. User clicks button to close model
    //3.1 Listener event on close button
    //3.2 Same function with close functionality
// find instructions button on html
// 2. create dialogue box if they click




const instructionsButton = document.querySelector('.instructions_button')
const instructions = document.querySelector('.instructions')
const closeButton = document.querySelector('.close_button')
const modal = () => {
    if (instructions.style.display === 'none') {
        instructions.style.display = 'block';
        instructions.style.position = 'fixed'

    }
    else {
        instructions.style.display = 'none';
    }
}


instructionsButton.addEventListener('click', modal)
closeButton.addEventListener('click', modal)







