var formularioRegistro = document.getElementById('form')
var confirmPassword = document.getElementById('confirm_password');

formularioRegistro.addEventListener("sumbit", async function(event) {
    

});

formularioRegistro.addEventListener('sumbit', async function(e) {
    e.preventDefault();

    const username = getElementById('name').value;
    const password = getElementById('contraseña').value;
    const email = getElementById('email').value;

    const response = await fetch('http//localhost:4000/registro', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({ username, password})
        });

    const result = await
    response.text();
    alert(result);

});