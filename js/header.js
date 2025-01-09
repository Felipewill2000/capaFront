document.addEventListener('DOMContentLoaded', () => {
    console.log('Header loaded');
    let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        header.style.top = '-100px'; // Ocultar header
    } else {
        // Scroll hacia arriba
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});


    // Aquí puedes agregar funcionalidades adicionales
});
