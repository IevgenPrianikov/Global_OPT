// Hamburger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})


// Запускаем функцию которая добавляет navbar__fixed класс
// для фиксации НавБара при определённом разрешении экрана

// let mediaQuery = window.matchMedia('(max-width: 768px)');
// if (mediaQuery.matches) {
//     // я выполняюсь только если ширина экрана 768 или меньше

//     // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
//     function fixedNav() {
//         const nav = document.querySelector('navbar')

//         // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
//         const breakpoint = 150
//         if (window.scrollY >= breakpoint) {
//             nav.classList.add('navbar__fixed')
//         } else {
//             nav.classList.remove('navbar__fixed')
//         }
//     }
//     window.addEventListener('scroll', fixedNav)
// }



// MODAL window

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }


// Swiper slider
// https://swiperjs.com/get-started


const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    // spaceBetween: 10,
    centeredSlides: true,
    // Optional parameters
    // direction: 'vertical',
    loop: true,

    // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },
    autoplay: {
        delay: 5000,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    // // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        // when window width is >= 480px
        780: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        // when window width is >= 640px
        1150: {
            slidesPerView: 3,
            // spaceBetween: 40,
        },
    },
});


// КНОПКА ВВЕРХ
// Выполняем функцию только если ширина экрана 768px или больше
let pageMediaQuery = window.matchMedia('(min-width: 768px)');
if (pageMediaQuery.matches) {

function fixedPageUp () {
    // ищем класс .pageup и его присваеваем
    const pageup = document.querySelector('.pageup');

    // тут указываем в пикселях, сколько нужно проскроллить вниз
    // что бы кнопка стала фиксированной
    const breakpoint = 200
    if (window.scrollY >= breakpoint) {
        pageup.classList.add('pageup__fixed');
    } else {
        pageup.classList.remove('pageup__fixed');
    }
}
window.addEventListener('scroll', fixedPageUp);
}