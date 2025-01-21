var asociate = document.getElementById('boton-asociate');
var horarios = document.getElementById('boton-horarios');
var formularioRegistro = document.getElementById('form')
var password = document.getElementById('contraseña');
var confirmPassword = document.getElementById('confirm_password');


asociate.addEventListener('click', function (e) {
    window.location.href = "./registro.html";
});



horarios.addEventListener('click',function openModal ()   {
    document.getElementById('modal').style.display = 'flex';
});
function closeModal () {
    document.getElementById('modal').style.display = 'none';
};

formularioRegistro.addEventListener("sumbit", function(event) {
    let email = document.getElementById('e-mail').value;
    if (!e-mail.includes("@")) {
        alert("Porfavor ingrese un correo valido.");
        event.preventDefault();
    }

});

formularioRegistro.addEventListener('sumbit', function(event) {
    if (password !== confirmPassword) {
        alert ("Las contraseñas no coinciden");
        event.preventDefault();
    }
});
