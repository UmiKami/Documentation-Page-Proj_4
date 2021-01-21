// theme functionalities
const themeToggleBtn = document.querySelector(".themeToggle");
const daySphere = document.querySelector(".day-sphere");
const nightSphere = document.querySelector(".night-sphere")
const root = document.documentElement;

function changeCSS(cssFile, cssLinkIndex) {

    let oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    let newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

themeToggleBtn.addEventListener("click", function(e){
    if(daySphere.classList.contains("slide-right")){
        daySphere.classList.remove("slide-right");
        nightSphere.classList.remove("show-night");

        changeCSS(`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/a11y-light.min.css`, 1)
        
        root.style.setProperty(`--primary-color`, "var(--primary-color-light)");
        root.style.setProperty(`--secondary-color`, "var(--secondary-color-light)");
        root.style.setProperty(`--menu-color`, "var(--menu-color-light)");
        root.style.setProperty(`--navbar-color`, "var(--navbar-color-light)");
        root.style.setProperty(`--head-color`, "var(--head-color-light)");
        root.style.setProperty(`--toggle-color`, "var(--toggle-color-light)");
        root.style.setProperty(`--head-header-color`, "var(--head-header-color-light)");
        root.style.setProperty(`--code-bg-color`, "var(--code-bg-color-light)");        
        root.style.setProperty(`--btn-ex-color`, "var(--btn-ex-color-light)");        
    }else{
        daySphere.classList.add("slide-right");
        nightSphere.classList.add("show-night");
        
        changeCSS(`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.5.0/styles/a11y-dark.min.css`, 1)
        
        root.style.setProperty(`--primary-color`, "var(--primary-color-dark)");
        root.style.setProperty(`--secondary-color`, "var(--secondary-color-dark)");
        root.style.setProperty(`--menu-color`, "var(--menu-color-dark)");
        root.style.setProperty(`--navbar-color`, "var(--navbar-color-dark)");
        root.style.setProperty(`--head-color`, "var(--head-color-dark)");
        root.style.setProperty(`--toggle-color`, "var(--toggle-color-dark)");
        root.style.setProperty(`--head-header-color`, "var(--head-header-color-dark)");
        root.style.setProperty(`--code-bg-color`, "var(--code-bg-color-dark)");
        root.style.setProperty(`--btn-ex-color`, "var(--btn-ex-color-dark)");        
        
    }
})

// Nav functionalities
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector("#navbar");


navBtn.addEventListener("click", function(){
    nav.classList.toggle("show");
})

////////////////////////////////////////////////////////////////////////////////////// MAIN SECTION

// intro

const introExBtn = document.querySelector(".intro-ex-btn");

introExBtn.addEventListener("click", function(){
    alert("Hello World!")
})
