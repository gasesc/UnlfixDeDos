const enviar =document.querySelector("#enviar");
let usuarioIinicioSesion=JSON.parse(localStorage.getItem("usaurioInicioSesion"));
let usuarioEstado=JSON.parse(localStorage.getItem("usuarioConetado"));
let arrayDeUsuarios=JSON.parse(localStorage.getItem("usuarios"));
let indiceUsuario ;
const errorUsuario=document.querySelector("#errorUsuario")
const errorEmail=document.querySelector("#errorEmail")
let emailInput=document.querySelector("#email");
let usuarioInput=document.querySelector("#username");

function validarEmail(e){
    let inputEmail=e.target.value;
    if(usuarioEstado!==true){
        if(arrayDeUsuarios.find(usuario => usuario.email === inputEmail)){
             indiceUsuario = arrayDeUsuarios.findIndex(usuario => usuario.email === inputEmail);
            errorEmail.classList.remove("errorOn");
            errorEmail.classList.add("errorOculto")
            return true;
        }else{
            errorEmail.classList.remove("errorOculto");
            errorEmail.classList.add("errorOn")
            return false;
        }
    

    }
}
function validarUsuario(e){
    let inputUsuario=e.target.value;
    if(usuarioEstado!==true){
        if(arrayDeUsuarios[indiceUsuario].nombreDeUsuario===inputUsuario){
            errorUsuario.classList.remove("errorOn");
            errorUsuario.classList.add("errorOculto")
            console.log(arrayDeUsuarios[indiceUsuario].nombreDeUsuario);
            return true;
        }else{
            errorUsuario.classList.remove("errorOculto");
            errorUsuario.classList.add("errorOn")
            console.log("no encuentro nada");
            return false;
        }
    

    }
}
emailInput.addEventListener("input",validarEmail);
usuarioInput.addEventListener("input",validarUsuario);