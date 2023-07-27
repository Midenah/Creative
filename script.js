let menu =document.querySelector('#menu');
let nav =document.querySelector('header ul');

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    nav.classList.toggle("open");
}