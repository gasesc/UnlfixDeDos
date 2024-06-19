
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
        "background_img": "./img/john-wick-4.jpg"
    },
    {
        "id": 2,
        "descripcion_corta": "Sam Wilson es un ex militar paracaidista que trabaja con veteranos en Washington, D.C. Los militares le están entrenando secretamente en combate aéreo utilizando un dispositivo de alas diseñado para él. Así es como Falcon se convierte en un aliado indispensable del Capitán América y la Viuda Negra.",
        "url_youtube": "https://www.youtube.com/watch?v=vNRoTY_Laiw",
        "background_img": "./img/PeliYSeries/capamericawinterback.jpg"
    },
    {
        "id": 3,
        "descripcion_corta": "La Capitana Carol Susan Jane Danvers es una ex piloto de la Fuerza Aérea de los Estados Unidos que, al destruir el Motor de velocidad de la luz fabricado por su mentora Mar-Vell, fue expuesta a la energía del Teseracto, obteniendo poderes cósmicos y fue raptada para servir al Imperio Kree.",
        "url_youtube": "https://www.youtube.com/watch?v=Z1BCujX3pw8",
        "background_img": "./img/PeliYSeries/capmarvelback.jpg"
    },
    {
        "id": 4,
        "descripcion_corta": "Después de que otro incidente internacional involucre a Los Vengadores, causando varios daños colaterales, aumentan las presiones políticas para instaurar un sistema que exija más responsabilidades y que determine cuándo deben contratar los servicios del grupo de superhéroes. Esta nueva situación dividirá a Los Vengadores, mientras intentan proteger al mundo de un nuevo y terrible villano.",
        "url_youtube": "https://www.youtube.com/watch?v=-ByYxIjmLsI",
        "background_img": "./img/PeliYSeries/civilwar.jpg"
    },
    {
        "id": 5,
        "descripcion_corta": "Basado en el anti-héroe menos convencional de la Marvel, Deadpool narra el origen de un ex-operativo de la fuerzas especiales llamado Wade Wilson, reconvertido a mercenario, y que tras ser sometido a un cruel experimento adquiere poderes de curación rápida, adoptando Wade entonces el alter ego de Deadpool.",
        "url_youtube": "https://www.youtube.com/watch?v=0JnRdfiUMa8",
        "background_img": "./img/PeliYSeries/deadpoolback.jpg"
    },
    {
        "id": 6,
        "descripcion_corta": "Doctor Strange sigue la historia del talentoso neurocirujano Doctor Stephen Strange quien, tras un trágico accidente automovilístico, debe poner a un lado su ego y aprender los secretos del mundo del misticismo y las dimensiones paralelas.",
        "url_youtube": "https://www.youtube.com/watch?v=DYyMsYgZDJM",
        "background_img": "./img/PeliYSeries/strangeback.jpg"
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