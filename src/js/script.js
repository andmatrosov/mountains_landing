let layers = document.querySelectorAll('.bg-wrapper');
let speed;
window.addEventListener('scroll', () => {
  let pageTop = window.scrollY;

  layers.forEach((e) => {
    if (e.hasAttribute('data-speed')) {
      speed = e.getAttribute('data-speed');
      let yPos = -(pageTop * speed) / 100;
      e.setAttribute('style', `transform: translate3d(0px, ${yPos}px, 0px)`);
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
