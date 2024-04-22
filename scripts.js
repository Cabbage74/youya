let slideIndex = 0;

function moveSlide(n) {
    slideIndex += n;
    const slides = document.querySelectorAll('.carousel-inner img');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    const newTransform = `translateX(-${slideIndex * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}



