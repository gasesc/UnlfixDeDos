let nombreInput =document.querySelector("#nombre");//Es el input donde ingreso el nombre
let apellidoInput =document.querySelector("#apellido");
let correoInput=document.querySelector("#email");
let usuarioInput=document.querySelector("#nombreUsuario");
let nombreError=document.querySelector("#nombreError");
let apellidoError=document.querySelector("#apellidoError");
let emailError=document.querySelector("#emailError");
let usuarioError=document.querySelector("#usuarioError");
let contraseniaInput=document.querySelector("#contrasenia");
let contraseniaInput2=document.querySelector("#contrasenia2");
let contraseniaError=document.querySelector("#contrasenia2Error")
let tarjetaInput=document.querySelector("#numero_tarjeta");
let tarjetaError=document.querySelector("#tarjetaError");
let cifraError=document.querySelector("#cifraError");
let contraseniaRespaldo=null;

const usuario = {
    nombre: "",
    apellido: "",
    email: "",
    nombreDeUsuario: "",
    contraseña: "",
    tarjeta:""
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
function verificarUsuario(e){
    const regexUsuario= /^[a-zA-Z0-9]+$/;
    let input =e.target;
    if(!regexUsuario.test(input.value)){
        usuarioError.classList.remove("errorOculto");
        usuarioError.classList.add("errorOn");
        usuario.nombreDeUsuario=null;
        console.log(usuario.nombreDeUsuario);
    }
    else{
        usuarioError.classList.remove("errorOn");
        usuarioError.classList.add("errorOculto");
        usuario.nombreDeUsuario=input.value;
        console.log(usuario.nombreDeUsuario);
    }

}
function verificarContasenia(e){
    const input =e.target;
    contraseniaRespaldo=input.value;

}
function verificarContasenia2(e){
    const input =e.target;
    if(contraseniaRespaldo===input.value){
        usuario.contraseña=input.target;
        contraseniaError.classList.remove("#errorOn");
        contraseniaError.classList.add("errorOculto");
        usuario.contraseña=input.value;
        console.log(usuario.contraseña);
    }
    else{
        contraseniaError.classList.remove("errorOculto");
        contraseniaError.classList.add("#errorOn");
        usuario.contraseña=null;
        console.log(usuario.contraseña);
    }
}

function verificarTarjeta(e){
    const regexTarjeta= /^\d{16,19}$/;
    const input=e.target;
    if(!regexTarjeta.test(input.value)){
        tarjetaError.classList.remove("errorOculto");
        tarjetaError.classList.add("errorOn");
        usuario.tarjeta=null;
        console.log(usuario.tarjeta);
    }else{
        tarjetaError.classList.remove("errorOn");
        tarjetaError.classList.add("errorOculto");
        usuario.tarjeta=input.value;
        console.log(usuario.tarjeta);
    }

}

nombreInput.addEventListener("input",verificarNombre);
apellidoInput.addEventListener("input",verificarApellido);
correoInput.addEventListener("input",verificarCorreo);
usuarioInput.addEventListener("input",verificarUsuario);
contraseniaInput.addEventListener("input",verificarContasenia);
contraseniaInput2.addEventListener("input",verificarContasenia2);
tarjetaInput.addEventListener("input",verificarTarjeta);



