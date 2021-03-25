let layers = document.querySelectorAll('.bg-wrapper');
let speed;
window.addEventListener('scroll', () => {
  let pageTop = window.scrollY;

  layers.forEach((e) => {
    if (e.hasAttribute('data-speed')) {
      speed = e.getAttribute('data-speed');
      console.log(speed);
      let yPos = -(pageTop * speed) / 100;
      console.log(pageTop, yPos);
      e.setAttribute('style', `transform: translate3d(0px, ${yPos}px, 0px)`);
    }
  });
});
