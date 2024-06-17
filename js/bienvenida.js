// Nombre de la clave en el localStorage
const USUARIOS = 'usuarios';

// Función para inicializar el array de usuarios en el localStorage si no existe
function initializeUsers() {
    // Verifica si ya existe la clave en el localStorage
    if (!localStorage.getItem(USUARIOS)) {
        // Si no existe, crea un array vacío y guárdalo en el localStorage
        const usuariosArray = [];
        localStorage.setItem(USUARIOS, JSON.stringify(usuariosArray));
        console.log('Array de usuarios creado en el localStorage.');
    } else {
        console.log('El array de usuarios ya existe en el localStorage.');
    }
}
initializeUsers();