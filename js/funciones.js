// Cafe Andino - formulario

const formulario = document.getElementById("form-pedido");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const cafe = document.getElementById("cafe").value.trim();
    const cantidad = Number(document.getElementById("cantidad").value);

    if (nombre.length < 3){
        alert("Escribe tu nombre completo (minimo 3 letras).");
        return;
    }

    if (correo.includes("@") || !correo.includes(".")) {
        alert("Escribe un correo valido.");
        return;
    }

    if (cantidad < 1 || cantidad > 20){
        alert("La cantidad debe estar entre 1 y 20 bolsas.");
        return;
    }

    alert(
        "¡Gracias, " + nombre + "!\n" +
        "¡Pedido: " + cantidad + "bolsa(s) de " + cafe + ".\n" +
        "Te escribiremos a " + correo + " para confirmar"
    );

    formulario.reset();

})
