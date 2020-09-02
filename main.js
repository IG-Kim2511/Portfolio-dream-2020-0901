/*  I numberd the codes to connect to the other code.
 so you can find 'js 72' at JS file if you see 'js 72' at CSS or HTML file. 
*/

"use strict";

// js 58. show navbar with scrolling. make navbar transparnet when it is on the top

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
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
