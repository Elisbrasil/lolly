let currentSlide = 0;
const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
const slidesToShow = 2;

function moveCarousel(direction) {
  currentSlide += direction;

  const maxSlideIndex = totalSlides - slidesToShow;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  const slideWidht = 100 / slidesToShow;
  const offset = -currentSlide * slideWidht;
  track.style.transform = `translateX(${offset}%)`;
}

function toggleFAQ(button) {
  const faqItem = button.parentElement;
  const answer = faqItem.querySelector(".faq-answer");
  const isOpen = faqItem.classList.contains("active");

  // Fecha todos os outros FAQs
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
    item.querySelector(".faq-answer").classList.remove("open");
  });

  // Abre o clicado (se não estava aberto)
  if (!isOpen) {
    faqItem.classList.add("active");
    answer.classList.add("open");
  }
}
