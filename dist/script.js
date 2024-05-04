let links = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navigation");
let modal = document.getElementById("contact-modal");
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

// Keyboard Shortcut - Contact me Modal
const showModal = () => {
  modal.style.display = "block";
};
const hideModal = () => {
  modal.style.display = "none";
};
const cPress = document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "c") {
    modal.showModal();
    console.log(e);
  }
  
});
