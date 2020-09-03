/*  I numberd the codes to connect to the other code.
 so you can find 'js 72' at JS file if you see 'js 72' at CSS or HTML file. 
*/

"use strict";

// js 58. show navbar with scrolling. make navbar transparnet when it is on the top

document.addEventListener("scroll", () => {
  const navbar = document.querySelector("#navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;

  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// js 70. project button animation

// projectContainer.classList.add('anim-out');

// setTimeout(() => {
//     projectContainer.classList.remove('anim-out');
// }, 300);

// js 72. select the next selection and remove selection from the previous item

window.addEventListener("click", (e) => {
  const active = document.querySelector(".category__btn.selected");

  if (active != null) {
    active.classList.remove("selected");
  }
  e.target.classList.add("selected");
});

// js 90. Show "arrow up" button when scrolling down

document.addEventListener("scroll", () => {
  const arrowUp = document.querySelector(".arrow-up");
  const homeHeight = home.getBoundingClientRect().height;

  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
