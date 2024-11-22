const daysElement = document.querySelector('#days')
const hoursElement = document.querySelector('#hours')
const minutesElement = document.querySelector('#minutes')
const secondsElement = document.querySelector('#seconds')
const nextYearElement = document.querySelector('#next-year')

const nextYear = new Date().getFullYear() + 1;
nextYearElement.innerHTML = nextYear;
const newYear = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime()

// const timer = setInterval(() => {

//     const now = new Date().getTime()
//     const diff = newYear - now;
    
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     daysElement.innerHTML = days
//     hoursElement.innerHTML = hours
//     minutesElement.innerHTML = minutes
//     secondsElement.innerHTML = seconds

//     if (diff < 0) {
//         clearInterval(timer);
//     }
    
// }, 1000)