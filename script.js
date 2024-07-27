
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


}, 400))


window.addEventListener('scroll', animateMyEduUp = ()=>{
  let myEdu = document.querySelector('.my-edu')
  let windowHeight = window.innerHeight;
  let contHowMuchFromTop = myEdu.getBoundingClientRect().top;
  let startShowing = 80;


  if(contHowMuchFromTop < windowHeight - startShowing){
    myEdu.classList.add("animateMyEduUp")
  }else{
    myEdu.classList.remove("animateMyEduUp")
  }
})

window.addEventListener('scroll', animateMyHero = ()=>{
  let heroPhoto = document.querySelector('.hero-photo')
  let windowHeight = window.innerHeight;
  let contHowMuchFromTop = heroPhoto.getBoundingClientRect().top;
  let startShowing = 80;


  if(contHowMuchFromTop < windowHeight - startShowing){
    heroPhoto.classList.add("animateMyEduUp")
  }else{
    heroPhoto.classList.remove("animateMyEduUp")
  }
})


// MANY PHOTO CONTAINER
// first container
window.addEventListener('scroll', animateMyHero = ()=>{
  let imgOne = document.querySelector('#img-1')
  let imgTwo = document.querySelector('#img-2')
  let imgThree = document.querySelector('#img-3')
  let imgFour = document.querySelector('#img-4')
  let firstManyCont = document.querySelector('.first-many-photo-cont')
  let windowHeight = window.innerHeight;
  let contHowMuchFromTop = firstManyCont.getBoundingClientRect().top;
  let startShowing = 80;


  if(contHowMuchFromTop < windowHeight - startShowing){
    firstManyCont.classList.add("manyPhotoAnimationFirst")
    imgOne.classList.add("manyPhotoAnimationFirst")
    imgTwo.classList.add("manyPhotoAnimationFirst")
    imgThree.classList.add("manyPhotoAnimationFirst")
    imgFour.classList.add("manyPhotoAnimationFirst")
  }else{
    firstManyCont.classList.remove("manyPhotoAnimationFirst")
    imgOne.classList.remove("manyPhotoAnimationFirst")
    imgTwo.classList.remove("manyPhotoAnimationFirst")
    imgThree.classList.remove("manyPhotoAnimationFirst")
    imgFour.classList.remove("manyPhotoAnimationFirst")
  }
})

// second container
window.addEventListener('scroll', animateMyHero = ()=>{
  let imgOne = document.querySelector('#img-5')
  let imgTwo = document.querySelector('#img-6')
  let imgThree = document.querySelector('#img-7')
  let imgFour = document.querySelector('#img-8')
  let firstManyCont = document.querySelector('.second-many-photo-cont')
  let windowHeight = window.innerHeight;
  let contHowMuchFromTop = firstManyCont.getBoundingClientRect().top;
  let startShowing = 80;


  if(contHowMuchFromTop < windowHeight - startShowing){
    firstManyCont.classList.add("manyPhotoAnimationSecond")
    imgOne.classList.add("manyPhotoAnimationSecond")
    imgTwo.classList.add("manyPhotoAnimationSecond")
    imgThree.classList.add("manyPhotoAnimationSecond")
    imgFour.classList.add("manyPhotoAnimationSecond")
  }else{
    firstManyCont.classList.remove("manyPhotoAnimationSecond")
    imgOne.classList.remove("manyPhotoAnimationSecond")
    imgTwo.classList.remove("manyPhotoAnimationSecond")
    imgThree.classList.remove("manyPhotoAnimationSecond")
    imgFour.classList.remove("manyPhotoAnimationSecond")
  }
})


// ABOUT ME CONTAINER

window.addEventListener('scroll', animateMyEduUp = ()=>{
  let myEdu = document.querySelector('.photo')
  let windowHeight = window.innerHeight;
  let contHowMuchFromTop = myEdu.getBoundingClientRect().top;
  let startShowing = 90;


  if(contHowMuchFromTop < windowHeight - startShowing){
    myEdu.classList.add("animate-about-me-photo")
  }else{
    myEdu.classList.remove("animate-about-me-photo")
  }
})

window.addEventListener('scroll', animateMyEduUp = ()=>{
  let myEdu = document.querySelector('.text-content')
  let windowHeight = window.innerHeight;
  let contHowMuchFromTop = myEdu.getBoundingClientRect().top;
  let startShowing = 90;


  if(contHowMuchFromTop < windowHeight - startShowing){
    myEdu.classList.add("animate-about-me-text")
  }else{
    myEdu.classList.remove("animate-about-me-text")
  }
})