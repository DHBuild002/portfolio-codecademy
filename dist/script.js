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
const toggleDisplay = () => {
  if (modal.open) {
    modal.close();
  } else {
    modal.showModal();
  }
};
const shortcutToOpen = (event) => {
  if (event.key == "c") {
    event.preventDefault();
    toggleDisplay();
  }
};

// Handle the initial KeyPress Event
document.addEventListener("keydown", shortcutToOpen);

const shortcutToClose = (event) => {
  if (event.key === "c" && modal.open) {
    modal.close();

    // Remove the Event listener to return us back to original state in the document
    document.removeEventListener("keydown", shortcutToClose);
  }
};

// Handle the close event
document.addEventListener("keydown", shortcutToClose);
