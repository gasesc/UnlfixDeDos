const cerrarSesion=document.querySelector("#cerrar");
let usuarioIinicioSesion=JSON.parse(localStorage.getItem("usaurioInicioSesion"));
let usuarioEstado=JSON.parse(localStorage.getItem("usuarioConetado"));

function borrarUsuario(){
    usuarioEstado=false;
    localStorage.removeItem("usaurioInicioSesion");
    localStorage.setItem("usuarioConetado",JSON.stringify(usuarioEstado));

}

cerrarSesion.addEventListener("click",borrarUsuario);