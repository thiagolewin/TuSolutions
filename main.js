const inicio = document.querySelector("#Inicio");
const navbar = document.querySelector("nav")
const tarjeta = document.querySelectorAll(".tarjeta");
inicio.style.height = `${window.innerHeight-navbar.clientHeight}px`;
window.addEventListener("scroll",()=>{
    if (window.scrollY > window.innerHeight/1.8) {
        tarjeta.forEach((t)=> {
            t.style.display = "flex"
        })
    }
})
