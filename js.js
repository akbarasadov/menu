let menu = document.querySelector(".menu")
let hamburger = document.querySelector(".hamburger")
let button = document.querySelector("button")

hamburger.onclick=()=>{
    menu.classList.add("open")
}
button.onclick=()=>{
    menu.classList.remove("open")
}