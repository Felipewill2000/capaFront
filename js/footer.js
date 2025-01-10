document.addEventListener('DOMContentLoaded', () => {
    console.log('Footer loaded');
    
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const footer = document.querySelector('footer');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight >= documentHeight - 50) {
            // Mostrar footer cuando estás cerca del final de la página
            footer.style.bottom = '0';
        } else if (scrollTop > lastScrollTop) {
            // Ocultar footer cuando haces scroll hacia abajo
            footer.style.bottom = '-100px';
        } else {
            // Mostrar footer cuando haces scroll hacia arriba
            footer.style.bottom = '0';
        }

        lastScrollTop = scrollTop;
    });
});