var myNav = document.getElementById("barra");

window.onscroll = function() {
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
    myNav.classList.add("celestito");
    myNav.classList.remove("bg-transparent");
  } else {
    myNav.classList.remove("celestito");
    myNav.classList.add("bg-transparent");
  }
};




function alerta() {
    alert("Mensaje enviado")
}




//HABILITAR TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))