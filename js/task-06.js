const textImput = document.querySelector('#validation-input');


    const onFocusChange = (event) =>{
        const inputLength = event.currentTarget. value.length;
        const symbolLength = textImput.dataset.length;
        if (inputLength === Number(symbolLength)) {
            textImput.classList.add('valid');
        } else {
            textImput.classList.replace('valid', 'invalid');
        }
    };
    textImput.addEventListener('blur', onFocusChange);
    
  
    
