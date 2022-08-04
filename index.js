  
  function confirmPassword() {
    var pw = document.getElementById("contrasena").value;
    var pwc = document.getElementById("confirmacion");
    var btn = document.getElementById("registrar");
  
    if (pw == pwc.value) {
      document.getElementById("pwc-msj").innerHTML =
        "¡Correcto! Las contraseñas coinciden.";
      document.getElementById("pwc-msj").classList.add("green");
      if (verifyPassword()){
        btn.disabled = false;
      }else btn.disabled = true;
      return;
    } else {
      document.getElementById("pwc-msj").innerHTML =
        "* Su contraseña no coincide. Intente de nuevo.";
      pwc.focus();
      pwc.value = "";
      document.getElementById("pwc-msj").classList.add("red");
      btn.disabled = true;
      return false;
    }
  }
  
  function sendRegister() {
      var nombre = document.getElementById("nombre");
  
      alert("¡Gracias " + nombre.value  + "! Tu registro fue exitoso.");
  }
  