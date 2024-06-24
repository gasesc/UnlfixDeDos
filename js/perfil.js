
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
let contraseñaLugar=null;
let contraseniaError=document.querySelector("#contrasenia2Error")
let primeraContraseña=document.querySelector("#primeraContraseña");
let segundaContraseña=document.querySelector("#segundaContraseña");
let enviarDatosInput=document.querySelector("#enviarDatos");
let tarjetaError=document.querySelector("#tarjetaError");
let pagoFacil=document.querySelector("#pagoFacil");
let rapiPago=document.querySelector("#rapipago");
let cambiosPerfil=document.querySelector("#cambiosPerfil");
let cifraError=document.querySelector("#cifraError");
let contraseniaError1=document.querySelector("#contraseniaError")

let indiceUsuario = arrayDeUsuarios.findIndex(usuario => usuario.nombreDeUsuario === usuarioIinicioSesion.nombreDeUsuario);
const metodoPagoRadios = document.querySelectorAll('input[name="payment"]');




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
    const regexContraseña = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=(?:[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){2})[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    const input =e.target.value;
    if(!regexContraseña.test(input)){
        contraseniaError1.classList.remove("errorOculto");
        contraseniaError1.classList.add("errorOn")
        console.log("no cumple con los caracteres");
    }else{
        contraseniaError1.classList.remove("errorOn");
        contraseniaError1.classList.add("errorOculto")
        contraseniaRespaldo=input;
        console.log(contraseniaRespaldo);
    }

    


}


// function verificarContasenia2(e){
//     const input =e.target;
//     if(contraseniaRespaldo===input.value){
//         for (let i = 0; i < arrayDeUsuarios.length; i++) {
//             if (arrayDeUsuarios[i].nombreDeUsuario === usuarioIinicioSesion.nombreDeUsuario) {
//                 arrayDeUsuarios[i].contraseña=input.value;//modifico el array de usuarios luego tengo que cargarlo
//                 usuarioIinicioSesion.contraseña=input.value;
//                 contraseñaLugar=input.value;
//                 console.log(contraseñaLugar);
//                 contraseniaError.classList.remove("errorOn");
//                 contraseniaError.classList.add("errorOculto");
//                 break; // Salir del bucle una vez encontrado y modificado
//             }
//             else{
//                 contraseñaLugar=null;
//                 console.log(contraseñaLugar);
//                 contraseniaError.classList.remove("errorOculto");
//                 contraseniaError.classList.add("errorOn");

//             }
//         }
        
        
//     }
//     else{
//         contraseñaLugar=null;
//         console.log(contraseñaLugar);
       
        
//     }
// }
function verificarContasenia2(e){
    let input =e.target;
    if(contraseniaRespaldo===input.value){
        if(arrayDeUsuarios[indiceUsuario].nombreDeUsuario===usuarioIinicioSesion.nombreDeUsuario){
            arrayDeUsuarios[indiceUsuario].contraseña=input.value;//modifico el array de usuarios luego tengo que cargarlo
                usuarioIinicioSesion.contraseña=input.value;
                contraseñaLugar=input.value;
                console.log(contraseñaLugar);
                contraseniaError.classList.remove("errorOculto")
                contraseniaError.classList.remove("errorOn");
                contraseniaError.classList.add("errorOculto");
        }else{
            contraseñaLugar=null;
            console.log(contraseñaLugar);
            contraseniaError.classList.remove("errorOculto");
            contraseniaError.classList.add("errorOn");

        }
    }
    else{
        contraseñaLugar=null;
        console.log(contraseñaLugar);
        contraseniaError.classList.remove("errorOculto");
        contraseniaError.classList.add("errorOn");

    }
}




function verificarTarjeta(e) {
    const regexTarjeta = /^\d{16,19}$/;
    const input = e.target.value;
    let suma = 0;

    // Verificar si el input cumple con el regex
    if (!regexTarjeta.test(input)) {
        tarjetaError.classList.remove("errorOculto");
        tarjetaError.classList.add("errorOn");
       
        console.log("no cumple con la condicion");
    } else {
        const arrayNumeros = input.split('').map(Number);
        
        // Sumar los números del array
        for (let i = 0; i < arrayNumeros.length - 1; i++) {
            suma += arrayNumeros[i];
        }

        // Verificar las condiciones y actualizar el estado del error
        if (suma % 2 !== 0 && (arrayNumeros.length - 1) % 2 === 0) {
            tarjetaError.classList.remove("errorOn");
            tarjetaError.classList.add("errorOculto");
            arrayDeUsuarios[indiceUsuario].tarjeta=input;
            usuarioIinicioSesion.tarjeta=input;
            console.log( arrayDeUsuarios[indiceUsuario].tarjeta);
        } else if (suma % 2 === 0 && (arrayNumeros.length - 1) % 2 !== 0) {
            tarjetaError.classList.remove("errorOn");
            tarjetaError.classList.add("errorOculto");
            arrayDeUsuarios[indiceUsuario].tarjeta=input;
            usuarioIinicioSesion.tarjeta=input;
            
            console.log( arrayDeUsuarios[indiceUsuario].tarjeta);
        } else {
            tarjetaError.classList.remove("errorOculto");
            tarjetaError.classList.add("errorOn");
            console.log( arrayDeUsuarios[indiceUsuario].tarjeta);
        }
    }
}

function verificarDigitos(e){
    const input=e.target.value;
    const arrayNumeros = input.split('').map(Number);
    if(arrayNumeros.length===3){
        if(arrayNumeros[0]===0 && arrayNumeros[1]===0 && arrayNumeros[2]===0){
            console.log(arrayDeUsuarios[indiceUsuario].tresDigitos);
            cifraError.classList.remove("errorOculto");
            cifraError.classList.add("errorOn");
        }else{
            arrayDeUsuarios[indiceUsuario].tresDigitos=input;
            cifraError.classList.remove("errorOn");
            cifraError.classList.add("errorOculto");
            console.log( arrayDeUsuarios[indiceUsuario].tresDigitos);
            
        }
        
    }else{
        console.log("digite un numero valido")
        cifraError.classList.remove("errorOculto");
        cifraError.classList.add("errorOn");
    }
    
}
let cuponPagoCheked=false;
function guardarCuponDePago(e) {
    const input = e.target;
    if (input.id === "pagoFacil") {
        if (input.checked) {
            arrayDeUsuarios[indiceUsuario].pagoFacil=input.value;
            cuponPagoCheked=true;
        } else {
            arrayDeUsuarios[indiceUsuario].pagoFacil= "";
            cuponPagoCheked=false;
        }
        console.log( arrayDeUsuarios[indiceUsuario].pagoFacil);
    } else if (input.id === "rapipago") {
        if (input.checked) {
            arrayDeUsuarios[indiceUsuario].rapiPago= input.value;
            cuponPagoCheked=true;
        } else {
            arrayDeUsuarios[indiceUsuario].rapiPago = "";
            cuponPagoCheked=false;
        }
        console.log( arrayDeUsuarios[indiceUsuario].rapiPago);
    }
}
function verificarMetodoDePagoSeleccionado() {
    
    let metodoSeleccionado = false;
    
    metodoPagoRadios.forEach((radio) => {
        if (radio.checked) {
            metodoSeleccionado = true;
            arrayDeUsuarios[indiceUsuario].metodoDePago = radio.value;
        }
    });

    // Si no hay ningún método de pago seleccionado, selecciona el primero por defecto
    if (!metodoSeleccionado && metodoPagoRadios.length > 0) {
        metodoPagoRadios[0].checked = true;
        arrayDeUsuarios[indiceUsuario].metodoDePago = metodoPagoRadios[0].value;
    }
}

function actualizarMetodoDePagoSeleccionado(e) {
    const input = e.target;
    if (input.name === "payment") {
        arrayDeUsuarios[indiceUsuario].metodoDePago = input.value;
        console.log(input.value)
    }
}

function enviarDatos() {
    if (contraseniaRespaldo !== null && contraseñaLugar !== null || arrayDeUsuarios[indiceUsuario].metodoDePago !== null && cuponPagoCheked !== false) {
        cambiosPerfil.disabled = false;
    } else {
        cambiosPerfil.disabled = true;
     
    }
}
function chequearValidacion(e) {
    if (cambiosPerfil.disabled) {
        e.preventDefault();
    }
}
function subirDatosActualizadosLocalStorage(){
    localStorage.setItem("usuarios",JSON.stringify(arrayDeUsuarios));
    localStorage.setItem("usaurioInicioSesion",JSON.stringify(usuarioIinicioSesion));

}
cuponDePago();
cargarDatos();
metodoPagoRadios.forEach((radio) => {
    radio.addEventListener("change", actualizarMetodoDePagoSeleccionado);
});
pagoFacil.addEventListener("change",guardarCuponDePago);
rapiPago.addEventListener("change",guardarCuponDePago);
codigo.addEventListener("input",verificarDigitos);
tarjeta.addEventListener("input",verificarTarjeta);
primeraContraseña.addEventListener("input",verificarContasenia);
segundaContraseña.addEventListener("input",verificarContasenia2);
// document.querySelector("#enviarDatos").addEventListener("click", (e) => {
//     if (cambiosPerfil.disabled) {
//         e.preventDefault();
//     }
// });
cambiosPerfil.addEventListener("click",subirDatosActualizadosLocalStorage);
enviarDatosInput.addEventListener("click",chequearValidacion);
pagoFacil.addEventListener("change",enviarDatos);
rapiPago.addEventListener("change",enviarDatos);
codigo.addEventListener("input",enviarDatos);
tarjeta.addEventListener("input",enviarDatos);
primeraContraseña.addEventListener("input",enviarDatos);
segundaContraseña.addEventListener("input",enviarDatos);


