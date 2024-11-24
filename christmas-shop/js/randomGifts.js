const fetchData = async () => {
    const response = await fetch('./js/gifts.json')
    return response.json()
}

const shuffleArray = (array) => {
for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
return array;
}

fetchData()
    .then(gifts => {
        const result = shuffleArray(gifts).slice(0, 4)
        const container = document.querySelector('.home-gifts-cards-container')

        result.forEach(element => {
            console.log(element.name, element.category);
            const giftCard = document.createElement("div")
            giftCard.className = 'gift-card'
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
                    imgCard.setAttribute('src', './asserts/gift-for-work.png')
                    h4.classList.add('purple')
                    break;
                    case 'For Health':
                    imgCard.setAttribute('src', './asserts/gift-for-health.png')
                    h4.classList.add('green')
                    break;
                    case 'For Harmony':
                    imgCard.setAttribute('src', './asserts/gift-for-harmony.png')
                    h4.classList.add('pink')
                    break;
                    }

            container.append(giftCard)
            });
    })