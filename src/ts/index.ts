// Lógica para abrir e fechar o menu hamburguer da navbar
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

// Colocar backgroud-color e blur na navbar quando faz scroll
const navbar = document.querySelector(".navbar")!;
const heroSize = document.querySelector(".hero")! as HTMLElement;

window.addEventListener("scroll", () => {
  window.pageYOffset > heroSize.offsetHeight - 80
    ? navbar.classList.add("background_navbar_with_scroll")
    : navbar.classList.remove("background_navbar_with_scroll");
});

// Coloca efeito de clique nos cards de produtos
document.querySelectorAll(".product_hover").forEach((card) => {
  card.addEventListener("click", function () {
    document.querySelectorAll(".product_hover").forEach((el) => {
      if (el !== card) el.classList.remove("active");
    });

    card.classList.toggle("active");
  });
});

// Coloca efeito de clique nos cards de serviços
document.querySelectorAll(".service_hover").forEach((card) => {
  card.addEventListener("click", function () {
    document.querySelectorAll(".service_hover").forEach((el) => {
      if (el !== card) el.classList.remove("active");
    });

    card.classList.toggle("active");
  });
});

// Abre caixa de pesquisa da seção shop
const searchIcon = document.getElementById("search_icon")!;

searchIcon.addEventListener("click", () => {
  const inputSearch = document.querySelector(
    ".input_search"
  )! as HTMLInputElement;

  inputSearch.classList.toggle("hide_mobile");
});

// Altera a categoria na seção shop
const btnCategoryList = document.querySelectorAll(".btn_category")!;

btnCategoryList.forEach((btn) => {
  btn.addEventListener("click", function () {
    btnCategoryList.forEach((el) => {
      if (el !== btn) el.classList.remove("btn_secundary");
    });

    btn.classList.toggle("btn_secundary");
  });
});

// Adiciona contador no hover dos produtos da seção shop
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".product_hover");

  cards.forEach((card) => {
    const btnPlus = card.querySelector(".plus_button")!;
    const btnMinus = card.querySelector(".minus_button")!;
    const qtySpan = card.querySelector(".product_qty")! as HTMLSpanElement;

    btnPlus.addEventListener("click", () => {
      let currentQty = parseInt(qtySpan.textContent!);
      qtySpan.textContent = (currentQty + 1).toString();
    });

    btnMinus.addEventListener("click", () => {
      let currentQty = parseInt(qtySpan.textContent!);
      if (currentQty > 1) {
        qtySpan.textContent = (currentQty - 1).toString();
      }
    });
  });
});
