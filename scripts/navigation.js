const menuButton = document.getElementById('menu');
const nav = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        navMenu.classList.remove('open');
    }
});
