let menu = document.querySelector('#menubar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  
}
function loader() {
  document.querySelector('.loader').classList.add('fade-out');
}
function fadeout(){
   setInterval(loader, 3000);
}
window.onload = fadeout();