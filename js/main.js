
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    moveToNextSlide();
});

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    moveToPrevSlide();
});

function updateCarousel() {
    items.forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function moveToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
}

updateCarousel();

