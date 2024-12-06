import json from './gifts.json' with { type: "json" };

const shuffleArray = (array) => {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

export const randomGifts = (num, selector, path = '') => {

    const result = shuffleArray(json).slice(0, num)
    const container = document.querySelector(selector)

        result.forEach(element => {
            const giftCard = document.createElement("div")
            giftCard.className = 'gift-card active'
            const imgCard = document.createElement("img")
            imgCard.className = "img-card"
            imgCard.setAttribute('alt', element.category)
            const giftDescription = document.createElement("div")
            giftDescription.className = 'description-gift'
            giftCard.append(imgCard)
            giftCard.append(giftDescription)
            const h4 = document.createElement("h4")
            const h3 = document.createElement("h3")
            giftDescription.append(h4)
            giftDescription.append(h3)
            h4.className = 'h4 card-gift-title'
            h4.innerText = element.category
            h3.className = 'h3'
            h3.innerText = element.name

            switch (element.category) {
                case 'For Work':
                    imgCard.setAttribute('src', `${path}./asserts/gift-for-work.png`)
                    h4.classList.add('purple')
                    break;
                    case 'For Health':
                    imgCard.setAttribute('src', `${path}./asserts/gift-for-health.png`)
                    h4.classList.add('green')
                    break;
                    case 'For Harmony':
                    imgCard.setAttribute('src', `${path}./asserts/gift-for-harmony.png`)
                    h4.classList.add('pink')
                    break;
                    }

            container.append(giftCard)
            });
}