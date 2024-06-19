const enviar =document.querySelector("#enviar");
let usuarioIinicioSesion=JSON.parse(localStorage.getItem("usaurioInicioSesion"));
let usuarioEstado=JSON.parse(localStorage.getItem("usuarioConetado"));
let arrayDeUsuarios=JSON.parse(localStorage.getItem("usuarios"));
let indiceUsuario = arrayDeUsuarios.findIndex(usuario => usuario.nombreDeUsuario === usuarioIinicioSesion.nombreDeUsuario);

function validarNombreUsuario(e){
    const inputEmail=input.value;
    if(usuarioEstado!==true){
        if(arrayDeUsuarios.find(usuario => usuario.nombreDeUsuario === input)){
            return true;
        }else{
            return false;
        }
    

    }
}
function validarEmail(e){
    const inputEmail=input.value;
    if(usuarioEstado!==true){
        if(arrayDeUsuarios.find(usuario => usuario.email === input)){
            return true;
        }else{
            return false;
        }
    

    }
}