import { data } from './data.js';
let dataCopy = []
let section = document.querySelector('.cards__liked')
let input = document.querySelector('#input')
let select = document.querySelector('.form__select')
let save = []
let localStorage = window.localStorage

if (localStorage.getItem('cards') != undefined) {

    let cards = JSON.parse(localStorage.getItem('cards'))
    for (let index = 0; index < cards.length; index++) {
        console.log(cards);
        console.log(index);


        // for (let i = 0; i < data.length; i++) {
        //     console.log('22', cards[index]['like']);

        //     addNewCard(data, i, index, cards[index]['like'])
        // }
    }
}

function attachLikeEvent(likebtn, name, index) {
    if (localStorage.getItem('cards') != undefined) {
        if (localStorage.getItem('cards').includes(name)) {
            likebtn.addEventListener('click', () => {
                console.log('delike');
                console.log(likebtn);
                likebtn.classList.remove('card__like_click')
                likebtn.classList.add('card__like_declick')
                let lsParse = JSON.parse(localStorage.cards)
                for (let i = 0; i < lsParse.length; i++) {
                    save[i] = lsParse[i]                    
                }
                delete save[index]
                console.log(save, 'edit');
                
                localStorage.setItem('cards', JSON.stringify(save))
            })
        } else {
            likebtn.addEventListener('click', () => {
                console.log('like');
                likebtn.classList.remove('card__like_declick')
                likebtn.classList.add('card__like_click')
                console.log(likebtn.closest('.card'), name);
                save[index] = { 'like': name }
                console.log(save);
                localStorage.setItem('cards', JSON.stringify(save))
            })
        }
    } else {
        likebtn.addEventListener('click', () => {
            console.log('like');
            likebtn.classList.add('card__like_click')
            console.log(likebtn.closest('.card'), name);
            save[index] = { 'like': name }
            console.log(save);
            localStorage.setItem('cards', JSON.stringify(save))
        })
    }

}

function addNewCard(data, index, liked) {
    let newCard = document.createElement('div')
    newCard.classList.add('emojies__card', 'card')
    let alive = 'yes'
    if (!data[index].alive) {
        alive = 'no'
    }
    if (liked == data[index]['name']) {
        newCard.innerHTML =
            `<article class="cards__card card">
        <img class="card__img" src="${data[index].image}" alt="${data[index].name}">
        <svg class='card__like card__like_click' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group-1">
            <g id="Ellipse 1" filter="url(#filter0_d_2536_1008)">
            <circle cx="59" cy="51" r="24" fill="white"/>
            </g>
            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M58.9997 41.9711C65.6567 35.1281 82.3007 47.1026 58.9997 62.5001C35.6987 47.1041 52.3427 35.1281 58.9997 41.9711Z" fill="#DC3545"/>
            </g>
            <defs>
            <filter id="filter0_d_2536_1008" x="0" y="0" width="118" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="17.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2536_1008"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2536_1008" result="shape"/>
            </filter>
            </defs>
        </svg>
        <p class="card__text">
            <span class="card__text_name">${data[index].name}</span><br>
            Actor: ${data[index].actor} <br>
            Gender: ${data[index].gender} <br>
            House: ${data[index].house} <br>
            Wand core: ${data[index].wand.core} <br>
            Alive: ${alive}
        </p>
        </article>`
    } else {
        newCard.innerHTML =
            `<article class="cards__card card">
        <img class="card__img" src="${data[index].image}" alt="${data[index].name}">
        <svg class='card__like' width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group-1">
            <g id="Ellipse 1" filter="url(#filter0_d_2536_1008)">
            <circle cx="59" cy="51" r="24" fill="white"/>
            </g>
            <path class='heart-fill' id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M58.9997 41.9711C65.6567 35.1281 82.3007 47.1026 58.9997 62.5001C35.6987 47.1041 52.3427 35.1281 58.9997 41.9711Z" fill="#DC3545"/>
            </g>
            <defs>
            <filter id="filter0_d_2536_1008" x="0" y="0" width="118" height="118" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="8"/>
            <feGaussianBlur stdDeviation="17.5"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2536_1008"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2536_1008" result="shape"/>
            </filter>
            </defs>
        </svg>
        <p class="card__text">
            <span class="card__text_name">${data[index].name}</span><br>
            Actor: ${data[index].actor} <br>
            Gender: ${data[index].gender} <br>
            House: ${data[index].house} <br>
            Wand core: ${data[index].wand.core} <br>
            Alive: ${alive}
        </p>
        </article>`
    }

    section.appendChild(newCard)
    let likeButton = document.querySelectorAll('.card__like')
    attachLikeEvent(likeButton[index], data[index]['name'], index)

}
let cards = JSON.parse(localStorage.getItem('cards'))
console.log(cards);
console.log(cards.length);

if (cards.length != 0) {
    console.log('!null');
    
    for (let i = 0; i < data.length; i++) {
        if (cards[i] != undefined && cards[i] != null) {
            addNewCard(data, i, cards[i]['like'])
        }
    }
} else {
    console.log('else');
    section.classList.add('cards__liked_empty')
    let empty = document.createElement('div')
    empty.classList.add('empty')
    empty.innerHTML = `It's empty now`
    section.appendChild(empty)
}