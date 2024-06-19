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
        "descripcion_corta": "DRAGON BALL Z",
        "url_youtube": "https://www.youtube.com/watch?v=cU6aAJWRQvU",
        "background_img": "./img/PeliYSeries/dragon ball.jpg"
    },
    {
        "id": 2,
        "descripcion_corta": "Rick y morty.",
        "url_youtube": "https://www.youtube.com/watch?v=vNRoTY_Laiw",
        "background_img": "./img/PeliYSeries/rickymorty.jpg"
    },
    {
        "id": 3,
        "descripcion_corta": "Los simspon.",
        "url_youtube": "https://www.youtube.com/watch?v=-pdCvr2sQw4",
        "background_img": "./img/PeliYSeries/simpson.jpg"
    },
    {
        "id": 4,
        "descripcion_corta": "Xmen 97.",
        "url_youtube": "https://www.youtube.com/watch?v=o-dnfm7cDtU",
        "background_img": "./img/PeliYSeries/xmen97back.jpeg"
    },
    {
        "id": 5,
        "descripcion_corta": "Fallout.",
        "url_youtube": "https://www.youtube.com/watch?v=GExflKHU3VE",
        "background_img": "./img/PeliYSeries/fallout.jpg"
    },
    {
        "id": 6,
        "descripcion_corta": "The continental.",
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