import burger from './burger.js'

const burgerBtn = document.querySelector('.burger__btn')
const main = document.querySelector('.main')
const body = document.querySelector('body')
const burgerBody = document.querySelector('.burger')

burgerBtn.addEventListener('click', ()=> {
    main.classList.toggle('main_active')
    body.classList.toggle('body_active')
    burgerBody.classList.toggle('burger__active')
    burgerBtn.classList.toggle('burger__btn_active')
})