import { randomGifts } from './randomGifts.js'

let cards;

const setCards = async() =>  {
    await  randomGifts(12, '.gift-items-block', '.')
    cards = document.querySelectorAll('.gift-card')
    cards.forEach(card => card.classList.add('active'))
}

setCards()

const allBtn = document.querySelector('#all')
const workBtn = document.querySelector('#work')
const healthBtn = document.querySelector('#health')
const harmonyBtn = document.querySelector('#harmony')
allBtn.disabled = true

const arrBtn = [allBtn, workBtn, healthBtn, harmonyBtn]

arrBtn.forEach(btn => btn.addEventListener('click', () => {
    arrBtn.forEach(btn => {
        btn.classList.remove('active')
        btn.disabled = false
    })
    btn.classList.add('active')
    btn.disabled = true

    cards = document.querySelectorAll('.gift-card')

    if (btn.id === 'all')  {
        cards.forEach(card => card.classList.add('active'))
        return
    }
    
    cards.forEach(card => card.classList.remove('active'))
    cards.forEach(card => {
        const imgAlt = card.querySelector('img').getAttribute('alt')
        const isActive = imgAlt.toLocaleLowerCase().includes(btn.id)
        if (isActive) card.classList.add('active')
    })
}))