const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector("#navbar");


navBtn.addEventListener("click", function(){
    nav.classList.toggle("show");
})