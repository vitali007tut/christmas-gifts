const burgerDefault = document.querySelector(".icon-burger.default")
const burgerClose = document.querySelector(".icon-burger.close")
const burger = document.querySelectorAll(".icon-burger")

burgerClose.style.display = "none"
let flagBurgerDefault = true;

const setButtonStyle = () => {
    if (window.innerWidth <= 768) {
        if (flagBurgerDefault) {
        burgerDefault.style.display = "block"
        burgerClose.style.display = "none"
        } else {
        burgerDefault.style.display = "none"
        burgerClose.style.display = "block"
        }
    } else {
        burgerDefault.style.display = "none"
        burgerClose.style.display = "none"
    }
}

setButtonStyle()

window.addEventListener('resize', setButtonStyle)

burgerDefault.addEventListener('click', () => {
    burgerDefault.style.display = "none"
    burgerClose.style.display = "block"
    flagBurgerDefault = false
})

burgerClose.addEventListener('click', () => {
    burgerDefault.style.display = "block"
    burgerClose.style.display = "none"
    flagBurgerDefault = true;
})
