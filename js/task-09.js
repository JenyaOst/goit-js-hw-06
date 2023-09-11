function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const colorText = document.querySelector('.color');

btnChangeColor.addEventListener('click', onClickButton);
function onClickButton() {
  document.body.style.backgroundColor = colorText.textContent =  getRandomHexColor();

};