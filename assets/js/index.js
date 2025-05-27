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
const heroSize = document.querySelector(".hero");
window.addEventListener("scroll", () => {
    window.pageYOffset > heroSize.offsetHeight - 80
        ? navbar.classList.add("background_navbar_with_scroll")
        : navbar.classList.remove("background_navbar_with_scroll");
});
// Coloca efeito de clique nos cards de produtos
document.querySelectorAll(".product_hover").forEach((card) => {
    card.addEventListener("click", function () {
        document.querySelectorAll(".product_hover").forEach((el) => {
            if (el !== card)
                el.classList.remove("active");
        });
        card.classList.toggle("active");
    });
});
// Abre caixa de pesquisa da seção shop
const searchIcon = document.getElementById("search_icon");
searchIcon.addEventListener("click", () => {
    const inputSearch = document.querySelector(".input_search");
    inputSearch.classList.toggle("hide_mobile");
});
