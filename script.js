let menu =document.querySelector('#menu');
let nav =document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("open");
}