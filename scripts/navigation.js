const menuButton = document.getElementById('menu');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
});
