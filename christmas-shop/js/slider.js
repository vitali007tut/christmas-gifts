const slider = document.querySelector('.slider-row')
const leftButton = document.querySelector('#leftButton')
const rightButton = document.querySelector('#rightButton')

let clickCounter = 1
const totalWidth = 2000

const getStep = (screenWidth) => {
    const quantity = screenWidth >= 768 ? 3 : 6
    const perCentVisible = screenWidth >= 768 ? 0.885 : 0.95
    const visibleArea = screenWidth > 1440 ? 1440 : screenWidth
    return (totalWidth - visibleArea * perCentVisible) / quantity
}

const getTranslateX = () => {
    const result = slider.style.transform.replace(/[^0-9-.]/g, '')
    return Math.round(Number(result));
}

const rightButtonHandler = () => {
    const screenWidth = window.innerWidth
    const quantity = screenWidth >= 768 ? 3 : 6
        if (clickCounter <= quantity) {
            const lengthX = Math.round(getTranslateX() - getStep(screenWidth));
            slider.style.transform = `translateX(${lengthX}px)`
            if (clickCounter === quantity) rightButton.classList.toggle('disabled')
            leftButton.classList.remove('disabled')
            clickCounter++
        }
}

const leftButtonHandler = () => {
    if (clickCounter > 1) {
        const lengthX = Math.round(getTranslateX() + getStep(window.innerWidth));
        clickCounter--
        if (clickCounter === 1) leftButton.classList.toggle('disabled')
        rightButton.classList.remove('disabled')
        slider.style.transform = `translateX(${lengthX}px)`
    }
}

const setButtonsListeners = () => {
    rightButton.addEventListener('click', rightButtonHandler)
    leftButton.addEventListener('click', leftButtonHandler)
}

setButtonsListeners()

window.addEventListener('resize', () => {
    slider.style.transform = 'translateX(0px)'
    rightButton.removeEventListener('click', rightButtonHandler)
    leftButton.removeEventListener('click', leftButtonHandler)
    rightButton.classList.remove('disabled')
    leftButton.classList.add('disabled')
    clickCounter = 1
    setButtonsListeners()
})