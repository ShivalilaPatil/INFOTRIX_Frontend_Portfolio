// active link for responsive nav bar

const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav_header = document.querySelector(".header-1");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());
