let nombre =document.querySelector("#nombre");//Es el input donde ingreso el nombre
let apellido =document.querySelector("#apellido");

function verificar(e) {
    const regex = /^[a-zA-Z]+$/;
    const input = e.target; // El elemento que disparó el evento
    if (!regex.test(input.value)) {
        // Eliminar caracteres no permitidos
        input.value = input.value.replace(/[^a-zA-Z]/g, '');
    }else{
        console.log(e.target.value);
    }
}
nombre.addEventListener("input",verificar);
apellido.addEventListener("input",verificar);


