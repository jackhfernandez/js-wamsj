var button = document.getElementById('enviar');
var tel = document.getElementById('telefono');
var msj = document.getElementById('mensaje');

button.addEventListener('click', function () {
    if (validateForm()) {
        if (confirm('Enviaras un mensaje\n Estas seguro?')) {
            let url;
            number = code.value + tel.value;
            url = 'https://api.whatsapp.com/send?phone' + number + '&text' + msj.value;
            window.open(url);
        }
    }
});

tel.addEventListener('change', onChange);
msj.addEventListener('change', oncancel);

function validateForm() {
    let x = document.forms['form']['code'].value
    let y = document.forms['form']['telefono'].value
    let z = document.forms['form']['mensaje'].value

    if ((x == '') || (y == '') || (z == '')) {
        alert('LLenar todos los campos')
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