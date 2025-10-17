const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const edad = document.getElementById('edad');
const pais = document.getElementById('pais');
const mensaje = document.querySelector('.mensaje');
const btnGuardar = document.querySelector('.btnGuardar');
var nombreGuardado = localStorage.getItem("nombre");

if(nombreGuardado){
    mensaje.textContent = `Bienvenidos al himalaya persona con nombre de : ${nombreGuardado}`;
}

btnGuardar.addEventListener('click', function() { 
    if(nombre.value === "" || email.value === "" || edad.value === "" || pais.value === "") {
       mensaje.textContent = "rellena los datos";
    }else{
        var nombreValor = nombre.value;
        localStorage.setItem("nombre", nombreValor);
        mensaje.textContent = `Bienvenidos persona nueva himalaya persona con nombre de : ${nombreValor}`;
    }
});