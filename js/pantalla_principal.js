
function mostrarDetallePelicula(linkRecibido){
    var id = linkRecibido.getAttribute("data-id");
    var div = linkRecibido.querySelector("div");
    var titulo = div.getAttribute("title");
    var img = div.querySelector("img");
    var linkImagen = img.getAttribute("src");

const detallePelicula = {
    'id': id,
    'titulo' : titulo,
    'linkImagen': linkImagen
}
localStorage.setItem("detallePelicula",JSON.stringify(detallePelicula));
window.location.href = "vista_pelicula.html";

}

function mostrarDetalleSerie(linkRecibido){
    var id = linkRecibido.getAttribute("data-id");
    var div = linkRecibido.querySelector("div");
    var titulo = div.getAttribute("title");
    var img = div.querySelector("img");
    var linkImagen = img.getAttribute("src");

const detalleSerie = {
    'id': id,
    'titulo' : titulo,
    'linkImagen': linkImagen
}
localStorage.setItem("detalleSerie",JSON.stringify(detalleSerie));
window.location.href = "vista_serie.html";

}