import { data } from './data.js';
let dataCopy = []
let section = document.querySelector('.cards')
let form = document.querySelector('.form')
let input = document.querySelector('#input')
let select = document.querySelector('.form__select')


let addNewCard = (data, index) => {
    let newCard = document.createElement('div')
    newCard.classList.add('emojies__card', 'card')
    let alive = 'yes'
    if (!data[index].alive) {
        alive = 'no'
    }
    newCard.innerHTML =
        `<article class="cards__card card">
        <img class="card__img" src="${data[index].image}" alt="Гермиона">
        <p class="card__text">
            <span class="card__text_name">${data[index].name}</span><br>
            Actor: ${data[index].actor} <br>
            Gender: ${data[index].gender} <br>
            House: ${data[index].house} <br>
            Wand core: ${data[index].wand.core} <br>
            Alive: ${alive}
        </p>
        </article>`
    section.appendChild(newCard)
}

if (input.value === '') {
    for (let i = 0; i < data.length; i++) {
        addNewCard(data, i)
    }
}

function search(filter) {
    for (let index = 0; index < data.length; index++) {

        if (String(data[index][filter]).toLowerCase().includes(input.value.toLowerCase())) {
            dataCopy[0] = data[index]
            addNewCard(dataCopy, 0)
        }
    }
}

form.addEventListener('input', (event) => {
    event.preventDefault()
    section.innerHTML = ``
    console.log('запрос отправлен');

    for (let index = 0; index < 15; index++) {
        search(Object.keys(data[0])[index])
    }


})

select.addEventListener('change', function () {
    console.log(((this.value).toLowerCase()))
    section.innerHTML = ``
    for (let index = 0; index < data.length; index++) {

        if (String(data[index]['house']).toLowerCase().includes((this.value).toLowerCase())) {
            dataCopy[0] = data[index]
            addNewCard(dataCopy, 0)
        }

    }


})
