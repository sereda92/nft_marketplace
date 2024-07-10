import burger from './burger.js'

function moveMainInfo() {
    const mainSection = document.querySelector('.main__section');
    const mainInfo = document.querySelector('.main_info');
    const mainSectionCard = document.querySelector('.main__section-card');
    // --------------
    const topCreators = document.querySelector('.top-creators');
    const creatorsBtn = document.querySelector('.creators__btn');
    const topCreatorsWrap = document.querySelector('.top-creators__wrap');
    // ----------------
    const discover = document.querySelector('.discover')
    const discoverBtn = document.querySelector('.discover__btn')
    const discoverMain = document.querySelector('.discover_main')
    // ----------------
    const mashroom = document.querySelector('.mashroom__container')
    const mashroomBtn = document.querySelector('.mashroom__btn')
    const mashroomMain = document.querySelector('.mashroom__main')
    // ----------------
    if (window.innerWidth <= 540) {
        mainSection.appendChild(mainInfo);
        topCreators.appendChild(creatorsBtn);
        discover.appendChild(discoverBtn);
        mashroom.appendChild(mashroomBtn);
    } else {
        mainSection.querySelector('.main__section-title').appendChild(mainInfo);
        topCreators.querySelector('.top-creators_title').appendChild(creatorsBtn);
        discover.querySelector('.discover_title').appendChild(discoverBtn);
        mashroom.querySelector('.mashroom__main').appendChild(mashroomBtn);
    }
    }

    window.addEventListener('resize', moveMainInfo);
    window.addEventListener('DOMContentLoaded', moveMainInfo);