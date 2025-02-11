let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const totalSlides = slides.length;

function showSlides() {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[currentIndex].style.display = 'block';

    currentIndex = (currentIndex + 1) % totalSlides;
}

showSlides(); 

setInterval(showSlides, 3000);