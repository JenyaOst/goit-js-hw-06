const textImput = document.querySelector('#validation-input');


    const onFocusChange = (event) =>{
        const inputLength = event.currentTarget. value.length;
        const symbolLength = textImput.dataset.length;
        if (inputLength !== Number(symbolLength)) {
            textImput.classList.add('invalid');
        } else {
            textImput.classList.replace('invalid', 'valid');
        }
    };
    textImput.addEventListener('blur', onFocusChange);
    
  
    
