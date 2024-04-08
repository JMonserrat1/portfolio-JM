let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

showSlide(slideIndex);

// JavaScript para manejar la apertura y cierre del menú desplegable
document.querySelector(".menu-toggle").addEventListener("click", function () {
  console.log("Click en el icono del menú");
  const menu = document.querySelector("header nav ul");
  console.log("Menú:", menu);
  menu.classList.toggle("menu-open");
});

document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menu = document.querySelector("header nav ul");
  menu.classList.toggle("menu-open");
});

//Cambia el menu por la x
function menuX(){
  var imagen = document.getElementById("imagen");
  if(imagen.src.match("assets/x.png")){
    imagen.src = "assets/desplegable.png"; // Cambia a la imagen desplegable
  } else {
    imagen.src = "assets/x.png"; // Cambia a la imagen de la X
  }
}
