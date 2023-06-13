const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.hamburger-menu')
const menuMark = document.querySelectorAll('.hamburger-menu ul li')

let isOpen = false;

menuBtn.addEventListener('click', (e) => {
    isOpen = !isOpen;
    menu.classList.toggle('active')
});


menuMark.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        menuBtn.click()
    })
})