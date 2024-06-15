let nombreInput =document.querySelector("#nombre");//Es el input donde ingreso el nombre
let apellidoInput =document.querySelector("#apellido");
let correoInput=document.querySelector("#email")
let nombreError=document.querySelector("#nombreError");
let apellidoError=document.querySelector("#apellidoError");
let emailError=document.querySelector("#emailError");

const usuario = {
    nombre: "",
    apellido: "",
    email: "",
    nombreDeUsuario: "",
    contraseña: ""
};

function verificarNombre(e) {
    const regex = /^[a-zA-Z]+$/;
    const input = e.target; // El elemento que disparó el evento
    if (!regex.test(input.value)) {

        nombreError.classList.remove("errorOculto");
        nombreError.classList.add("errorOn");
        usuario.nombre=null;
        console.log(usuario.nombre);
    }else{
        nombreError.classList.remove("errorOn");
        nombreError.classList.add("errorOculto");
        usuario.nombre=input.value;
        console.log(usuario.nombre);
    }
}
function verificarApellido(e) {
    const regex = /^[a-zA-Z]+$/;
    const input = e.target; // El elemento que disparó el evento
    if (!regex.test(input.value)) {

        apellidoError.classList.remove("errorOculto");
        apellidoError.classList.add("errorOn");
        usuario.apellido=null;
        console.log(usuario.apellido);
    }else{
        apellidoError.classList.remove("errorOn");
        apellidoError.classList.add("errorOculto");
        usuario.apellido=input.value;
        console.log(usuario.apellido);
    }
}

function verificarCorreo(e){
    
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let input =e.target;
    if(!regexCorreo.test(input.value)){
        emailError.classList.remove("errorOculto");
        emailError.classList.add("errorOn");
        usuario.email=null;
        console.log(usuario.email)
    }
    else{
       emailError.classList.remove("errorOn");
       emailError.classList.add("errorOculto");
        usuario.email=input.value;
        console.log(usuario.email);

    }
}
nombreInput.addEventListener("input",verificarNombre);
apellidoInput.addEventListener("input",verificarApellido);
 correoInput.addEventListener("input",verificarCorreo);



