// import '../css/common.css';

const bodyEl = document.querySelector('body');
const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
let intervalId = null;

startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  intervalId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtnEl.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtnEl.addEventListener('click', onStopBtnClick);

function onStopBtnClick() {
  clearInterval(intervalId);
  startBtnEl.removeAttribute('disabled');
}
