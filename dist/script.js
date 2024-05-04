let links = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navigation");

// Check I linked it up correctly
console.log("script.js online");

// Apply a Solid BG Color to header
const callback = (entries, observer) => {
  const entry = entries[0];
  const navBar = document.querySelector(".navbar");
  navBar.classList.toggle("nav--scrolled", !entry.isIntersecting);
};
const options = {
  // rootMargin: "-60px 0px 0px 0px",
  threshold: [0],
};

const io = new IntersectionObserver(callback, options);
const target = document.querySelector(".row-welcome");
io.observe(target);
