
let menu = document.querySelector('#menu-icon')
let menucontainer = document.querySelector('.menu-container')


let check = 0;
function myfunction() {
  if (check == 0) {
    menucontainer.style.display = "block"
    menucontainer.style.position = "fixed"
    menucontainer.classList.add("open-menuContainer")
    check = 1;
  } else {

    menucontainer.classList.remove("open-menuContainer")
    menucontainer.style.display = "none"

    check = 0;
  }

  let isopen = menucontainer.classList.contains("open-menuContainer");
  menu.classList = isopen ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'


}

menu.addEventListener('click', myfunction)

var i = 0;
var txt;
let isThisText = true;

function typeWriter() {


  if (isThisText == true) {
    txt = "Frontend Web Developer";
  } else if (isThisText == false) {
    txt = "Web Designer";

  }



  if (i < txt.length) {
    document.getElementById("web-developer").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 300);
  } else {
    i = 0;
    isThisText = !isThisText;
    document.getElementById("web-developer").innerHTML = '';
    setTimeout(typeWriter, 300);
  }
}
typeWriter();
