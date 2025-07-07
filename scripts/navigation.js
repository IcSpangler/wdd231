const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        navMenu.classList.remove('open');
    }
});
