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
const usuarioError=document.querySelector("#usuarioNoEncontrado");
const contraseñaError=document.querySelector("#contraseniaError");

let nombreUsuario=null;
let contrasenia=null;

function detectarNombre(e){
    let input=e.target.value;
    const usuarioEncontrado = usuariosRegistrados.find(usuario => usuario.nombreDeUsuario === input);

    if(usuarioEncontrado!==undefined){
        usuarioInciadoSesion=usuarioEncontrado;
        nombreUsuario=usuarioEncontrado.nombreDeUsuario;
        // console.log(nombreUsuario);
        usuarioError.classList.remove("errorOn")
        usuarioError.classList.add("errorOculto")
    }
    else{
        nombreUsuario=null;
        // console.log(nombreUsuario);
        usuarioError.classList.remove("errorOculto")
        usuarioError.classList.add("errorOn")
    }

}
function detectarContrasenia(e){
    let input=e.target.value;
    if(usuarioInciadoSesion.contraseña==input){
        contrasenia=input;
        // console.log(contrasenia);
        contraseñaError.classList.remove("errorOn")
        contraseñaError.classList.add("errorOculto")
    }else{
        contrasenia=null;
        // console.log(contrasenia);
        contraseñaError.classList.remove("errorOculto")
        contraseñaError.classList.add("errorOn")

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
