const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('nav__menu--show');
  toggle.textContent = isOpen ? '✕' : '☰';
});