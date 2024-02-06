const aside = document.querySelector("#aside"),
  menuIndex = document.querySelector("#menuIndex");

menuIndex.addEventListener("click", function () {
  aside.classList.toggle("active");
});

let menu = document.querySelector(".aside");

document.querySelector("#menuGeneral").addEventListener("click", function () {
  menu.classList.toggle("mostrar");
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

AOS.init({
  offset: 1,
});
