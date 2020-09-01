'use strict';

// js 58. show navbar with scrolling. make navbar transparnet when it is on the top


const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll',()=>{
    if (window.scrollY>navbarHeight) {
        navbar.classList.add('navbar--dark');
        
    } else {
        
        navbar.classList.remove('navbar--dark');
    }
});