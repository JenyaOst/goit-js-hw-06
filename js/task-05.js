const textInput = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

textInput.addEventListener('input', (event) => {

    
    if(!event.currentTarget.value.length || event.currentTarget.value.trim() === ''){
        name.textContent = 'Anonymous';
    }
    else{
        name.textContent = event.currentTarget.value;
    }
});