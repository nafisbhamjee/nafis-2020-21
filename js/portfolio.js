"use strict";

next.addEventListener("click",plusSlides);
prev.addEventListener("click",prevSlides);

let slideIndex = 1;
displaySlides(slideIndex);

// Next controls
function plusSlides(ev) {
  slideIndex++;
  displaySlides(slideIndex);
}

//Previous controls
function prevSlides(ev) {
  slideIndex--;
  displaySlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  displaySlides(slideIndex = n);
}

function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
