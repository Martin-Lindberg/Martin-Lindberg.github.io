let navbar = document.getElementById("navbar");
let hero = document.getElementById("hero") || document.getElementById("hero-project");

document.addEventListener('scroll', function(e) {
  hero.style.backgroundPositionY = `${window.scrollY*0.5}px`;
  navbar.style = `opacity: ${(4.0*window.scrollY)/window.innerHeight}`;
});
