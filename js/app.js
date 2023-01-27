const menu = document.querySelector('.header__menu');
const hamburger = document.querySelector('.header__items__hamburger');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

const drop = document.querySelector('.drop');
const drop_menu = document.getElementById('dropdown-content');
const nav_icon = document.getElementById('expand1');

const drop2 = document.querySelector('.drop2');
const drop_menu2 = document.getElementById('dropdown-content2');
const nav_icon2 = document.getElementById('expand2');

const show_nav = document.querySelector('.show_nav');



function toggleMenu(){
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
        menuBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    }else{
        menu.classList.add('active');
        menuBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    }
}

hamburger.addEventListener('click', toggleMenu);


const mda = window.matchMedia('(max-width: 768px)');


if(mda.matches){

    drop.addEventListener('click', () => {
        drop_menu.classList.toggle('drop-show');
        nav_icon.classList.toggle('navIcon-move');
    })

    drop2.addEventListener('click', () => {
        drop_menu2.classList.toggle('drop-show');
        nav_icon2.classList.toggle('navIcon-move');
    })

}

//==================FEEDBACKS========================//
comments = [
    {
        id: 1,
        quote: 'Sed dignissim placerat dolor id maxim. Nullam gravida bibendum ipsum, a consequat neque venenatis et.',
        img: './styles/img/customer.png',
        text1: 'Orci varius natoque',
        text2: 'Magnis dis parturient montes'
    },
    {
        id: 2,
        quote: 'Vivamus venenatis ipsum at risus placerat, sit amet dapibus diam aliquam posuere cubilia curae.',
        img: './styles/img/customer2.png',
        text1: 'Orci varius natoque',
        text2: 'Magnis dis parturient montes'
    },
    {
        id: 3,
        quote: "Etiam mollis sit amet tellus ut accumsan. Donec sit amet lectus scelerisque, bibendum purus id, tristique felis.",
        img: './styles/img/customer3.png',
        text1: 'Orci varius natoque',
        text2: 'Magnis dis parturient montes'
    }
]



const leftArrowBtn = document.querySelector('.left-arrow');
const rightArrowBtn = document.querySelector('.right-arrow');
const quote = document.getElementById('quote');
const img = document.getElementById('img');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const bullet = document.querySelectorAll('.circle');
const circleSvg = document.querySelectorAll('.circle-svg');
let current = 0;


const arrow_left = document.querySelector('.arrow-l');
const arrow_right = document.querySelector('.arrow-r');


window.addEventListener('DOMContentLoaded', () => {
    const item = comments[current];

    quote.textContent = item.quote;
    img.src = item.img;
    text1.textContent = item.text1;
    text2.textContent = item.text2;
})

function changeComm(comm){
    const item = comments[comm];

    quote.textContent = item.quote;
    img.src = item.img;
    text1.textContent = item.text1;
    text2.textContent = item.text2;
}

function changeBullet(current){

    if(current === 1){
        bullet[current].classList.toggle('active');
        circleSvg[current].classList.toggle('active-svg');
        circleSvg[0].classList.remove('active-svg');
        circleSvg[2].classList.remove('active-svg');
        bullet[0].classList.remove('active');
        bullet[2].classList.remove('active');
    }else if(current === 2){
        bullet[current].classList.toggle('active');
        circleSvg[current].classList.toggle('active-svg');
        circleSvg[0].classList.remove('active-svg');
        circleSvg[1].classList.remove('active-svg');
        bullet[0].classList.remove('active');
        bullet[1].classList.remove('active');
    }else if(current == 0){
        bullet[current].classList.toggle('active');
        circleSvg[current].classList.toggle('active-svg');
        circleSvg[1].classList.remove('active-svg');
        circleSvg[2].classList.remove('active-svg');
        bullet[1].classList.remove('active');
        bullet[2].classList.remove('active');
    }
}

rightArrowBtn.addEventListener('click', () => {

    current++;

    if(current >= comments.length - 1){
        current = comments.length - 1;
        arrow_right.classList.add('inactive-a');
        
    }

    arrow_left.classList.remove('inactive-a')


    changeComm(current);
    changeBullet(current);
})

leftArrowBtn.addEventListener('click', () => {

    current--;

    if(current <= 0){
        current = 0;
        arrow_left.classList.add('inactive-a');

    }

    arrow_right.classList.remove('inactive-a');

    changeComm(current);
    changeBullet(current)
})


bullet.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if(current !== index){
            changeComm(index);
            changeBullet(index);
        }
    })
})

//==================CORE========================//

const titles = document.querySelectorAll('.core__box__item__title');
const text = document.querySelectorAll('.core__box__item');
const items = document.querySelectorAll('.core__box__item');


items.forEach((item) => {
    const plus = item.querySelector('.plus');
    const upper = item.querySelector('.up');


       item.addEventListener('click', (e) => {
        const ch = e.currentTarget.children[1];

        if(e.currentTarget){
            ch.classList.toggle('show-text');
            plus.classList.toggle('hidde');
            upper.classList.toggle('show');
        }  
       })
})