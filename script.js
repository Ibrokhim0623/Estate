
const in_top = document.querySelector("#in_top");
in_top.style.display = "none"

window.addEventListener("scroll", () => {
    if(scrollY >= 120){
        in_top.style.display = "flex"
    } else{
        in_top.style.display = "none"
    }
});

const nav = document.querySelector(".navigation");
window.addEventListener("scroll", ()=> {
    nav.classList.toggle("navi", scrollY > 0)
})

$(".coruesel").owlCarousel({
    margin: 20,
    autoplay: false,
    loop: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
        0:{
            items: 1,
            nav: true
        },
        991: {
            items: 2,
            nav: true,
        }
    }
});

const menu = document.querySelector("#menu"),
    close = document.querySelector("#close"),
    toggleMenu = document.querySelector("#toggle-menu"),
    li = document.getElementsByTagName("li");

menu.addEventListener("click", () => {
    toggleMenu.classList.toggle("show");
})
close.addEventListener("click", () => {
    toggleMenu.classList.remove("show");
});


const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    toggleMenu.classList.remove("show")
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
});

sr.reveal(`.card`, {delay: 500, interval: 200});
sr.reveal(`.task1, .first`, {delay: 500, origin: "left"});
sr.reveal(`.worker`, {origin: "left", interval: 500, duration: 500});
sr.reveal(`.task2, .stellar`, {origin: "bottom", interval: 300});