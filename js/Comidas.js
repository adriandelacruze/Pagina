function recogerValoresForm() {
    let inputs = document.querySelectorAll(".campo-plato");
    let resultado = "";
 
    for (let i = 0; i < inputs.length; i++) {
        let valor = inputs[i].value;
        if (valor !== "") {
            resultado += "- " + valor + "\n";
        }
    }
 
    if (resultado === "") {
        document.getElementById("resultado-platos").textContent =
            "No has escrito ningún plato.";
    } else {
        document.getElementById("resultado-platos").textContent =
            "Tus platos favoritos:\n" + resultado;
    }
}
 
function valorarPlato() {
    let nota = parseInt(document.getElementById("inputNota").value);
    let mensaje = "";
 
    if (isNaN(nota)) {
        mensaje = "Escribe una nota numérica del 1 al 10.";
    } else if (nota >= 8) {
        mensaje = "¡Excelente plato! (" + nota + "/10)";
    } else if (nota >= 5) {
        mensaje = "Plato aceptable. (" + nota + "/10)";
    } else {
        mensaje = "Plato mejorable. (" + nota + "/10)";
    }
 
    document.getElementById("resultado-valoracion").textContent = mensaje;
}