let links = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navigation");

let isClicked = () => {
  navbar.click();
};

let shadowOn = () => {
  if (isClicked === true) {
    navbar.setAttribute("shadow");
  }
};
shadowOn();