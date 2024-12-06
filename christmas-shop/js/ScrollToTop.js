const scrollBtn = document.querySelector('.scroll-to-top')

scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    scrollBtn.classList.remove('visible')
})

const setScrollBtn = () => {
    if (window.innerWidth <= 768 && window.pageYOffset >= 300) {
        scrollBtn.classList.add('visible')
    } else {
        scrollBtn.classList.remove('visible')
    }
}

setScrollBtn()
window.addEventListener('resize', setScrollBtn)
window.addEventListener('scroll', setScrollBtn);