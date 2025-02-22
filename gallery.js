const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryImgs = document.querySelectorAll('.gallery-img');
let currentlySelected = 0;

prevBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected--;
    galleryImgs[currentlySelected].classList.add("active");
    nextBtn.disabled = false;

    if (currentlySelected == 0) {
        prevBtn.disabled = true;
    }
});

nextBtn.addEventListener('click', function() {
    galleryImgs[currentlySelected].classList.remove("active");
    currentlySelected++;
    galleryImgs[currentlySelected].classList.add("active");
    prevBtn.disabled = false;

    if(currentlySelected === galleryImgs.length - 1) {
        nextBtn.disabled = true;
    }
});