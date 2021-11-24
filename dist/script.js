const burgerIcon = document.querySelector(".burger-icon");
const navLinks = document.querySelector(".nav-links");
const body = document.getElementsByTagName("body");

burgerIcon.addEventListener("click",()=>{
    if(navLinks.classList.contains("hidden")){
        navLinks.classList.remove("hidden");
        navLinks.classList.add("block");
        navLinks.classList.remove("before:hidden");
        navLinks.classList.add("before:block");
        body[0].classList.add("noScroll");
    }
    else{
        navLinks.classList.add("hidden");
        navLinks.classList.remove("block");
        navLinks.classList.add("before:hidden");
        navLinks.classList.remove("before:block");
        body[0].classList.remove("noScroll");
    }
    
});