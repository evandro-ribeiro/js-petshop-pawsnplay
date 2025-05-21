"use strict";
// Lógica para abrir e fechar o menu hamburguer da navbar
const menu_hamburguer = document.getElementById("menu_hamburguer");
const navbar_items = document.querySelector(".navbar_items");
const li_close_menu = document.getElementById("close_menu");
menu_hamburguer.addEventListener("click", () => {
    menu_hamburguer.classList.toggle("hide");
    navbar_items.classList.toggle("active");
});
li_close_menu.addEventListener("click", () => {
    menu_hamburguer.classList.toggle("hide");
    navbar_items.classList.toggle("active");
});
// Colocar backgroud-color e blur na navbar quando faz scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.classList.add("blur_with_scroll");
        if (window.scrollY > 700) {
            navbar.classList.add("background_navbar_with_scroll");
        }
        else {
            navbar.classList.remove("background_navbar_with_scroll");
        }
    }
    if (window.scrollY < 100) {
        navbar.classList.remove("blur_with_scroll");
    }
});
