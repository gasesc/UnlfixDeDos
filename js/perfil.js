
let usuarioIinicioSesion=JSON.parse(localStorage.getItem("usaurioInicioSesion"));
let usuarioEstado=JSON.parse(localStorage.getItem("usuarioConetado"));
let arrayDeUsuarios=JSON.parse(localStorage.getItem("usuarios"));
const nombre =document.querySelector("#nombre");
const tarjeta =document.querySelector("#tarjeta")
const codigo=document.querySelector("#codigo");
let checkboxes = document.querySelectorAll('input[name="coupon-method"]');
let valor;
let email=document.querySelector("#email");
let contraseniaRespaldo=null;
let contraseniaError=document.querySelector("#contrasenia2Error")
let primeraContraseña=document.querySelector("#primeraContraseña");



function cuponDePago(){
    if(usuarioIinicioSesion.pagoFacil!==""){
        valor=usuarioIinicioSesion.pagoFacil;
    }else if(usuarioIinicioSesion.rapiPago!==""){
        valor=usuarioIinicioSesion.rapiPago;
    }
}
function cargarDatos(){
    if(usuarioEstado===true){
        nombre.textContent=usuarioIinicioSesion.nombreDeUsuario;
        tarjeta.placeholder=usuarioIinicioSesion.tarjeta;
        codigo.placeholder=usuarioIinicioSesion.tresDigitos;
        checkboxes.forEach(function(checkbox) {
            if (checkbox.value == valor) {
                checkbox.checked = true;
            }
        });
        email.textContent=usuarioIinicioSesion.email;

    }
}
function verificarContasenia(e){
    const input =e.target;
    contraseniaRespaldo=input.value;

}
function verificarContasenia2(e){
    const input =e.target;
    if(contraseniaRespaldo===input.value){
        for (let i = 0; i < arrayDeUsuarios.length; i++) {
            if (arrayDeUsuariosn[i].nombreDeUsuario === usuarioIinicioSesion.nombreDeUsuario) {
                arrayDeUsuarios[i].email=input.value;//modifico el array de usuarios luego tengo que cargarlo
                break; // Salir del bucle una vez encontrado y modificado
            }
        }
        
        contraseniaError.classList.remove("#errorOn");
        contraseniaError.classList.add("errorOculto");
        
    }
    else{
        contraseniaError.classList.remove("errorOculto");
        contraseniaError.classList.add("#errorOn");
        usuario.contraseña=null;
        console.log(usuario.contraseña);
    }
}


cuponDePago();
cargarDatos();
