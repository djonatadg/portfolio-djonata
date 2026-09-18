const header = document.getElementById("header");

function updateHeader() {
  if (window.scrollY > 28) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);
updateHeader();


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  observer.observe(element);
});


const heroVisual = document.querySelector(".hero-visual");

if (
  heroVisual &&
  window.matchMedia("(pointer: fine)").matches
) {
  window.addEventListener("mousemove", event => {
    const x =
      (event.clientX / window.innerWidth - 0.5) * 6;

    const y =
      (event.clientY / window.innerHeight - 0.5) * 6;

    heroVisual.style.transform =
      `translate3d(${x}px, ${y}px, 0)`;
  });
}