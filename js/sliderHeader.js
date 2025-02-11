document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide-header');
    const nextButton = document.querySelector('.next-header');
    const prevButton = document.querySelector('.prev-header');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active-header'));
        slides[index].classList.add('active-header');

        const offset = -index * 100;
        document.querySelector('.slider-header-content').style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevButton.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});