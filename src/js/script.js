let layers = document.querySelectorAll('.bg-wrapper');
let speed;
window.addEventListener('scroll', () => {
  let pageTop = window.scrollY;

  layers.forEach((e) => {
    if (e.hasAttribute('data-speed')) {
      speed = e.getAttribute('data-speed');
      let yPos = -(pageTop * speed) / 100;
      if (pageTop >= 0) {
        e.setAttribute('style', `transform: translate3d(0px, ${yPos}px, 0px)`);
      }
    }
  });
});

window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  let menuItem = document.querySelectorAll('.scroll-nav__item');

  document
    .querySelectorAll('.home, .main-content__item')
    .forEach((el, index) => {
      if (el.offsetTop <= scrollDistance) {
        menuItem.forEach((el) => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });
        menuItem[index].classList.add('active');
        console.log('Переключение');
      }
    });
});

// Side menu
let openMenu = document.querySelector('.home__burger');
let closeMenu = document.querySelector('.side-menu__close');
let menu = document.querySelector('.side-menu');

openMenu.addEventListener('click', () => {
  if (!menu.classList.contains('side-menu--active')) {
    menu.classList.add('side-menu--active');
  }
});

closeMenu.addEventListener('click', () => {
  if (menu.classList.contains('side-menu--active')) {
    menu.classList.remove('side-menu--active');
  }
});

// Footer lists
let footerlists = document.querySelectorAll('.footer__list');
footerlists.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('active');
  });
});
