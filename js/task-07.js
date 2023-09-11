const inputControl = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');


const onRangeChange = (event) =>{
const fontSize = event.target.value + 'px';
inputText.style.fontSize = fontSize;
};
inputControl.addEventListener('input', onRangeChange);