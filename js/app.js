const offerMenu = document.querySelector('.wrapper-1-menu');
const offerBtns = document.querySelectorAll('.wrapper-1-menu-btn');
const offerBoxes = document.querySelectorAll('.wrapper-1-box');

offerMenu.addEventListener('click', (e) => {
  let id = e.target.id;
  if (e.target.classList.contains('wrapper-1-menu-btn')) {
    offerBoxes.forEach((b) => {
      b.classList.remove('box-hidden');
      if (!b.classList.contains(id)) {
        b.classList.add('box-hidden-animation');
        b.addEventListener(
          'animationend',
          () => {
            b.classList.remove('box-hidden-animation');
            b.classList.add('box-hidden');
          },
          { once: true }
        );
        //b.classList.add('box-hidden');
      }
    });
  }
  offerBtns.forEach((btn) => {
    btn.classList.remove('btn-active');
  });
  e.target.classList.add('btn-active');
});
