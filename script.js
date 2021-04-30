/*=====MENU SHOY Y HIDDEN====*/
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav_close');

//SHOW
toggleMenu.addEventListener('click',function(){
    navMenu.classList.toggle('show');
})

//HIDDEN
closeMenu.addEventListener('click',function(){
    navMenu.classList.remove('show');
})

//REMOVE MENU

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction));

//SCROLL SECTION ACTIVE LINK 

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive);

