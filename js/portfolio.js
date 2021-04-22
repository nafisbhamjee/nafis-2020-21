document.getElementById("prev").onclick = function() {plusSlides(-1)};

document.getElementById("next").onclick = function() {plusSlides(1)};

let slideIndex = 1;
displaySlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  displaySlides(slideIndex += n);
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
