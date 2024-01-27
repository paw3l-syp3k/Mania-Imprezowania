const hamburgerIcon = document.querySelector('.hamburger');
const menuContainer = document.querySelector('.wrapper-1-header-menu');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
});
