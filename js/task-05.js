const textInput = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {

    name.textContent = event.currentTarget.value;
});