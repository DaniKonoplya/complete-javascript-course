'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => {
    btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

const btnScrollTo = document.querySelector('.btn--scroll-to')
// Selects element
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', (e) => {
    const s1coords = section1.getBoundingClientRect()
    console.log(s1coords);
    console.log(e.target.getBoundingClientRect());
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
    console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

    // The old way 

    // window.scrollTo(
    //     {
    //         left: s1coords.left + window.pageXOffset,
    //         top: s1coords.top + window.pageYOffset,
    //         behavior: 'smooth'
    //     }
    // );

    // Scrolls to the element
    section1.scrollIntoView({ behavior: 'smooth' })

});

const alertH1 = (e) => {
    alert('addEventListener: Great! You are reading athe heading: D')
    h1.removeEventListener('mouseenter', alertH1)
}

const h1 = document.querySelector('h1')
h1.addEventListener('mouseenter', alertH1)

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomColor = () => {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`
}

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, e.currentTarget);
//     console.log(e.currentTarget === this);

//     //Stop propagation
//     // e.stopPropagation()
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, e.currentTarget);
// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log(e.target, e.currentTarget);
// })

// document.querySelectorAll('.nav__link').forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         const id = this.getAttribute('href');
//         console.log(id);
//         document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
//     })
// })

//Propagation in action, by selecting only the parent element.

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault()
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    }
})



// h1.onmouseenter = (e) => {
//     alert('addEventListener: Great! You are reading athe heading: D')
// }

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// const header = document.querySelector('.header')
// const allSections = document.querySelectorAll('.section');
// console.log(allSections)

// document.getElementById('section--1')
// // The collection updates dinamically as soon as some button added or removed . 
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'))

//Creating and inserting elements

//.insertAdjacentHTML

// const message = document.createElement('div')
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookied for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>'
// header.prepend(message)
// header.append(message.cloneNode(true))

// header.before(message)
// header.after(message)

//Delete elements
// document.querySelector('.btn--close--cookie').addEventListener('click', () => {
//     message.remove()
//     // The old cumbersome way 
//     // message.parentElement.removeChild(message)
// })

//Styles

// message.style.backgroundColor = '#37383d'
// message.style.width = '120%'

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'

// //Working with css

// document.documentElement.style.setProperty('--color-primary', 'orangered')

// //Attributes

// const logo = document.querySelector('.nav__logo')
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimalist logo'

// // Non-standard
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist')
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data attributes
// console.log(logo.dataset.versionNumber);

// //Classes
// logo.classList.add('c','j')
// logo.classList.remove('c','j')
// logo.classList.toggle('c')
// logo.classList.contains('c')

