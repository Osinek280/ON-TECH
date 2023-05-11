const menuBtn = document.querySelector('.menu');
const menu = document.querySelector('.hamburger-menu')
const menuMark = document.querySelectorAll('.hamburger-menu ul li')

let isOpen = false;

document.querySelectorAll('.mark').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.textContent === 'HOME')
        {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        else if(e.target.textContent === 'CLASSIC') {
            const section = document.querySelector('.classic-container');

            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            });

        }
        else if(e.target.textContent === 'SOFT LINE') {
            const section = document.querySelector('.soft-container')
            
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            });
        }
        else if(e.target.textContent === 'KONTAKT') {
            const section = document.querySelector('.contact')
            
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    })
})

menuBtn.addEventListener('click', (e) => {
    isOpen = !isOpen;
    menu.classList.toggle('active')
});


menuMark.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        menuBtn.click()
    })
})