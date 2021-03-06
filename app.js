console.log(window.innerWidth);

// PAGE THEMES
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
        root.style.setProperty(`--input-text-color`, "var(--input-text-color-light)");        
        root.style.setProperty(`--input-border-color`, "var(--input-border-color-light)");
        root.style.setProperty(`--input-focus-color`, "var(--input-focus-color-light)");
        root.style.setProperty(`--general-code-color`, "var(--general-code-color-light)");          
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
        root.style.setProperty(`--input-text-color`, "var(--input-text-color-dark)");    
        root.style.setProperty(`--input-border-color`, "var(--input-border-color-dark)");
        root.style.setProperty(`--input-focus-color`, "var(--input-focus-color-dark)");        
        root.style.setProperty(`--general-code-color`, "var(--general-code-color-dark)");        
        
    }
})

////////////////////////////////////////////////////////////////////////////////////// 
// HEADER

// Nav functionalities
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector("#navbar");


navBtn.addEventListener("click", function(){
    nav.classList.toggle("show");
})

// Header and Main Section Separation

const header = document.querySelector(".header");
const headerHeight = header.clientHeight;

const mainDoc = document.querySelector(".bottom-part");

mainDoc.style.paddingTop = `${headerHeight}px`;


////////////////////////////////////////////////////////////////////////////////////// 
//MAIN SECTION

// Intro

const introExBtn = document.querySelector(".intro-ex-btn");

introExBtn.addEventListener("click", function(){
    alert("Hello World!")
})


// Output

function doIt() {
    var headID = document.getElementsByTagName("head")[0];
    var newScript = document.createElement("script");
    newScript.type = "text/javascript";
    newScript.innerHTML = document.getElementById("code-input").value;
    headID.appendChild(newScript);
}

const codeInput = document.querySelector(".code-input");
const codeInputBtn = document.querySelector(".code-input-btn");

codeInputBtn.addEventListener(`click`, function(){
    doIt();
})

// Scroll

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((e)=>{
    e.addEventListener("click", (l)=>{
        l.preventDefault();

        const id = l.currentTarget.getAttribute('href').slice(1);
        const section = document.getElementById(id);

        window.scroll({
            top: section.offsetTop - headerHeight,
            behavior: 'smooth',
        });

    })
})

// Nav

if(window.innerWidth < 800){
    navLink.forEach((e)=>{
        e.addEventListener("click", ()=>{
            nav.classList.toggle("show");
        })
    })
}