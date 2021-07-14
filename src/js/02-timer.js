const inputEl = document.querySelector('input[type="date"]');
const startBtnEl = document.querySelector('#start');
let todayDate = new Date();
let selectedDate = null;
let intervalId = null;

const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

const Swal = require('sweetalert2');

inputEl.addEventListener('change', onInputChange);
startBtnEl.addEventListener('click', onStartBtnClick);

function onInputChange() {
  selectedDate = inputEl.value;
  console.log(Date.parse(selectedDate));
  if (Date.parse(selectedDate) < Date.parse(todayDate)) {
    Swal.fire('Please choose a date in the future ✨');
    clearInterval(intervalId);
    return startBtnEl.setAttribute('disabled', true);
  }
  startBtnEl.removeAttribute('disabled');
}
function onStartBtnClick() {
  intervalId = setInterval(() => {
    todayDate = new Date();
    const ms = Date.parse(selectedDate) - Date.parse(todayDate);
    convertMs(ms);
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  daysEl.textContent = days;
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  hoursEl.textContent = hours;
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  minutesEl.textContent = minutes;
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  secondsEl.textContent = seconds;
  return { days, hours, minutes, seconds };
}
