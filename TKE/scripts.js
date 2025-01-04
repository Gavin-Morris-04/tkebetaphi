let slideIndex = 0;
showSlides();

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  for (let slide of slides) slide.style.display = "none";
  slides[slideIndex].style.display = "block";
}

setInterval(() => changeSlide(1), 5000); // Automatically switch slides every 5 seconds
