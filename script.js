const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('nav__menu--show');
  toggle.textContent = isOpen ? '✕' : '☰';
});

// --- Modal de inicio de sesión ---
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

const openFromMenu = document.getElementById("openModalFromMenu");

openFromMenu.addEventListener("click", (e) => {
  e.preventDefault();                 // evita que recargue la página
  modal.style.display = "flex";       // abre el modal
  menu.classList.remove('nav__menu--show'); // cierra el menú hamburguesa
  toggle.textContent = '☰';           // vuelve el icono a hamburguesa
});
