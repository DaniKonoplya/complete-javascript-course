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

//Traversing the element

const h = document.querySelector('h1')
console.log(h.querySelectorAll('.highlight'));

// All children
console.log(h.childNodes);

//Dynamic collection of the elements
console.log(h.children);

h.firstElementChild.style.color = 'white'
h.lastElementChild.style.color = 'orangered'

//Going upwards: parents
console.log(h.parentNode);
console.log(h.parentElement);

h.closest('.header').style.background = 'var(--gradient-secondary)'
h.closest('h1').style.background = 'var(--gradient-primary)'

//Going sideways: siblings

console.log(h.previousElementSibling);
console.log(h.nextElementSibling);

console.log(h.previousSibling);
console.log(h.nextSibling);

//Get all the children of a parent element
console.log(h.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
    if (el !== h) {
        el.style.transform = 'scale(0.5)'
    }
})

//Tab building
const tabs = document.querySelectorAll('.operations__tab')
const tabContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

// Very ineffective way
// tabs.forEach(element => {
//     element.addEventListener('click', () => {
//         console.log('TAB');
//     })
// });

// Much better because it selects the parent element and uses closes for to get the requeired element. 
tabContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab')
    if (!clicked) {
        return
    }
    tabs.forEach(t => {
        t.classList.remove('operations__tab--active')
    });
    tabsContent.forEach((c) => {
        c.classList.remove('operations__content--active')
    })
    clicked.classList.add('operations__tab--active')

    //Activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

//Menu fade animation

const nav = document.querySelector('.nav')

const handleHover = function (e) {
    nav.addEventListener('mouseover', function (e) {
        if (e.target.classList.contains('nav__link')) {
            const link = e.target;
            const siblings = link.closest('.nav').querySelectorAll('.nav__link')
            const logo = link.closest('.nav').querySelector('img')
            siblings.forEach(element => {
                if (element !== link) {
                    element.style.opacity = this;
                }
                logo.style.opacity = this;
            });
        }
    })
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))
//Sticky navigation
// const obsCallback = function (entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// }

// const obsOptions = {
//     root: null,
//     treshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions)
// observer.observe(section1)

const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (entries) {
    //entry means the situation when the intersection happens. 
    const [entry] = entries;
    console.log(entry);

    if (!entry.isIntersecting) {
        nav.classList.add('sticky')
    } else {
        nav.classList.remove('sticky')
    }

}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
})
headerObserver.observe(header)

//Reveal sections
const allSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove('section--hidden')
        observer.unobserve(entry.target) // remove the observer for the element
    }
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15
})

allSections.forEach(section => {
    sectionObserver.observe(section)
    section.classList.add('section--hidden')
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', () => {
            entry.target.classList.remove('lazy-img')
        })
        observer.unobserve(entry.target)
    }
}

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '200px'
})

imgTargets.forEach(img => {
    imgObserver.observe(img)
});

//Slider
const slider = function () {

    const slides = document.querySelectorAll('.slide')
    const btnLeft = document.querySelector('.slider__btn--left')
    const btnRight = document.querySelector('.slider__btn--right')
    const dotContainer = document.querySelector('.dots')
    let curSlide = 0
    const maxSlide = slides.length

    //Next Slide

    const init = function () {
        createDots()
        gotToSlide(0)
        activatedot(0)
    }
    const gotToSlide = function (slide) {
        slides.forEach((s, i) => {
            s.style.transform = `translateX(${100 * (i - slide)}%)`
        });
    }

    const nextSlide = function () {
        if (curSlide == maxSlide - 1) {
            curSlide = 0
        } else {
            curSlide++
        }
        gotToSlide(curSlide)
        activatedot(curSlide)
    }

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1
        } else {
            curSlide--
        }
        gotToSlide(curSlide)
        activatedot(curSlide)
    }

    btnRight.addEventListener('click', nextSlide)
    btnLeft.addEventListener('click', prevSlide)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            prevSlide()
        } else if (e.key == 'ArrowRight') {
            nextSlide()
        }
    })

    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    }


    const activatedot = function (slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => {
            dot.classList.remove('dots__dot--active')
        });

        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
    }

    init()
    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            gotToSlide(slide)
            activatedot(slide)
        }
    })

}
slider()

// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords);

// Very inefficient way of catching the scroll event. 
// window.addEventListener('scroll', (e) => {
//     if (window.scrollY > initialCoords.top) {
//         nav.classList.add('sticky')
//     } else {
//         nav.classList.remove('sticky')
//     }
// })

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

