const menu_hamburguer = document.getElementById("menu_hamburguer")!;
const navbar_items = document.querySelector(".navbar_items")!;

const li_close_menu = document.getElementById("close_menu")!;

menu_hamburguer.addEventListener("click", () => {
  menu_hamburguer.classList.toggle("hide");
  navbar_items.classList.toggle("active");
});

li_close_menu.addEventListener("click", () => {
  menu_hamburguer.classList.toggle("hide");
  navbar_items.classList.toggle("active");
});
