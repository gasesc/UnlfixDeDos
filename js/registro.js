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
let contraseniaError1=document.querySelector("#contraseniaError")
let contraseniaError=document.querySelector("#contrasenia2Error")
let tarjetaInput=document.querySelector("#numero_tarjeta");
let tarjetaError=document.querySelector("#tarjetaError");
let cifraError=document.querySelector("#cifraError");
let pagoFacil=document.querySelector("#pagoFacil");
let rapiPago=document.querySelector("#rapipago")
let cupon=document.getElementsByTagName("cupon");
let codigoSeguridadInput=document.querySelector("#codigo_seguridad");
let registrarseInput=document.querySelector("#registrarse")
let contraseniaRespaldo=null;
let arrayDeUsuarios=JSON.parse(localStorage.getItem("usuarios"));
let mensajeParaSeguir=document.querySelector("#mensajeParaSeguir")
let metodoDePagoInput=document.getElementsByName("radio_check");

const USUARIOS = 'usuarios';

//obtengo valor de localStorage
function getUsersFromLocalStorage() {
    const usuariosString = localStorage.getItem(USUARIOS);
    if (usuariosString) {
        return JSON.parse(usuariosString);
    } else {
       
        return [];
    }
}


const usuariosArray = getUsersFromLocalStorage();

const usuario = {
    nombre: "",
    apellido: "",
    email: "",
    nombreDeUsuario: "",
    contraseña: "",
    tarjeta: null,
    rapiPago:"",
    pagoFacil:"",
    tresDigitos:null,
    metodoDePago:""
};

function verificarNombre(e) {
    const regex = /^[a-zA-Z]+$/;
    const input = e.target; // El elemento que disparó el evento
    if (!regex.test(input.value)) {

        nombreError.classList.remove("errorOculto");
        nombreError.classList.add("errorOn");
        usuario.nombre=null;
        // console.log(usuario.nombre);
    }else{
        nombreError.classList.remove("errorOn");
        nombreError.classList.add("errorOculto");
        usuario.nombre=input.value;
        // console.log(usuario.nombre);
    }
}
function verificarApellido(e) {
    const regex = /^[a-zA-Z]+$/;
    const input = e.target; 
    if (!regex.test(input.value)) {

        apellidoError.classList.remove("errorOculto");
        apellidoError.classList.add("errorOn");
        usuario.apellido=null;
        // console.log(usuario.apellido);
    }else{
        apellidoError.classList.remove("errorOn");
        apellidoError.classList.add("errorOculto");
        usuario.apellido=input.value;
        // console.log(usuario.apellido);
    }
}

function verificarCorreo(e){
    
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let input =e.target;
    if(!regexCorreo.test(input.value)){
        emailError.classList.remove("errorOculto");
        emailError.classList.add("errorOn");
        usuario.email=null;
        // console.log(usuario.email)
    }
    else{
        emailError.classList.remove("errorOn");
        emailError.classList.add("errorOculto");
        usuario.email=input.value;
        // console.log(usuario.email);

    }
}
function verificarUsuario(e){
    const regexUsuario= /^[a-zA-Z0-9]+$/;
    let input =e.target;
    if(!regexUsuario.test(input.value)){
        usuarioError.classList.remove("errorOculto");
        usuarioError.classList.add("errorOn");
        usuario.nombreDeUsuario=null;
        // console.log(usuario.nombreDeUsuario);
    }
    else{
        usuarioError.classList.remove("errorOn");
        usuarioError.classList.add("errorOculto");
        usuario.nombreDeUsuario=input.value;
        // console.log(usuario.nombreDeUsuario);
    }

}
function verificarContasenia(e){
    const regexContraseña = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?=(?:[^0-9]*[0-9]){2})(?=(?:[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]){2})[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;
    const input =e.target.value;
    if(!regexContraseña.test(input)){
        contraseniaError1.classList.remove("errorOculto");
        contraseniaError1.classList.add("errorOn")
        // console.log("no cumple con los caracteres");
    }else{
        contraseniaError1.classList.remove("errorOn");
        contraseniaError1.classList.add("errorOculto")
        contraseniaRespaldo=input;
        // console.log(contraseniaRespaldo);
    }

    


}
function verificarContasenia2(e){
    const input =e.target;
    if(contraseniaRespaldo===input.value){
        usuario.contraseña=input.target;
        contraseniaError.classList.remove("errorOn");
        contraseniaError.classList.add("errorOculto");
        usuario.contraseña=input.value;
        // console.log(usuario.contraseña);
    }
    else{
        contraseniaError.classList.remove("errorOculto");
        contraseniaError.classList.add("errorOn");
        usuario.contraseña=null;
        // console.log(usuario.contraseña);
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
        usuario.tarjeta = null;
        // console.log(usuario.tarjeta);
    } else {
        const arrayNumeros = input.split('').map(Number);
        
       
        for (let i = 0; i < arrayNumeros.length - 1; i++) {
            suma += arrayNumeros[i];
        }

        
        if (suma % 2 !== 0 && (arrayNumeros.length - 1) % 2 === 0) {
            tarjetaError.classList.remove("errorOn");
            tarjetaError.classList.add("errorOculto");
            usuario.tarjeta = input;
            // console.log(usuario.tarjeta);
        } else if (suma % 2 === 0 && (arrayNumeros.length - 1) % 2 !== 0) {
            tarjetaError.classList.remove("errorOn");
            tarjetaError.classList.add("errorOculto");
            usuario.tarjeta = input;
            // console.log(usuario.tarjeta);
        } else {
            tarjetaError.classList.remove("errorOculto");
            tarjetaError.classList.add("errorOn");
            usuario.tarjeta = null;
            // console.log(usuario.tarjeta);
        }
    }
}
function validarMetodoDePago(){
    const input =metodoDePagoInput;

    for( const tildado of input){
        if(tildado.checked){
            usuario.metodoDePago=tildado.value;
            // console.log(usuario.metodoDePago);
            prenderOApagarCupones();
            break;
        }
    }
}
function prenderOApagarCupones(){
    if(usuario.metodoDePago==="coupon"){
       pagoFacil.disabled=false;
       rapiPago.disabled=false;

    }else{
        pagoFacil.disabled=true;
        rapiPago.disabled=true;
    }
}

function guardarCuponDePago(e) {
    const input = e.target;
    if (input.id === "pagoFacil") {
        if (input.checked) {
            usuario.pagoFacil = input.value;
        } else {
            usuario.pagoFacil = "";
        }
        // console.log(usuario.pagoFacil);
    } else if (input.id === "rapipago") {
        if (input.checked) {
            usuario.rapiPago = input.value;
        } else {
            usuario.rapiPago = "";
        }
        // console.log(usuario.rapiPago);
    }
}
function verificarDigitos(e){
    const input=e.target.value;
    const arrayNumeros = input.split('').map(Number);
    if(arrayNumeros.length===3){
        if(arrayNumeros[0]===0 && arrayNumeros[1]===0 && arrayNumeros[2]===0){
            usuario.tresDigitos=null;
            // console.log(usuario.tresDigitos)
            cifraError.classList.remove("errorOculto");
            cifraError.classList.add("errorOn");
        }else{
            usuario.tresDigitos=input;
            // console.log(usuario.tresDigitos)
            cifraError.classList.remove("errorOn");
            cifraError.classList.add("errorOculto");
        }
        
    }else{
        // console.log("digite un numero valido")
        cifraError.classList.remove("errorOculto");
        cifraError.classList.add("errorOn");
    }
    
}
function verificarTilde(){
    if(usuario.pagoFacil==="1" &&usuario.rapiPago==="2"){
        return true;
    }
    else if(usuario.pagoFacil==="1" &&usuario.rapiPago===""){
        return true;
    }
    else if(usuario.pagoFacil==="" &&usuario.rapiPago==="2"){
        return true;
    }
    else{
        return false;
    }
}

function enviarDatos() {
    const check = verificarTilde();

    // Verificar si todos los campos necesarios están llenos y las condiciones 
    if (usuario.nombre !== null && usuario.apellido !== null && usuario.contraseña !== null &&
        usuario.nombreDeUsuario !== null && usuario.tarjeta !== null && usuario.tresDigitos !== null /*&&
        check === true*/) {
            mensajeParaSeguir.classList.remove("errorOn")
            mensajeParaSeguir.classList.add("errorOculto")
        registrarseInput.disabled = false; // Habilito el botón de registrarse
    } else {
        mensajeParaSeguir.classList.remove("errorOculto")
         mensajeParaSeguir.classList.add("errorOn")
        registrarseInput.disabled = true; // Deshabilito el botón de registrarse
    }
}
function subirUsuario(){
    usuariosArray.push(usuario);
    localStorage.setItem(USUARIOS,JSON.stringify(usuariosArray));
}

Array.from(metodoDePagoInput).forEach(metodo=>{
    metodo.addEventListener("change",validarMetodoDePago);
  
})
codigoSeguridadInput.addEventListener("input",verificarDigitos);
pagoFacil.addEventListener("change",guardarCuponDePago);
rapiPago.addEventListener("change",guardarCuponDePago);
nombreInput.addEventListener("input",verificarNombre);
apellidoInput.addEventListener("input",verificarApellido);
correoInput.addEventListener("input",verificarCorreo);
usuarioInput.addEventListener("input",verificarUsuario);
contraseniaInput.addEventListener("input",verificarContasenia);
contraseniaInput2.addEventListener("input",verificarContasenia2);
tarjetaInput.addEventListener("input",verificarTarjeta);

nombreInput.addEventListener("input", enviarDatos);
apellidoInput.addEventListener("input", enviarDatos);
correoInput.addEventListener("input", enviarDatos);
usuarioInput.addEventListener("input", enviarDatos);
contraseniaInput.addEventListener("input", enviarDatos);
contraseniaInput2.addEventListener("input", enviarDatos);
tarjetaInput.addEventListener("input", enviarDatos);
pagoFacil.addEventListener("change", enviarDatos);
rapiPago.addEventListener("change", enviarDatos);
codigoSeguridadInput.addEventListener("input", enviarDatos);
registrarseInput.addEventListener("click",subirUsuario);


