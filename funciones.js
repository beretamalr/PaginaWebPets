function inicioSesion() {
    var usuario = document.getElementById("username").value;
    var contrasena = document.getElementById("password").value;
    while (true) {
        //Limpia el anterior texto generado
        document.getElementById("errorDos").textContent = "";
        document.getElementById("errorUser").textContent = "";
        document.getElementById("errorContra").textContent = "";
        if (usuario == "" && contrasena == "") {
            document.getElementById("errorDos").textContent = "Por favor, ingrese su nombre de usuario y contraseña";
            return false; // Evitar el envío del formulario
        
        } else if (usuario == "") {
            document.getElementById("errorUser").textContent = "Por favor, ingrese su nombre de usuario";
            return false; // Evitar el envío del formulario

        } else if (contrasena == "") {
            document.getElementById("errorContra").textContent = "Por favor, ingrese su contraseña";
            return false; // Evitar el envío del formulario

        } else if (contrasena != "1234") {
            document.getElementById("errorContra").textContent = "Contraseña incorrecta";
            document.getElementById("password").select();
            return false; // Evitar el envío del formulario

        } else if (usuario != "admin") {
            document.getElementById("errorUser").textContent = "Usuario incorrecto";
            document.getElementById("username").select();
            return false; // Evitar el envío del formulario
            
        } else if (usuario != "admin" && contrasena != "1234") {
            document.getElementById("errorDos").textContent = "Usuario y contraseña incorrectos";
            return false; // Evitar el envío del formulario

        } else {
            alert("Inicio de sesión exitoso");
            return true; // Permitir el envío del formulario
        }
    }
}