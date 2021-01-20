// theme functionalities
const themeToggleBtn = document.querySelector(".themeToggle");
const daySphere = document.querySelector(".day-sphere");
const nightSphere = document.querySelector(".night-sphere")
const root = document.documentElement;

themeToggleBtn.addEventListener("click", function(e){
    if(daySphere.classList.contains("slide-right")){
        daySphere.classList.remove("slide-right");
        nightSphere.classList.remove("show-night");
        
        root.style.setProperty(`--primary-color`, "var(--primary-color-light)");
        root.style.setProperty(`--secondary-color`, "var(--secondary-color-light)");
        root.style.setProperty(`--menu-color`, "var(--menu-color-light)");
        root.style.setProperty(`--navbar-color`, "var(--navbar-color-light)");
        root.style.setProperty(`--head-color`, "var(--head-color-light)");
        root.style.setProperty(`--toggle-color`, "var(--toggle-color-light)");
        root.style.setProperty(`--head-header-color`, "var(--head-header-color-light)");
        
    }else{
        daySphere.classList.add("slide-right");
        nightSphere.classList.add("show-night");
        
        root.style.setProperty(`--primary-color`, "var(--primary-color-dark)");
        root.style.setProperty(`--secondary-color`, "var(--secondary-color-dark)");
        root.style.setProperty(`--menu-color`, "var(--menu-color-dark)");
        root.style.setProperty(`--navbar-color`, "var(--navbar-color-dark)");
        root.style.setProperty(`--head-color`, "var(--head-color-dark)");
        root.style.setProperty(`--toggle-color`, "var(--toggle-color-dark)");
        root.style.setProperty(`--head-header-color`, "var(--head-header-color-dark)");
        
    }
})

// Nav functionalities
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector("#navbar");


navBtn.addEventListener("click", function(){
    nav.classList.toggle("show");
})