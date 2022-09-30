
function seleccionar(link) {
    let opciones = document.querySelectorAll(".navbar a");
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // Hago desaparecer el menu una vez que se ha seleccionado una opción en el modo responsive
    let x = document.getElementsById("nav");
    x.className = "";
}

// Muestra el menu responsive
function responsiveMenu() {
    let x = document.getElementById("nav");

    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}