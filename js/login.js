function recuperarUsuarios(){
    const usuariosRegistrados=localStorage.getItem("usuarios");
    if(usuariosRegistrados!==null){
        return JSON.parse(usuariosRegistrados);
    }else{
        return null;
    }
}
let usuarioConectado=JSON.parse(localStorage.getItem("usuarioConetado"));
let usuariosRegistrados=recuperarUsuarios();
let usuarioInciadoSesion="";
const usuarioInput=document.querySelector("#usuario");
const contreniaInput=document.querySelector("#contrasenia");
const confirmarInput=document.querySelector("#confirmar");

let nombreUsuario=null;
let contrasenia=null;

function detectarNombre(e){
    let input=e.target.value;
    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.nombreDeUsuario === input);

    if(usuarioEncontrado!==undefined){
        usuarioInciadoSesion=usuarioEncontrado;
        nombreUsuario=usuarioEncontrado.nombreDeUsuario;
        console.log(nombreUsuario);
    }
    else{
        nombreUsuario=null;
        console.log(nombreUsuario);
    }

}
function detectarContrasenia(e){
    let input=e.target.value;
    if(usuarioInciadoSesion.contraseña==input){
        contrasenia=input;
        console.log(contrasenia);
    }else{
        contrasenia=null;
        console.log(contrasenia);

    }

}
function validarBoton(){
    if(nombreUsuario!==null && contrasenia!==null ){
        confirmarInput.disabled=false;
    }else{
        confirmarInput.disabled=true;
    }
}

function subirCambios(){
    usuarioConectado=true;
    localStorage.setItem("usaurioInicioSesion",JSON.stringify(usuarioInciadoSesion));
    localStorage.setItem("usuarioConetado",JSON.stringify(usuarioConectado));

}
usuarioInput.addEventListener("input",detectarNombre);
contreniaInput.addEventListener("input",detectarContrasenia);
usuarioInput.addEventListener("input",validarBoton);
contreniaInput.addEventListener("input",validarBoton);
confirmarInput.addEventListener("click",subirCambios);
