// import '../css/common.css';

const inputEl = document.querySelector('input[type="date"]');
const startBtnEl = document.querySelector('button[data-start]');
const todayDate = new Date();
console.log(todayDate);
let selectedDate = null;

const Swal = require('sweetalert2');

inputEl.addEventListener('change', onInputChange);

function onInputChange() {
  selectedDate = inputEl.value;
  if (Date.parse(selectedDate) < Date.parse(todayDate)) {
    Swal.fire('Please choose a date in the future');
    return startBtnEl.setAttribute('disabled', true);
  }
  startBtnEl.removeAttribute('disabled');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}
