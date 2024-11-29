import json from './gifts.json' with { type: "json" };

export const setModalMode = () => {

const path = document.location.href.includes('gifts') ? '.' : ''

const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const cards = document.querySelectorAll('.gift-card')
const iconClose = document.querySelector('.icon-close-modal')
const img = document.querySelector('.img-modal')
const category = document.querySelector('.modal-category')
const nameModal = document.querySelector('.modal-name')
const description = document.querySelector('.modal-description')
const live = document.querySelector('.live-quantity')
const create = document.querySelector('.create-quantity')
const love = document.querySelector('.love-quantity')
const dream = document.querySelector('.dream-quantity')
const liveSnowflakes = document.querySelectorAll('.snowflake.live')
const createSnowflakes = document.querySelectorAll('.snowflake.create')
const loveSnowflakes = document.querySelectorAll('.snowflake.love')
const dreamSnowflakes = document.querySelectorAll('.snowflake.dream')

const colorClasses = ['purple', 'green', 'pink']
const snowFlakes = [liveSnowflakes, createSnowflakes, loveSnowflakes, dreamSnowflakes]

const closeModal = () => {
    document.body.classList.remove('overflow')
    overlay.classList.add('hidden')
    modal.classList.remove('active')
    colorClasses.forEach(color => category.classList.remove(color))
    snowFlakes.forEach(items => items.forEach(flake => flake.classList.remove('active')))
}

overlay.addEventListener('click', closeModal)
iconClose.addEventListener('click', closeModal)

cards.forEach(card => card.addEventListener('click', () => {
    document.body.classList.add('overflow')
    overlay.classList.remove('hidden')
    modal.classList.add('active')


    const name = card.querySelector('h3').innerText
    const obj = json.filter(item => item.name.toLocaleUpperCase() === name)[0]

    img.setAttribute('alt', obj.category)
    category.innerText = obj.category
    nameModal.innerText = obj.name
    description.innerText = obj.description;
    live.innerHTML = obj.superpowers.live;
    create.innerHTML = obj.superpowers.create;
    love.innerHTML = obj.superpowers.love;
    dream.innerHTML = obj.superpowers.dream;

    Array(Number(obj.superpowers.live)/100).fill(null).forEach((item, i) => {
        liveSnowflakes[i].classList.add('active')
    })
    Array(Number(obj.superpowers.create)/100).fill(null).forEach((item, i) => {
        createSnowflakes[i].classList.add('active')
    })
    Array(Number(obj.superpowers.love)/100).fill(null).forEach((item, i) => {
        loveSnowflakes[i].classList.add('active')
    })
    Array(Number(obj.superpowers.dream)/100).fill(null).forEach((item, i) => {
        dreamSnowflakes[i].classList.add('active')
    })

    switch (obj.category) {
        case 'For Work':
            img.setAttribute('src', `${path}./asserts/gift-for-work.png`)
            category.classList.add('purple')
            break;
            case 'For Health':
            img.setAttribute('src', `${path}./asserts/gift-for-health.png`)
            category.classList.add('green')
            break;
            case 'For Harmony':
            img.setAttribute('src', `${path}./asserts/gift-for-harmony.png`)
            category.classList.add('pink')
            break;
            }
}))
}
