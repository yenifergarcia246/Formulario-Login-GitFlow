function iniciarSesion() {
  let usuario = document.getElementById("usuario").value.trim();
  let contrasena = document.getElementById("contrasena").value.trim();

  // Validar campos vacíos
  if (usuario === "" || contrasena === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Validar longitud del usuario
  if (usuario.length < 4) {
    alert("El usuario debe tener al menos 4 caracteres.");
    return;
  }

  // Validar formato del usuario (solo letras y números)
  let formatoUsuario = /^[a-zA-Z0-9]+$/;
  if (!formatoUsuario.test(usuario)) {
    alert("El usuario solo puede contener letras y números.");
    return;
  }

  if (contrasena.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  // Validar que tenga al menos un número
  if (!/\d/.test(contrasena)) {
    alert("La contraseña debe incluir al menos un número.");
    return;
  }

  // Validar que tenga al menos una letra
  if (!/[a-zA-Z]/.test(contrasena)) {
    alert("La contraseña debe incluir al menos una letra.");
    return;
  }

  // Si todo está correcto
  alert("Inicio de sesión exitoso ✅");
}

function verContrasena() {
  let input = document.getElementById("contrasena");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}


