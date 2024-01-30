const hamburgerIcon = document.querySelector('.hamburger');
const menuContainer = document.querySelector('.wrapper-1-header-menu');
const menuItems = document.querySelectorAll('.wrapper-1-menu-item');

const menuMobile = () => {
  hamburgerIcon.classList.toggle('active');
  menuContainer.classList.toggle('show-menu-mobile');
};

hamburgerIcon.addEventListener('click', menuMobile);
menuItems.forEach((item) => {
  item.addEventListener('click', menuMobile);
});
