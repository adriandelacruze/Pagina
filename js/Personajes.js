let chefs = ["Escoffier", "Ferran Adrià", "Julia Child", "Joël Robuchon"];
 
function mostrarChefs() {
    let lista = "";
    for (let i = 0; i < chefs.length; i++) {
        lista += "- " + chefs[i] + "\n";
    }
    document.getElementById("resultado-array").textContent =
        "Chefs en la lista (" + chefs.length + "):\n" + lista;
}
 
function añadirChef() {
    let nuevoChef = document.getElementById("inputChef").value;
    if (nuevoChef === "") {
        alert("Escribe el nombre del chef primero.");
        return;
    }
    chefs.push(nuevoChef);
    document.getElementById("inputChef").value = "";
    mostrarChefs();
}
 
function eliminarUltimo() {
    if (chefs.length === 0) {
        alert("La lista ya está vacía.");
        return;
    }
    let eliminado = chefs.pop();
    mostrarChefs();
    document.getElementById("resultado-array").textContent +=
        "\n(Se eliminó: " + eliminado + ")";
}
 
function buscarYEliminar() {
    let nombre = document.getElementById("inputBuscar").value;
    let posicion = chefs.indexOf(nombre);
 
    if (posicion === -1) {
        alert("No se encontró el chef: " + nombre);
    } else {
        chefs.splice(posicion, 1);
        document.getElementById("inputBuscar").value = "";
        mostrarChefs();
        document.getElementById("resultado-array").textContent +=
            "\n(Se eliminó '" + nombre + "' de la posición " + posicion + ")";
    }
}

mostrarChefs();