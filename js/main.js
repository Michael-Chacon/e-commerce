//  Descripcion del producto
window.show.addEventListener("click", () => {
  window.dialog.showModal();
});

window.hide.addEventListener("click", () => {
  window.dialog.close();
});

// Carrito de compras

window.mostrar.addEventListener("click", () => {
  window.car.showModal();
});

window.cerrar.addEventListener("click", () => {
  window.car.close();
});

// Menu

let menu = document.querySelector(".menu");
document.querySelector(".btnMenu").addEventListener("click", function () {
  menu.classList.toggle("active");
});

document.querySelector(".menu").addEventListener("click", function () {
  menu.classList.remove("active");
});
