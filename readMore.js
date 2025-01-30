document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn-saber-mais button");
  const containerBox = document.querySelector(".container-box");

  btn.addEventListener("click", function () {
    containerBox.classList.toggle("active");

    
    if (containerBox.classList.contains("active")) {
      btn.textContent = "Mostrar Menos";
    } else {
      btn.textContent = "Saber Mais";
    }
  });
});