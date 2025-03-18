/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') :
        header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== SWIPER POPULAR ===============*/

/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
});

/*=============== SHOW SCROLL UP ===============*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// const scrollActive = () => {
//     const scrollY = window.pageYOffset

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight,
//             sectionTop = current.offsetTop - 58,
//             sectionId = current.getAttribute('id'),
//             sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             sectionsClass.classList.add('active-link')
//         } else {
//             sectionsClass.classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
let swiperTestimonial = new Swiper(".testimonial__swiper", {
    spaceBetween: 16,
    grabCursor: true,
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true, // استخدم true بدلاً من 'auto'
    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
}); /*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}