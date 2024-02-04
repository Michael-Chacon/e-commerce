const aside = document.querySelector("#aside"),
  menuIndex = document.querySelector("#menuIndex");

menuIndex.addEventListener("click", function () {
  aside.classList.toggle("active");
});

// Carrito de compras

window.mostrar.addEventListener("click", () => {
  window.car.showModal();
  console.log("siiii");
});

window.cerrar.addEventListener("click", () => {
  window.car.close();
  console.log("siiii");
});
