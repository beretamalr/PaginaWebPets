function inicioSesion() {
    var usuario = document.getElementById("username").value;
    var contrasena = document.getElementById("password").value;
    while (true) {
        //Limpia el anterior texto generado
        document.getElementById("errorDos").textContent = "";
        document.getElementById("errorUser").textContent = "";
        document.getElementById("errorContra").textContent = "";
        if (usuario === "" && contrasena === "") {
            document.getElementById("errorDos").textContent = "Por favor, ingrese su nombre de usuario y contraseña";
            return false; // Evitar el envío del formulario
        
        } else if (usuario === "") {
            document.getElementById("errorUser").textContent = "Por favor, ingrese su nombre de usuario";
            return false; // Evitar el envío del formulario

        } else if (contrasena === "") {
            document.getElementById("errorContra").textContent = "Por favor, ingrese su contraseña";
            return false; // Evitar el envío del formulario

        } else {
            alert("Inicio de sesión exitoso");
            return true; // Permitir el envío del formulario
        }
    }
}