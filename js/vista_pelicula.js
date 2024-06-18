
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    document.addEventListener('DOMContentLoaded', () => {
        const detallePeliculaStr = localStorage.getItem("detallePelicula");
        if (detallePeliculaStr) {
            const detalleParseado = JSON.parse(detallePeliculaStr);
            const pelicula = detallesPeliculas.find(p => p.id == detalleParseado.id);
            if (pelicula) {
                const videoId = extractVideoId(pelicula.url_youtube);
                player = new YT.Player('iframe_link', {
                    videoId: videoId,
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });
            }
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
 
    }
}


function extractVideoId(url) {
    const urlParams = new URLSearchParams((new URL(url)).search);
    return urlParams.get('v');
}


function changeVideo(videoId) {
    if (player) {
        player.loadVideoById(videoId);
    }
}


const detallesPeliculas = [
    {
        "id": 1,
        "descripcion_corta": "John Wick regresa de nuevo pero con una recompensa sobre su cabeza que persigue unos mercenarios. Tras asesinar a uno de los miembros de su gremio, Wick es expulsado y se convierte en el foco de atención de todos los sicarios de la organización.",
        "url_youtube": "https://www.youtube.com/watch?v=M7XM597XO94",
        "background_img": "../img/john-wick-4.jpg"
    },
    {
        "id": 2,
        "descripcion_corta": "MI NOMBRE ES BOBA.",
        "url_youtube": "https://www.youtube.com/watch?v=-ByYxIjmLsI",
        "background_img": "../img/PeliYSeries/cap_america.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const detallePeliculaStr = localStorage.getItem("detallePelicula");
    if (detallePeliculaStr) {
        const detalleParseado = JSON.parse(detallePeliculaStr);
        let pelicula;
        try {
            pelicula = detallesPeliculas.find(p => p.id == detalleParseado.id);
        } catch (error) {
            console.log(error);
        }
        if (pelicula) {
            document.getElementById("titulo").innerText = detalleParseado.titulo;
            document.getElementById("descripcion_corta").innerText = pelicula.descripcion_corta;
            document.getElementById("ver_ahora").href = pelicula.url_youtube;
            document.querySelector("main").style.backgroundImage = `url(${pelicula.background_img})`;

            const videoId = extractVideoId(pelicula.url_youtube);
            if (player) {
                changeVideo(videoId);
            } else {
                onYouTubeIframeAPIReady = function () {
                    player = new YT.Player('iframe_link', {
                        videoId: videoId,
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                };
            }
        }
  }
 });