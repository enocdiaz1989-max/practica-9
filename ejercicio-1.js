
const tieneLongitudValida = (password) => password.length >= 8;

function registrarUsuario(usuario, password) {
    if (tieneLongitudValida(password)) {
        return `Registro exitoso para ${usuario}`;
    } else {
        return "Error: La contraseña es demasiado corta";
    }
}

console.log(registrarUsuario("Carlos", "1234"));
console.log(registrarUsuario("Maria", "Clave123"));
