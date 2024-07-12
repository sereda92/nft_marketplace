import burger from './burger.js'

const burgerBtn = document.querySelector('.burger__btn')
const main = document.querySelector('.main')

burgerBtn.addEventListener('click', ()=> {
    main.classList.toggle('main_active')
})