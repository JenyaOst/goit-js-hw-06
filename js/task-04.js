let counterValue = 0;
const actionsBtn = document.querySelectorAll( "#counter button");
const valueSpan = document.querySelector('#value');
actionsBtn[0].addEventListener('click', () => {
    counterValue -= 1;
    valueSpan.textContent = counterValue;
});
actionsBtn[1].addEventListener('click', () => {
    counterValue += 1;
    valueSpan.textContent = counterValue;
});

