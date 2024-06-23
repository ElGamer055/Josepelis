const flecha = document.querySelector(".flecha");
const main = document.querySelector(".main");
const numeroDeItems = main.querySelectorAll("img").length;
let contadorClicks = 0;
    
flecha.addEventListener("click",()=>{
    contadorClicks ++;
    if (numeroDeItems - (6+contadorClicks) >= 0)   {
        main.style.transform = `translateX(${main.computedStyleMap().get("transform")[0].x.value - 300}px)`;
    }else{
        main.style.transform = "translateX(0)";
        contadorClicks=0;
    }
    
})