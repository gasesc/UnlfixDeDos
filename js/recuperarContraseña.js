const enviar = document.querySelector("#enviar");
let usuarioIinicioSesion = JSON.parse(localStorage.getItem("usaurioInicioSesion"));
let usuarioEstado = JSON.parse(localStorage.getItem("usuarioConetado"));
let arrayDeUsuarios = JSON.parse(localStorage.getItem("usuarios"));
let indiceUsuario;
const errorUsuario = document.querySelector("#errorUsuario");
const errorEmail = document.querySelector("#errorEmail");
let emailInput = document.querySelector("#email");
let usuarioInput = document.querySelector("#username");
let emailEncontrado = false;
let usuarioEncontrado = false;
const modalConfirmacion = document.getElementById("modalConfirmacion");
const modalOk = document.getElementById("modalOk");

function validarEmail(e) {
    let inputEmail = e.target.value;
    if (usuarioEstado !== true) {
        if (arrayDeUsuarios.find(usuario => usuario.email === inputEmail)) {
            indiceUsuario = arrayDeUsuarios.findIndex(usuario => usuario.email === inputEmail);
            errorEmail.classList.remove("errorOn");
            errorEmail.classList.add("errorOculto");
            emailEncontrado = true;
        } else {
            errorEmail.classList.remove("errorOculto");
            errorEmail.classList.add("errorOn");
            emailEncontrado = false;
        }
    }
}

function validarUsuario(e) {
    let inputUsuario = e.target.value;
    if (usuarioEstado !== true) {
        if (arrayDeUsuarios[indiceUsuario].nombreDeUsuario === inputUsuario) {
            errorUsuario.classList.remove("errorOn");
            errorUsuario.classList.add("errorOculto");
            console.log(arrayDeUsuarios[indiceUsuario].nombreDeUsuario);
            usuarioEncontrado = true;
        } else {
            errorUsuario.classList.remove("errorOculto");
            errorUsuario.classList.add("errorOn");
            console.log("no encuentro nada");
            usuarioEncontrado = false;
        }
    }
}

function validarDatosEncontrados() {
    if (usuarioEncontrado === true && emailEncontrado === true) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
}

function mostrarModal(e) {
    if (!enviar.disabled) {
        e.preventDefault();
        modalConfirmacion.style.display = "block";
    }
}

function redirigirFormulario() {
    document.getElementById("recuperarForm").submit();
}

emailInput.addEventListener("input", validarEmail);
usuarioInput.addEventListener("input", validarUsuario);
emailInput.addEventListener("input", validarDatosEncontrados);
usuarioInput.addEventListener("input", validarDatosEncontrados);
enviar.addEventListener("click", mostrarModal);
modalOk.addEventListener("click", redirigirFormulario);
