
let createImgCont = document.querySelector('.createImgCont')
let developertext = document.querySelector(".developer-text")
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

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  }
}

let arr = [
    "images/rpa.png",
    "images/unesco.png",
    "images/amazon.png",
    "images/rock_paper.png",
    "images/cutie.jpg",
    "images/dice_rolling.png",
    "images/calculator.png",
    "images/tic-tak-toe.png",

]

developertext.addEventListener('mousemove', throttleFunction((dets) => {
   
  let random = Math.floor(Math.random()*8)
  console.log(random)

  let div = document.createElement("div");
  div.classList.add("imageDiv")
  div.style.left = dets.x + "px";
  div.style.top =  "100px";

   createImgCont.insertAdjacentElement('beforebegin', div);
  
  let img = document.createElement("img")
  img.setAttribute("src", arr[random])
  div.appendChild(img);
  img.classList.add("animate")
  setTimeout(function(){
    div.remove();
  },1600)


}, 300))
