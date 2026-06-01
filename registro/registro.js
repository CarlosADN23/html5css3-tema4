function validarPassword() {
    var pass1 = document.getElementById("password1");
    var pass2 = document.getElementById("password2");

    if (pass1.value !== pass2.value) {
        pass2.setCustomValidity("Las passwords deben coincidir");
    } else {
        pass2.setCustomValidity("");
    }
}

function validarFechaYEnviar() {
    var formulario = document.getElementById("registro");
    var fechaInicioInput = document.getElementById("fechaInicio");

    var fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);

    var fechaIni = new Date(fechaInicioInput.value);

    if (formulario.checkValidity()) {
        if (fechaIni < fechaActual) {
            alert("La fecha de inicio debe ser mayor o igual que la actual");
        } else {
            formulario.submit();
        }
    } else {
        formulario.reportValidity();
    }
}

window.onload = function () {
    document.getElementById("password1").oninput = validarPassword;
    document.getElementById("password2").oninput = validarPassword;
    document.getElementById("registro-submit").onclick = validarFechaYEnviar;
};