let nombreInput =document.querySelector("#nombre");//Es el input donde ingreso el nombre
let apellidoInput =document.querySelector("#apellido");
let correoInput=document.querySelector("#email")
const usuario = {
    nombre: "",
    apellido: "",
    email: "",
    nombreDeUsuario: "",
    contraseña: ""
};

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
function verificarCorreo(e){
    
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let input =e.target;
    if(!regexCorreo.test(input.value)){
        console.log("correo invalido")
    }
    else{
        console.log("correo correcto")
        usuario.email=input.value;
    }
}
nombreInput.addEventListener("input",verificar);
apellidoInput.addEventListener("input",verificar);
correoInput.addEventListener("input",verificarCorreo);



