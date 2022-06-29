
//this set of codes will justify the new footer on the screen
@media only screen and (min-width: 29.8125rem /*477px*/) {
    .ft-main {
        justify-content: space-around;
    }
}
@media only screen and (min-width: 77.5rem /*1240px*/ ) {
    .ft-main {
        justify-content: space-evenly;
    }
}

//this script is for the carousel slide in the home/index page

const button = document.querySelector("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
    })
})

