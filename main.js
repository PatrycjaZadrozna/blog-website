const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll('.nav-links li')

    //1. Toggle Nav
    function navSlide() {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle("burgerToggle");
    }

    burger.addEventListener("click", navSlide);


    //2. Tab gallery
const current = document.querySelector('#current');
const imgs = document.querySelectorAll(".photo-gallery img");
const opacity = 0.6;


imgs[0].style.opacity = opacity;

function imgClick (e){

    imgs.forEach(img => (img.style.opacity = 1));
    current.src = e.target.src;

    current.classList.add('fade-in');

    setTimeout(() => current.classList.remove('fade-in'), 500);

    e.target.style.opacity = opacity;
}

imgs.forEach(img => img.addEventListener('click', imgClick));

// slider dots

const slideList = [
{img:"img/m1.jpg",
text:"Mountain And Hiking"},

{img:"img/m2.jpg",
text:"Adventure Time"},

{img:"img/m3.jpg",
text:"Wild Horizons"}];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.sliderText');
const dots = [...document.querySelectorAll('.dots span')];
const time = 5000;
let active = 0;

function changeDot(){
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');

}

function changeSlide(){
    active++;
    if(active === slideList.length){
        active = 0
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()

}

setInterval(changeSlide, time)




