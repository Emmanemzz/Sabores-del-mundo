var nav;
var navIcon;
window.onload = () => {
    console.log("Documento listo");
    nav = document.querySelector("#mobile-nav");
    navIcon = document.querySelector("#nav-icon");
}

function onMenuClick() {
    nav.classList.toggle("hidden");
    if(nav.classList.contains("hidden")){
        navIcon.src = "assets/images/menu/menu.png";
    }else{
        navIcon.src = "assets/images/menu/close.png"; 
    }
}