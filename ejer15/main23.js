function append() {
    var opcion = document.querySelector("#form1").value;
    var elemento = document.querySelector("#pantalla").value;
    alert(opcion);
    if (opcion == "ordenada") {
        document.querySelector("#l1").appendChild(elemento);
    }
    else if (opcion == "desordenada") {
        document.querySelector("#l2").appendChild(elemento);
    }
    else {
        alert('elija una opcion valida');
    }
}