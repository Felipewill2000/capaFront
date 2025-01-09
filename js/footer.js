document.addEventListener('DOMContentLoaded', () => {
    console.log('Footer loaded');
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    const footer = document.getElementById('footer');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + windowHeight >= documentHeight - 50) {
        // Mostrar footer cuando estás cerca del final de la página
        footer.style.bottom = '0';
    } else {
        // Ocultar footer cuando no estás cerca del final de la página
        footer.style.bottom = '-100px';
    }
});
    // Agrega funciones específicas del footer aquí
});
