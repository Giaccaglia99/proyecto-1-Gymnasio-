var asociate = document.getElementById('boton-asociate');
var horarios = document.getElementById('boton-horarios');


asociate.addEventListener('click', function (e) {
    window.location.href = "../registro/index.html";
});



horarios.addEventListener('click',function openModal ()   {
    document.getElementById('modal').style.display = 'flex';
});
function closeModal () {
    document.getElementById('modal').style.display = 'none';
};