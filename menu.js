let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial';
  menuSection.classList.toggle('on', show); //O toggle observa se tem o "on" caso não tenha ele adiciona e vice versa
  show = !show;
});
