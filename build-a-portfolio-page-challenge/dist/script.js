let links = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navigation");

// Check I linked it up correctly
console.log('script.js online')

let isClicked = () => {
  navbar.click();
};

let shadowOn = () => {
  if (isClicked === true) {
    navbar.setAttribute("shadow");
  }
};
shadowOn();

// Navigation Bar - Bold Navbar after scrolling snippet
// // callback function to be run whenever threshold is crossed in one direction or the other
// const callback = (entries, observer) => {
//   const entry = entries[0];
  
//   // toggle class depending on if content div intersects with viewport
//   const navBar = document.querySelector('.navbar-fixed-top');
//   navBar.classList.toggle('navbar-fixed-top--scrolled', !entry.isIntersecting);
// }

// // options controls circumstances under which the observer's callback is invoked
// const options = {
//   // no root provided - by default browser viewport used to check target visibility
//   // only detect if target element is fully visible or not
//   threshold: [1]
// };

// const io = new IntersectionObserver(callback, options);

// // observe content div 
// const target = document.querySelector('.content');
// io.observe(target);

const callback = (entries, observer) => {
  const entry = entries[0];
  const navBar = document.querySelector('.navbar');
  navBar.classList.toggle('nav--scrolled', !entry.isIntersecting);
}
const options = {
  // rootMargin: "-60px 0px 0px 0px",
  threshold: [0]
};

const io = new IntersectionObserver(callback, options)
const target = document.querySelector('.welcome-h1')
io.observe(target)