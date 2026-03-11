const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

AOS.init({
  duration: 900,
  once: true,
});
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (scrollTop / height) * 100;

  document.querySelector(".progress-bar").style.width = scrolled + "%";
});
