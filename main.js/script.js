
/*this set of codes will justify the new footer on the screen
@media only screen and (min-width: 29.8125rem (some comment was here ==477px (Some Comment)/) {
    .ft-main {
        justify-content: space-around;
    }
}
@media only screen and (min-width: 77.5rem this is comment===/1240p ===this was a comment) {) {
    .ft-main {
        justify-content: space-evenly;
    }
}        */

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });






/*this script is for the carousel slide in the home/index page

const button = document.querySelector("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
    })
}) */

