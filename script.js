// Fonctionnalité du carrousel
    document.addEventListener('DOMContentLoaded', function () {
      const carousel = document.querySelector('.carousel-container');
      const slides = document.querySelectorAll('.carousel-slide');
      const prevButton = document.querySelector('.carousel-button.prev');
      const nextButton = document.querySelector('.carousel-button.next');
      let currentSlide = 0;

      function updateCarousel() {
        carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
      }

      prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateCarousel();
      });

      nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateCarousel();
      });
    });

// Contact
document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById("form-contact");
const res = document.getElementById("section-res");
const mainTitle = document.getElementById("h1");
const description = document.querySelector(".p");

let surnameInput = document.getElementById("surname");
let nameInput = document.getElementById("name");
let cityInput = document.getElementById("city");
let adresseInput = document.getElementById("street");

form.addEventListener("submit", function (event) {
  event.preventDefault();


  const p = document.createElement("p");


  const paraName = document.createElement("p");
  paraName.textContent = `Nom: ${nameInput.value}`;

  const paraSurname = document.createElement("p");
  paraSurname.textContent = `Prénom: ${surnameInput.value}`;

  const paraCity = document.createElement("p");
  paraCity.textContent = `Lieu: ${cityInput.value}`;

  const div = document.createElement("div");
  div.id = "result";


  mainTitle.textContent = "Vos coordonnées";

  description.remove();
    

  div.appendChild(paraName);
  div.appendChild(paraSurname);
  div.appendChild(paraCity);

  form.remove();
  

  res.appendChild(div);

   form.reset();
});
});