let body = document.querySelector("body");
let darklight = document.getElementById("darklight");

darklight.addEventListener("click", () => {
  body.classList.toggle("darklight");
  if (body.className === "darklight") {
    darklight.className = "bx bx-sun";
  } else {
    darklight.className = "bx bx-moon";
  }
});

window.addEventListener("scroll", () => {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("stiky", window.scrollY > 85);
  let scroll = document.querySelector(".scroll");
  scroll.classList.toggle("displayScroll", window.scrollY > 40);
});

function checkPricingInput(e) {
  e.classList.toggle("clickPricingInput");
}

document.querySelector(".scroll").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
