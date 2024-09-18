let btnSearchIcon = document.querySelector(".search .icon");
let inputSearch = document.querySelector(".search .input");

btnSearchIcon.addEventListener("click", () => {
    inputSearch.classList.toggle("open-search");
    if (inputSearch.classList.contains("open-search")) {
        btnSearchIcon.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else {
        btnSearchIcon.innerHTML = `<i class="fa-solid fa-magnifying-glass fa-xs"></i>`
    }
})

/* ------------------------------------------------------------------------------------------------ */


let openManu = document.querySelector(".box-content .icon-menu");
let closeManu = document.querySelector(".menu-mobile .close");
let menuMobile = document.querySelector(".menu-mobile");

openManu.addEventListener("click", () => {
    menuMobile.classList.add("open-menu");
    document.body.style.overflow = "hidden"
})

closeManu.addEventListener("click", () => {
    menuMobile.classList.remove("open-menu");
    document.body.style.overflow = "auto"
})


/* ------------------------------------------------------------------------------------------------ */


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});