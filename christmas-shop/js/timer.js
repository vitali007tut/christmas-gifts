const daysElement = document.querySelector('#days')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const nextYearElement = document.querySelector('#next-year')

const nextUTCYear = new Date().getUTCFullYear() + 1;
nextYearElement.innerHTML = nextUTCYear;
const newYearDayUTC = new Date(Date.UTC(nextUTCYear, 0, 1, 0, 0, 0));

const timer = setInterval(() => {

    const now = new Date()
    const diff = newYearDayUTC - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysElement.innerHTML = days
    hoursElement.innerHTML = hours
    minutesElement.innerHTML = minutes
    secondsElement.innerHTML = seconds

    if (diff < 0) {
        clearInterval(timer);
    }
    
}, 1000)