const asociate = document.getElementById('boton-asociate');
const horarios = document.getElementById('boton-horarios');
const menu = document.querySelector('.header_nav');

document.querySelector('.menuboton').addEventListener('click', function() {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }else {
        menu.style.display = 'block';
    }
});

asociate.addEventListener('click', function (e) {
    window.location.href = "./registro.html";
});

horarios.addEventListener('click',function openModal ()   {
    document.getElementById('modal').style.display = 'flex';
});
function closeModal () {
    document.getElementById('modal').style.display = 'none';
};