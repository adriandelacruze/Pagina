function saludar() {
    let nombre = document.getElementById("inputNombre").value;
 
    if (nombre === "") {
        document.getElementById("resultado-saludo").textContent = "Por favor, escribe tu nombre.";
    } else {
        document.getElementById("resultado-saludo").textContent = "¡Bienvenido a Mundo Gastronómico, " + nombre + "!";
    }
}
 
function cambiarFondo() {
    let main = document.querySelector("main");
    let estado = document.getElementById("btnFondo").dataset.estado || "normal";
 
    if (estado === "normal") {
        main.style.backgroundColor = "#fde8df";
        document.getElementById("btnFondo").dataset.estado = "cambiado";
        document.getElementById("btnFondo").textContent = "Restaurar fondo";
    } else {
        main.style.backgroundColor = "#f9f9f9";
        document.getElementById("btnFondo").dataset.estado = "normal";
        document.getElementById("btnFondo").textContent = "Cambiar fondo";
    }
}