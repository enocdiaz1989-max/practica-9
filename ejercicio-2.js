
function enviarNotificacionEmail(destinatario, mensaje) {
    console.log(`[EMAIL A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}

function enviarNotificacionSMS(destinatario, mensaje) {
    console.log(`[SMS A: ${destinatario}] -> Mensaje: "${mensaje}"`);
}

function procesarAlerta(usuario, tipoAlerta, callbackElegido) {
    let mensaje;

    if (tipoAlerta === "seguridad") {
        mensaje = "Alerta de seguridad";
    } else {
        mensaje = "Bienvenida al sistema";
    }

    callbackElegido(usuario, mensaje);
}

procesarAlerta("Carlos", "seguridad", enviarNotificacionEmail);
procesarAlerta("Maria", "bienvenida", enviarNotificacionSMS);
