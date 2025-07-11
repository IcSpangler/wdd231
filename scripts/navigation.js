const menuButton = document.getElementById('menu');
const nav = document.getElementById('navMenu');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show'); // alterna a visibilidade do menu
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        nav.classList.remove('show'); // Corrigido: era 'navMenu' (não declarado)
    }
});
