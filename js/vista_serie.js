var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

function onYouTubeIframeAPIReady() {
    document.addEventListener('DOMContentLoaded', () => {
        const detalleSerieStr = localStorage.getItem("detalleSerie");
        if (detalleSerieStr) {
            const detalleParseado = JSON.parse(detalleSerieStr);
            const serie = detallesSeries.find(p => p.id == detalleParseado.id);
            if (serie) {
                const videoId = extractVideoId(serie.url_youtube);
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


const detallesSerie = [
    {
        "id": 1,
        "descripcion_corta": "Es un guerrero de Konatz que defendió a su planeta de la amenaza de un grupo de hechiceros que invocaron a un gigantes monstruo: Hildegarn. El monstruo fue encerrado, una mitad en su cuerpo y la otra en su hermano, y fueron encerrado en unas cajas musicales enviadas a diferentes Galaxias.",
        "url_youtube": "https://www.youtube.com/watch?v=cU6aAJWRQvU",
        "background_img": "./img/PeliYSeries/tapionback.jpg"
    },
    {
        "id": 2,
        "descripcion_corta": "Rick por no poder pagar la renta de su antigua casa termina mudándose a la casa de su hija Beth y en ese momento se encuentra con su nieto Morty; un joven de 14 años sin expresión, tímido y no muy listo. Al juntarse con su nieto, Rick y Morty viven una variedad de aventuras a lo largo de universos paralelos.",
        "url_youtube": "https://www.youtube.com/watch?v=vNRoTY_Laiw",
        "background_img": "./img/PeliYSeries/rickymorty.jpg"
    },
    {
        "id": 3,
        "descripcion_corta": "La combinación de Homero, su nuevo puerco mascota, y un silo lleno de excremento podrían provocar un desastre que amenace no solo a Springfield, sino al mundo entero. Una muchedumbre enojada llega a la casa de los Simpson y divide a la familia. Con el destino de la Tierra en juego, Homero se prepara para intentar redimirse con la intención de salvar al mundo y ganarse el perdón de Marge",
        "url_youtube": "https://www.youtube.com/watch?v=-pdCvr2sQw4",
        "background_img": "./img/PeliYSeries/simpson.jpg"
    },
    {
        "id": 4,
        "descripcion_corta": "La historia sigue las aventuras de los X-Men, un grupo de mutantes con habilidades especiales que luchan por proteger un mundo que los teme y los odia. La serie retoma la trama donde la dejó la serie original, abordando las nuevas amenazas y desafíos que enfrentan los X-Men en su misión de coexistencia pacífica entre humanos y mutantes. Con personajes icónicos como Wolverine, Cyclops, Storm y Jean Grey, X-Men '97 promete revivir el espíritu de la serie original con una narrativa moderna..",
        "url_youtube": "https://www.youtube.com/watch?v=o-dnfm7cDtU",
        "background_img": "./img/PeliYSeries/xmen97back.jpeg"
    },
    {
        "id": 5,
        "descripcion_corta": "Los pacíficos habitantes de un cómodo refugio antinuclear se ven forzados a regresar a la superficie. Arriba les espera un mundo desolador, increíblemente complejo y poblado, alegremente extraño y altamente violento.",
        "url_youtube": "https://www.youtube.com/watch?v=GExflKHU3VE",
        "background_img": "./img/PeliYSeries/fallout.jpg"
    },
    {
        "id": 6,
        "descripcion_corta": "Ambientada en la Nueva York de los años 70, Winston Scott recluta un equipo para enfrentarse a una gran conspiración provocada por el ataque de su hermano al The Continental. El sangriento drama de acción explora la colisión del amor familiar, el destino y la venganza.",
        "url_youtube": "https://www.youtube.com/watch?v=Rxry6_88tXw",
        "background_img": "./img/PeliYSeries/continentalback.jpeg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const detalleSerieStr = localStorage.getItem("detalleSerie");
    if (detalleSerieStr) {
        const detalleParseado = JSON.parse(detalleSerieStr);
        let serie;
        try {
            serie = detallesSerie.find(p => p.id == detalleParseado.id);
        } catch (error) {
            console.log(error);
        }
        if (serie) {
            document.getElementById("titulo").innerText = detalleParseado.titulo;
            document.getElementById("descripcion_corta").innerText = serie.descripcion_corta;
            document.getElementById("ver_ahora").href = serie.url_youtube;
            document.querySelector("main").style.backgroundImage = `url(${serie.background_img})`;

            const videoId = extractVideoId(serie.url_youtube);
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