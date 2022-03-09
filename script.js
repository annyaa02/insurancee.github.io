const hamburger = document.querySelector(".hamburger");
const navigator = document.querySelector(".container.navigator");
const navPoints = document.querySelector(".nav-points");
hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navPoints.classList.toggle("active");
    navigator.classList.toggle("active");

})

document.querySelectorAll(".nav-point").forEach(n=> n.
addEventListener("click", ()=> {
    hamburger.classList.remove("active")
    navPoints.classList.remove("active")
    navigator.classList.remove("active")
    
})
    )