function mostrarSiglos() {
    let siglos = ["Edad Antigua", "Edad Media", "Renacimiento", "Siglo XIX", "Siglo XX", "Actualidad"];
    let resultado = "";
 
    for (let i = 0; i < siglos.length; i++) {
        resultado += (i + 1) + ". " + siglos[i] + "\n";
    }
 
    document.getElementById("resultado-bucle").textContent = resultado;
}

function contarAnios() {
    let anioInicio = 1900;
    let anioActual = 2026;
    let contador = anioInicio;
    let decadas = "";
 
    while (contador <= anioActual) {
        decadas += "Década " + contador + "s  ";
        contador += 10;
    }
 
    document.getElementById("resultado-while").textContent = decadas;
}