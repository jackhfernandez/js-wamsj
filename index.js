var button = document.getElementById("registrar");
var tel = document.getElementById("telefono");
var msj = document.getElementById("mensaje");

button.addEventListener("click", function () {
  if (validateForm()) {
    if (confirm("Enviarás un mensaje\n ¿Estás seguro?")) {
      let url;
      number = code.value + tel.value;
      url = "https://api.whatsapp.com/send?phone=" + number + "&text=" + msj.value;
      window.open(url);
    }
  } 
});

tel.addEventListener("change", onChange);
msj.addEventListener("change", onChange);

function validateForm() {
  let x = document.forms["form"]["code"].value;
  let y = document.forms["form"]["telefono"].value;
  let z = document.forms["form"]["mensaje"].value;

  if ((x == "") || (y == "") || (z == "")) {
    alert("Llenar campos");
    button.disabled = true;
    return false;
  } else {
    onChange();
    return true;
  }
}

function onChange() {
  button.disabled = false;
  return;
}
